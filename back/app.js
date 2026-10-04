require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/connect');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/gigs', require('./routes/gigs'));
app.use('/api/thumbnails', require('./routes/thumbnails'));
app.use('/api/banners', require('./routes/banners'));
app.use('/api/app-projects', require('./routes/appProjects'));
app.use('/api/uiux-projects', require('./routes/uiuxProjects'));

app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Hurera Bhalli API is running 🚀' });
});

const PORT = process.env.PORT || 3300;

console.log('🔍 APP.JS — PORT:', PORT);
console.log('🔍 APP.JS — MONGODB_URI:', process.env.MONGODB_URI);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});