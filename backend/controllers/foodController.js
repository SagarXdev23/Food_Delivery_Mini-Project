import foodModel from "../models/foodmodel.js";    
import fs from "fs";


// add food item
export const addFood= async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({  // food schema se data leke aayega
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
    })
    try {
        await food.save();  // data ko database me save karna
        res.json({success : true, message : "Food item added successfully"})
    }
    catch (error) {
        console.log(error); // error ko console me print karna
        res.json({success : false, message : "Failed to add food item"}) // error aane par response bhejega
    }
}


// all food list

const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({}); // database se saare food items ko find karna
        res.json({success : true, data: food}) // success hone par response bhejega
    }   
    catch (error) {
        console.log(error); // error ko console me print karna
        res.json({success : false, message : "Failed to fetch food items"}) // error aane par response bhejega

    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        console.log("Removing food with ID:", req.body.id);
        const food = await foodModel.findById(req.body.id)
        console.log("Found food:", food);

        if (!food) {
            return res.json({success: false, message: "Food item not found"})
        }

            fs.unlink(`uploads/${food.image}`,() => {}) 

            await foodModel.findByIdAndDelete(req.body.id) 
            
            res.json({success : true, message : "Food item removed"}) // success hone par response bhejega
    }
    catch (error) {
        console.log(error);
        res.json({success : false, message : "Error"}) // error aane par response dega
    }
      
}
export {listFood, removeFood}
