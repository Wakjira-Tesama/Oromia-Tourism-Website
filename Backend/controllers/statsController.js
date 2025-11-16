import db from "../config/db.js";

export const overview = async (req, res) => {
  try {
    const user = req.user;
    if (user.role === "user") {
      const [[totalVisited]] = await db.query(
        "SELECT COUNT(*) AS total FROM visits"
      );
      const [top] = await db.query(
        "SELECT d.id,d.name,COUNT(v.id) AS cnt FROM destinations d LEFT JOIN visits v ON v.destination_id=d.id GROUP BY d.id ORDER BY cnt DESC LIMIT 5"
      );
      const [byCountry] = await db.query(
        "SELECT country, COUNT(*) AS cnt FROM visits GROUP BY country ORDER BY cnt DESC LIMIT 5"
      );
      return res.json({ totalVisited: totalVisited.total, top, byCountry });
    }
    if (user.role === "admin") {
      const [[totalBooked]] = await db.query(
        "SELECT COUNT(*) AS total FROM bookings b JOIN destinations d ON b.destination_id=d.id WHERE d.admin_id = ?",
        [user.id]
      );
      const [recent] = await db.query(
        "SELECT b.*, d.name AS destination_name FROM bookings b JOIN destinations d ON b.destination_id=d.id WHERE d.admin_id = ? ORDER BY b.created_at DESC LIMIT 10",
        [user.id]
      );
      return res.json({ totalBooked: totalBooked.total, recent });
    }
    // general_admin
    const [[totalBooked]] = await db.query(
      "SELECT COUNT(*) AS total FROM bookings"
    );
    const [recent] = await db.query(
      "SELECT b.*, d.name AS destination_name FROM bookings b JOIN destinations d ON b.destination_id=d.id ORDER BY b.created_at DESC LIMIT 10"
    );
    return res.json({ totalBooked: totalBooked.total, recent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
