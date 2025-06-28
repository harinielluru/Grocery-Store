const mongoose = require('mongoose');
const User = require('./backend/src/users/user.model'); // ✅ Adjusted path

mongoose.connect('mongodb://localhost:27017/shopsmart')
  .then(async () => {
    const user = await User.findOne({ username: "admin@shop.com" });
    console.log("User Found:", user);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });
