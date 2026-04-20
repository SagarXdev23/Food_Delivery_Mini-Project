import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

import { connectDB } from "./config/db.js";
import cartRouter from "./routes/cartRoute.js";

const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/images", express.static(path.resolve("uploads")));
app.use("/api/cart",cartRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ IMPORTANT: wait for DB before starting server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(4000, () => {
      console.log("Server running on http://localhost:4000");
    });

  } catch (err) {
    console.error("❌ Server failed to start:", err);
  }
};

startServer();