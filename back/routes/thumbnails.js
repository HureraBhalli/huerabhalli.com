const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { buildGalleryHandlers } = require('../controllers/galleryController');

const h = buildGalleryHandlers('thumbnail');

router.post('/', upload.single('image'), h.create);
router.get('/', h.getAll);
router.get('/:id', h.getById);
router.put('/:id', upload.single('image'), h.update);
router.delete('/:id', h.remove);

module.exports = router;