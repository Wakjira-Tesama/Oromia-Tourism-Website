import express from "express";
import { uploadSingle } from "../middleware/upload.js";
const router = express.Router();

router.post("/image", uploadSingle("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file" });
  res.json({ url: `/uploads/${req.file.filename}` });
});

export default router;
