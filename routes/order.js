const express = require("express");
const {
  getAvailableSlots,
  createOrder,
  getOrderStatus,
  getOrderHistory,
} = require("../controllers/order");
const router = express.Router();

router.get("/available-slots", getAvailableSlots);

router.post("/create-order", createOrder);

router.get("/order-status/:id", getOrderStatus);

router.get("/order-history", getOrderHistory);

module.exports = router;
