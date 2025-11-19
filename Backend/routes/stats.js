import express from "express";
import { authenticate } from "../middleware/auth.js";
import { overview } from "../controllers/statsController.js";

const router = express.Router();
router.get("/overview", authenticate, overview);

export default router;
