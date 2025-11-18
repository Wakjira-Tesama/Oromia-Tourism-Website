import express from "express";
import {
  addDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
  upload,
} from "../controllers/destinationController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addDestination);
router.get("/", getAllDestinations);
router.get("/:id", getDestinationById);
router.put("/:id", updateDestination);
router.delete("/:id", deleteDestination);

export default router;
