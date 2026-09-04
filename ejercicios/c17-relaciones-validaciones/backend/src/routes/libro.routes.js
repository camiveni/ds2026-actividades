const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro.controller');
const { validate, validateParams } = require('../middlewares/validate.middleware');
const { libroCreateSchema, libroUpdateSchema, idParamSchema } = require('../validations/libro.validation');

router.get('/', libroController.getAll);
router.get('/:id', validateParams(idParamSchema), libroController.getById);
router.post('/', validate(libroCreateSchema), libroController.create);
router.put('/:id', validateParams(idParamSchema), validate(libroUpdateSchema), libroController.update);
router.delete('/:id', validateParams(idParamSchema), libroController.remove);

module.exports = router;