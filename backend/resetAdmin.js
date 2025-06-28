require("dotenv").config();  // ✅ This must be the first line

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./src/users/user.model");

async function resetPassword() {
  await mongoose.connect(process.env.DB_URL); // use your actual MongoDB URL here
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const result = await User.updateOne(
    { username: "admin@shop.com" },
    { password: hashedPassword }
  );
  console.log("Password updated:", result);
  process.exit();
}

resetPassword();
