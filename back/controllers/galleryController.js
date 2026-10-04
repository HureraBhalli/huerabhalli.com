const Gallery = require('../models/Gallery');
const fs = require('fs');
const path = require('path');

// Generic helper to build handlers for each category
const buildGalleryHandlers = (category) => ({
  // CREATE — single image
  create: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, error: 'Image is required' });
      }

      const item = await Gallery.create({
        category,
        image: req.file.filename,
      });

      res.status(201).json({ success: true, data: item });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // GET ALL
  getAll: async (req, res) => {
    try {
      const items = await Gallery.find({ category }).sort({ createdAt: -1 });
      res.json({ success: true, count: items.length, data: items });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // GET BY ID
  getById: async (req, res) => {
    try {
      const item = await Gallery.findOne({ _id: req.params.id, category });
      if (!item) return res.status(404).json({ success: false, error: 'Not found' });
      res.json({ success: true, data: item });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // UPDATE — replace image
  update: async (req, res) => {
    try {
      const item = await Gallery.findOne({ _id: req.params.id, category });
      if (!item) return res.status(404).json({ success: false, error: 'Not found' });

      if (req.file) {
        // delete old
        const oldPath = path.join(__dirname, '..', 'uploads', item.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        item.image = req.file.filename;
      }

      await item.save();
      res.json({ success: true, data: item });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // DELETE
  remove: async (req, res) => {
    try {
      const item = await Gallery.findOne({ _id: req.params.id, category });
      if (!item) return res.status(404).json({ success: false, error: 'Not found' });

      const p = path.join(__dirname, '..', 'uploads', item.image);
      if (fs.existsSync(p)) fs.unlinkSync(p);

      await Gallery.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },
});

module.exports = { buildGalleryHandlers };