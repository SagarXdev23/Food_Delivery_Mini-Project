import mongoose from "mongoose";    
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sagarmishragla_db_user:50536802@cluster0.vg3ypz3.mongodb.net/Food-Delivery').then(() =>
        console.log('MongoDB Connected'));
} 