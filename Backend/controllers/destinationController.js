import db from "../config/db.js";
import fs from "fs";

export const listDestinations = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT d.*, u.first_name AS admin_first, u.last_name AS admin_last FROM destinations d JOIN users u ON d.admin_id = u.id ORDER BY d.created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getDestination = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query("SELECT * FROM destinations WHERE id = ?", [
      id,
    ]);
    if (!rows.length) return res.status(404).json({ message: "Not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createDestination = async (req, res) => {
  try {
    const { name, description, price, is_available } = req.body;
    const admin_id = req.user.id;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;
    const [r] = await db.query(
      "INSERT INTO destinations (admin_id,name,description,price,image_url,is_available) VALUES (?,?,?,?,?,?)",
      [admin_id, name, description, price || 0, image_url, is_available ? 1 : 1]
    );
    res.status(201).json({ id: r.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateDestination = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, is_available } = req.body;
    // fetch dest
    const [rows] = await db.query("SELECT * FROM destinations WHERE id = ?", [
      id,
    ]);
    if (!rows.length) return res.status(404).json({ message: "Not found" });
    const dest = rows[0];
    // admin can edit only own destination; general_admin can edit any but price only via price route
    if (req.user.role === "admin" && dest.admin_id !== req.user.id)
      return res.status(403).json({ message: "Forbidden" });
    const image_url = req.file
      ? `/uploads/${req.file.filename}`
      : dest.image_url;
    await db.query(
      "UPDATE destinations SET name = ?, description = ?, image_url = ?, is_available = ?, updated_at = NOW() WHERE id = ?",
      [
        name || dest.name,
        description || dest.description,
        image_url,
        typeof is_available !== "undefined"
          ? is_available
            ? 1
            : 0
          : dest.is_available,
        id,
      ]
    );
    res.json({ message: "Updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteDestination = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query("SELECT * FROM destinations WHERE id = ?", [
      id,
    ]);
    if (!rows.length) return res.status(404).json({ message: "Not found" });
    const dest = rows[0];
    if (req.user.role === "admin" && dest.admin_id !== req.user.id)
      return res.status(403).json({ message: "Forbidden" });
    // delete image file if exists
    if (dest.image_url) {
      try {
        fs.unlinkSync(dest.image_url.replace(/^\//, ""));
      } catch (e) {}
    }
    await db.query("DELETE FROM destinations WHERE id = ?", [id]);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const editPrice = async (req, res) => {
  try {
    const id = req.params.id;
    const { price } = req.body;
    await db.query(
      "UPDATE destinations SET price = ?, updated_at = NOW() WHERE id = ?",
      [price, id]
    );
    res.json({ message: "Price updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
