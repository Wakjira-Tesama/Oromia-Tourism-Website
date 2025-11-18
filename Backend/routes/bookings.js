// backend/routes/bookings.js
import express from "express";
import bcrypt from "bcryptjs";
import db from "../config/db.js";

const router = express.Router();

// ✅ POST - Add new booking
router.post("/add", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      passportNumber,
      nationality,
      gender,
      country,
      password,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !passportNumber ||
      !nationality ||
      !gender ||
      !country ||
      !password
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO bookings 
      (fullName, email, phone, passportNumber, nationality, gender, country, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(sql, [
      fullName,
      email,
      phone,
      passportNumber,
      nationality,
      gender,
      country,
      hashedPassword,
    ]);

    res.status(201).json({ message: "Booking successfully created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET - Fetch all bookings (for admin)
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, fullName, email, country, gender, created_at FROM bookings ORDER BY id DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

export default router;
