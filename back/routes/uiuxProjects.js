const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { buildProjectHandlers } = require('../controllers/projectController');

const h = buildProjectHandlers('uiux');

const uploadFields = upload.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'images', maxCount: 10 },
]);

router.post('/', uploadFields, h.create);
router.get('/', h.getAll);
router.get('/:id', h.getById);
router.put('/:id', uploadFields, h.update);
router.delete('/:id', h.remove);

module.exports = router;