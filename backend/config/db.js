import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not defined in .env");
  }

  await mongoose.connect(uri);
  console.log("MongoDB Connected");
};