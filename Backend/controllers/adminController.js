import { db } from "../config/db.js";
import bcrypt from "bcryptjs";

export const createAdmin = (req, res) => {
  const { fullname, email, password, city, zone, phone } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  const sql =
    "INSERT INTO admins (fullname, email, password, city, zone, phone) VALUES (?,?,?,?,?,?)";
  db.query(sql, [fullname, email, hashed, city, zone, phone], (err) => {
    if (err) return res.status(500).json({ message: "Error adding admin" });
    res.status(201).json({ message: "Admin created successfully" });
  });
};

export const getAllAdmins = (req, res) => {
  db.query(
    "SELECT id, fullname, email, city, zone, phone FROM admins",
    (err, results) => {
      if (err)
        return res.status(500).json({ message: "Error fetching admins" });
      res.json(results);
    }
  );
};

export const deleteAdmin = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM admins WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting admin" });
    res.json({ message: "Admin deleted successfully" });
  });
};
