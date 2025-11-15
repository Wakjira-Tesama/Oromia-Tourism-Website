import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// In-memory users (you can replace with DB later)
const users = [];

export const register = async (req, res) => {
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

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const existing = users.find((u) => u.email === email);
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.length + 1,
      fullName,
      email,
      phone,
      passportNumber,
      nationality,
      gender,
      country,
      password: hashedPassword,
      role: "user",
    };

    users.push(newUser);
    res.json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "secret",
      {
        expiresIn: "1h",
      }
    );

    res.json({ message: "Login successful", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const me = (req, res) => {
  res.json({ message: "Profile details", user: req.user });
};

export const createAdminByGeneral = (req, res) => {
  res.json({ message: "Admin created by general admin!" });
};
