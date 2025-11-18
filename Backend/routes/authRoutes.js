import express from "express";
import {
  register,
  login,
  me,
  createAdminByGeneral,
} from "../controllers/authController.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register); // public user register
router.post("/login", login); // login for any
router.get("/me", authenticate, me); // get profile

// route: general_admin creates admin
router.post(
  "/create-admin",
  authenticate,
  authorize(["general_admin"]),
  createAdminByGeneral
);

export default router;
