require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// ✅ Then initialize
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
app.use('/images', express.static(path.join(__dirname, 'public/images')));
// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://product-app-frontend-tau.vercel.app'],
    credentials: true
}))
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// routes
const productRoutes = require('./src/products/product.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Shop Smart Server is running!");
  });
}
const User = require('./src/users/user.model');

mongoose.connection.once('open', async () => {
  const adminUser = await User.findOne({ username: 'admin@shop.com' });
  console.log('Admin user from DB:', adminUser);
});

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err,'wow'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
