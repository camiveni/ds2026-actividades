const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autor.controller');
const { validate, validateParams } = require('../middlewares/validate.middleware');
const { autorCreateSchema, autorUpdateSchema, autorIdParamSchema } = require('../validations/autor.validation');

router.get('/', autorController.getAll);
router.get('/:id', validateParams(autorIdParamSchema), autorController.getById);
router.post('/', validate(autorCreateSchema), autorController.create);
router.put('/:id', validateParams(autorIdParamSchema), validate(autorUpdateSchema), autorController.update);
router.delete('/:id', validateParams(autorIdParamSchema), autorController.remove);

module.exports = router;