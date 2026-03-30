import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";


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
app.use("/images", express.static("uploads")) // to access the images from frontend



app.get("/", (req, res) => {
    res.send("API Working")
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});

