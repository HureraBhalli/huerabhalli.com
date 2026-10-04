const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ['gig', 'thumbnail', 'banner'],
      index: true,
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Gallery', gallerySchema);