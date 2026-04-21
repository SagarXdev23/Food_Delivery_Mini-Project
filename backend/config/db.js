import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    // 🌐 Fix for "querySrv ECONNREFUSED" caused by ISP/Local DNS blocking SRV records.
    // This forces Node.js to use Google's Public DNS to look up the MongoDB server.
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
    
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    await mongoose.connect(uri);

    console.log("MongoDB Connected Successfully");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB runtime error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected");
    });

  } catch (error) {
    console.error("MongoDB Connection Failed");
    console.error(error.message);

    process.exit(1);
  }
};