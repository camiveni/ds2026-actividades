const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro.controller');
const { validate, validateParams } = require('../middlewares/validate.middleware');
const { authenticate, authorize } = require('../middlewares/auth.middleware');
const { libroCreateSchema, libroUpdateSchema, idParamSchema } = require('../validations/libro.validation');

router.get('/', libroController.getAll);
router.get('/:id', validateParams(idParamSchema), libroController.getById);

router.post('/', authenticate, authorize('ADMIN'), validate(libroCreateSchema), libroController.create);
router.put('/:id', authenticate, authorize('ADMIN'), validateParams(idParamSchema), validate(libroUpdateSchema), libroController.update);
router.delete('/:id', authenticate, authorize('ADMIN'), validateParams(idParamSchema), libroController.remove);

module.exports = router;