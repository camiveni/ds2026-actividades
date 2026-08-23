const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autor.controller');

router.get('/', autorController.getAll);
router.get('/:id', autorController.getById);
router.post('/', autorController.create);
router.put('/:id', autorController.update);
router.delete('/:id', autorController.remove);

module.exports = router;