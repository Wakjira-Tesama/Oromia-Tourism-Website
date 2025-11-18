import express from "express";
import {
  createBooking,
  getBookingsByAdmin,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/create", createBooking);
router.get("/admin/:admin_id", getBookingsByAdmin);
router.put("/:id/status", updateBookingStatus);

export default router;
