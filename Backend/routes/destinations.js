import express from "express";
import { authenticate, authorize } from "../middleware/auth.js";
import {
  listDestinations,
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination,
  editPrice,
} from "../controllers/destinationController.js";
import { uploadSingle } from "../middleware/upload.js";

const router = express.Router();

router.get("/", listDestinations);
router.get("/:id", getDestination);

// admin & general_admin create
router.post(
  "/",
  authenticate,
  authorize(["admin", "general_admin"]),
  uploadSingle("image"),
  createDestination
);

// admin (owner) or general_admin update
router.put(
  "/:id",
  authenticate,
  authorize(["admin", "general_admin"]),
  uploadSingle("image"),
  updateDestination
);

// delete (general_admin or owner admin)
router.delete(
  "/:id",
  authenticate,
  authorize(["admin", "general_admin"]),
  deleteDestination
);

// only general_admin can edit price via this route
router.patch("/:id/price", authenticate, authorize("general_admin"), editPrice);

export default router;
