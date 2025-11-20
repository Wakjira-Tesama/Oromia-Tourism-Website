import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import destRoutes from "./routes/destinations.js";
import bookingRoutes from "./routes/bookings.js";
import statsRoutes from "./routes/stats.js";
import notificationRoutes from "./routes/notifications.js";
import uploadRoutes from "./routes/uploads.js";
import db from "./config/db.js";
import http from "http";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/destinations", destRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/uploads", uploadRoutes);

const PORT = process.env.PORT || 5000;

// ✅ Create server manually so we can handle port conflicts gracefully
const server = http.createServer(app);

db.getConnection()
  .then((conn) => {
    conn.release();

    server.listen(PORT);
    server.on("listening", () =>
      console.log(`✅ Server running on port ${PORT}`)
    );

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.warn(`⚠️  Port ${PORT} is busy, trying another one...`);
        setTimeout(() => {
          server.listen(PORT + 1);
          console.log(`✅ Server restarted on port ${PORT + 1}`);
        }, 1000);
      } else {
        console.error("❌ Server error:", err);
        process.exit(1);
      }
    });
  })
  .catch((err) => {
    console.error("❌ MySQL connection error:", err);
    process.exit(1);
  });
