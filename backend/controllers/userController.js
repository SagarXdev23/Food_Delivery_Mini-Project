import UserModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// login user

const loginUser = async (req, res) => {

    const {email, password} = req.body;

    try{
        const user = await UserModel.findOne({email});
        if(!user){
            return res.json({success: false, message: "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success: false, message: "Invalid credentials"});
        }
        
        // token create karna hai yehaa per
        const token = createToken(user._id);
        res.json({success: true, message: "User logged in successfully", token});
    }
    catch (error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }

}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
}

// register user
const registerUser = async (req, res) => {
    const {name, password, email} = req.body;
    try{
        // hame check karna hai ki user already exist karta hai ya nahi
        const exists = await UserModel.findOne({email});
        if(exists){
            return res.json({success: false, message: "User already exists"});
        }

          // validating the email and password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter a valid email"});
        }
        if(password.length < 6){
            return res.json({success: false, message: "Please enter a password with at least 6 characters"});
        }

        // password ko hash karna hai
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // user ko database me save karna hai
        const newUser = new UserModel({name, email, password: hashedPassword});
        const user = await newUser.save();

        // token create karna hai
        const token = createToken(user._id);

        res.json({success: true, message: "User registered successfully", token});
    }
      
        catch(error){
            console.log(error);
            res.json({success: false, message: "Error"})
        }
}

export { loginUser, registerUser };