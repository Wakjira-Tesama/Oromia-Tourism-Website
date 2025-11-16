import db from "../config/db.js";

export const getNotifications = async (req, res) => {
  try {
    const user = req.user;
    const [rows] = await db.query(
      "SELECT * FROM notifications WHERE user_id = ? OR user_id IS NULL ORDER BY created_at DESC",
      [user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const sendNotification = async (req, res) => {
  try {
    const { user_id, title, message } = req.body;
    await db.query(
      "INSERT INTO notifications (user_id, title, message) VALUES (?,?,?)",
      [user_id || null, title, message]
    );
    res.json({ message: "Notification sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
