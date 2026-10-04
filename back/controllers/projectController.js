const Project = require('../models/Project');
const fs = require('fs');
const path = require('path');

const buildProjectHandlers = (category) => ({
  // CREATE — title + desc + thumbnail + images
  create: async (req, res) => {
    try {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.status(400).json({ success: false, error: 'Title and description required' });
      }
      if (!req.files || !req.files.thumbnail) {
        return res.status(400).json({ success: false, error: 'Thumbnail is required' });
      }

      const item = await Project.create({
        category,
        title,
        description,
        thumbnail: req.files.thumbnail[0].filename,
        images: req.files.images ? req.files.images.map((f) => f.filename) : [],
      });

      res.status(201).json({ success: true, data: item });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // GET ALL
  getAll: async (req, res) => {
    try {
      const items = await Project.find({ category }).sort({ createdAt: -1 });
      res.json({ success: true, count: items.length, data: items });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // GET BY ID
  getById: async (req, res) => {
    try {
      const item = await Project.findOne({ _id: req.params.id, category });
      if (!item) return res.status(404).json({ success: false, error: 'Not found' });
      res.json({ success: true, data: item });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // UPDATE
  update: async (req, res) => {
    try {
      const item = await Project.findOne({ _id: req.params.id, category });
      if (!item) return res.status(404).json({ success: false, error: 'Not found' });

      const { title, description } = req.body;
      if (title) item.title = title;
      if (description) item.description = description;

      if (req.files && req.files.thumbnail) {
        const oldPath = path.join(__dirname, '..', 'uploads', item.thumbnail);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        item.thumbnail = req.files.thumbnail[0].filename;
      }

      if (req.files && req.files.images) {
        item.images = [...item.images, ...req.files.images.map((f) => f.filename)];
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
      const item = await Project.findOne({ _id: req.params.id, category });
      if (!item) return res.status(404).json({ success: false, error: 'Not found' });

      // delete thumbnail
      if (item.thumbnail) {
        const p = path.join(__dirname, '..', 'uploads', item.thumbnail);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      // delete images
      if (item.images && item.images.length) {
        item.images.forEach((img) => {
          const p = path.join(__dirname, '..', 'uploads', img);
          if (fs.existsSync(p)) fs.unlinkSync(p);
        });
      }

      await Project.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },
});

module.exports = { buildProjectHandlers };