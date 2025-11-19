import express from "express";
import { authenticate, authorize } from "../middleware/auth.js";
import {
  getNotifications,
  sendNotification,
} from "../controllers/notificationsController.js";

const router = express.Router();
router.get("/", authenticate, getNotifications);
router.post(
  "/send",
  authenticate,
  authorize(["admin", "general_admin"]),
  sendNotification
);

export default router;
