const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autor.controller');
const { validate, validateParams } = require('../middlewares/validate.middleware');
const { authenticate, authorize } = require('../middlewares/auth.middleware');
const { autorCreateSchema, autorUpdateSchema, autorIdParamSchema } = require('../validations/autor.validation');

router.get('/', autorController.getAll);
router.get('/:id', validateParams(autorIdParamSchema), autorController.getById);

router.post('/', authenticate, authorize('ADMIN'), validate(autorCreateSchema), autorController.create);
router.put('/:id', authenticate, authorize('ADMIN'), validateParams(autorIdParamSchema), validate(autorUpdateSchema), autorController.update);
router.delete('/:id', authenticate, authorize('ADMIN'), validateParams(autorIdParamSchema), autorController.remove);

module.exports = router;