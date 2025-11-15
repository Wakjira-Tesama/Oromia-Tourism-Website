import db from "../config/db.js";

export const createBooking = async (req, res) => {
  try {
    const user_id = req.user.id;
    const {
      fullname,
      email,
      phone,
      passport_no,
      nationality,
      country,
      destination_id,
    } = req.body;
    // get dest
    const [d] = await db.query(
      "SELECT id, price FROM destinations WHERE id = ?",
      [destination_id]
    );
    if (!d.length)
      return res.status(404).json({ message: "Destination not found" });
    const total_price = d[0].price || 0;
    const [r] = await db.query(
      "INSERT INTO bookings (user_id, destination_id, fullname, email, phone, passport_no, nationality, country, total_price) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        user_id,
        destination_id,
        fullname,
        email,
        phone,
        passport_no,
        nationality,
        country,
        total_price,
      ]
    );
    res.status(201).json({ id: r.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const listBookings = async (req, res) => {
  try {
    const user = req.user;
    if (user.role === "user") {
      const [rows] = await db.query(
        "SELECT b.*, d.name AS destination_name FROM bookings b JOIN destinations d ON b.destination_id = d.id WHERE b.user_id = ? ORDER BY b.created_at DESC",
        [user.id]
      );
      return res.json(rows);
    }
    if (user.role === "admin") {
      const [rows] = await db.query(
        "SELECT b.*, d.name AS destination_name FROM bookings b JOIN destinations d ON b.destination_id = d.id WHERE d.admin_id = ? ORDER BY b.created_at DESC",
        [user.id]
      );
      return res.json(rows);
    }
    // general_admin
    const [rows] = await db.query(
      "SELECT b.*, d.name AS destination_name FROM bookings b JOIN destinations d ON b.destination_id = d.id ORDER BY b.created_at DESC"
    );
    return res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const approveBooking = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;
    const [rows] = await db.query(
      "SELECT b.id, d.admin_id FROM bookings b JOIN destinations d ON b.destination_id = d.id WHERE b.id = ?",
      [id]
    );
    if (!rows.length) return res.status(404).json({ message: "Not found" });
    const booking = rows[0];
    if (user.role === "admin" && booking.admin_id !== user.id)
      return res.status(403).json({ message: "Forbidden" });
    await db.query("UPDATE bookings SET status = ? WHERE id = ?", [
      "approved",
      id,
    ]);
    // create notification for user
    await db.query(
      "INSERT INTO notifications (user_id, title, message) VALUES (?,?,?)",
      [
        booking.user_id || null,
        "Booking approved",
        `Your booking #${id} was approved`,
      ]
    );
    res.json({ message: "Approved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const uploadProof = async (req, res) => {
  try {
    const id = req.params.id;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
    if (!fileUrl) return res.status(400).json({ message: "No file" });
    await db.query("UPDATE bookings SET proof_url = ? WHERE id = ?", [
      fileUrl,
      id,
    ]);
    res.json({ message: "Proof uploaded", proof_url: fileUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
