const mongoose = require("mongoose");
const { MONGO_URL } = require("../../config/config");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // stop app if DB fails
  }
};

module.exports = connectDB;
