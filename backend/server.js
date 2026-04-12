import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

import 'dotenv/config';

// app config

const app = express();
const port = 4000;

// middlewares
app.use(express.json()); // to parsed the request from frontend to backend
app.use(cors());  // to allow the frontend to access the backend


// database config
import { connectDB } from "./config/db.js";
connectDB();


// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static(path.resolve("uploads"))) // to access the images from frontend
app.use("/api/user", userRouter);



app.get("/", (req, res) => {
    res.send("API Working")
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});

