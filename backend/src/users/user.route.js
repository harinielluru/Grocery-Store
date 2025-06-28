const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // ✅ Add this

const router = express.Router();
router.post("/admin", async (req, res) => {
  const { username, password } = req.body;

  console.log("🔐 Login attempt received");
  console.log("👉 Username:", username);
  console.log("👉 Password:", password);

  try {
    const admin = await User.findOne({ username });

    if (!admin) {
      console.log("❌ Admin not found");
      return res.status(404).send({ message: "Admin not found!" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    console.log("🔍 Password match:", isMatch);

    if (!isMatch) {
      console.log("❌ Incorrect password");
      return res.status(401).send({ message: "Invalid password!" });
    }

    console.log("✅ Login success");

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      process.env.JWT_SECRET_KEY || "mysupersecretkey123456",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Authentication successful",
      token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("🔥 Failed to login as admin", error);
    res.status(500).send({ message: "Failed to login as admin" });
  }
});

module.exports = router;

