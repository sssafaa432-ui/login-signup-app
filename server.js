const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Connect to MongoDB
mongoose.connect("mongodb+srv://user123:userPassword@cluster0.et1sfjt.mongodb.net/?appName=Cluster0")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log(err));

// 🔹 User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// 🔹 Signup Route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashed });
  res.json({ message: "Signup successful" });
});

// 🔹 Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid password" });

  res.json({ message: "Login successful" });
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  // Check if email exists in MongoDB
  // Generate a random 6-digit code and save it (in-memory for now)
  res.json({ success: true, message: "A reset code has been sent to your email." });
});

app.post("/verify-code", async (req, res) => {
  const { email, code } = req.body;
  // Verify the code matches what was generated
  res.json({ success: true, message: "Code verified." });
});

app.post("/reset-password", async (req, res) => {
  const { newPassword } = req.body;
  // Update the user’s password in MongoDB
  res.json({ success: true, message: "Password reset successful!" });
});

// 🔹 Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));

