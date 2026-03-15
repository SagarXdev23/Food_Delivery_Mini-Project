import mongoose from "mongoose";

const ATLAS_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://sagarmishragla_db_user:50536802@cluster0.vg3ypz3.mongodb.net/Food-Delivery?retryWrites=true&w=majority";
const LOCAL_URI = "mongodb://127.0.0.1:27017/Food-Delivery";

export const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(ATLAS_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Connected (Atlas)");
    return;
  } catch (atlasError) {
    console.warn("Atlas connection failed, falling back to local MongoDB:", atlasError.message);
  }

  try {
    await mongoose.connect(LOCAL_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Connected (Local)");
  } catch (localError) {
    console.error("Failed to connect to MongoDB (Atlas + Local):", localError.message);
    throw localError;
  }
};