const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const connectDB = async () => {
  console.log('🔍 STEP 1 — connectDB called');
  console.log('🔍 STEP 2 — MONGODB_URI:', process.env.MONGODB_URI);

  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.log('❌ STEP 3 — URI is undefined, .env not loaded');
      throw new Error('MONGODB_URI is not defined in .env');
    }

    console.log('🔍 STEP 4 — Attempting MongoDB connection...');
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;