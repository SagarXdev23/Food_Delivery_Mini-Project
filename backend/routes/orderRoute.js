import express from "express";
import { placeOrder, verifyOrder, userOrders, listOrders, updateStatus } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const OrderRouter = express.Router();

OrderRouter.post("/place", authMiddleware, placeOrder);
OrderRouter.post("/verify", verifyOrder);
OrderRouter.post("/userorders", authMiddleware, userOrders);
OrderRouter.get("/list", listOrders);
OrderRouter.post("/status", updateStatus);

export default OrderRouter;
