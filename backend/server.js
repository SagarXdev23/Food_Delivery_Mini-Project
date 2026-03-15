import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

