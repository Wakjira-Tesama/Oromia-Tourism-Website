import { db } from "../config/db.js";
import bcrypt from "bcryptjs";

export const addGeneralAdmin = (req, res) => {
  const { fullname, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  const sql =
    "INSERT INTO general_admins (fullname, email, password) VALUES (?,?,?)";
  db.query(sql, [fullname, email, hashed], (err) => {
    if (err)
      return res.status(500).json({ message: "Error creating general admin" });
    res.status(201).json({ message: "General admin created successfully" });
  });
};

export const getDestinationsForEdit = (req, res) => {
  const sql = `SELECT d.*, a.fullname AS admin_name 
               FROM destinations d JOIN admins a ON d.admin_id = a.id`;
  db.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({ message: "Error fetching destinations" });
    res.json(results);
  });
};

export const editDestinationPrice = (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  const sql = "UPDATE destinations SET price = ? WHERE id = ?";
  db.query(sql, [price, id], (err) => {
    if (err) return res.status(500).json({ message: "Error updating price" });
    res.json({ message: "Price updated successfully" });
  });
};
