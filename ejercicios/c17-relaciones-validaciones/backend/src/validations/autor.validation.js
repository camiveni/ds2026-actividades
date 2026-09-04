const { z } = require('zod');

const autorCreateSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  nacionalidad: z.string().trim().min(1, "La nacionalidad es obligatoria")
});

const autorUpdateSchema = autorCreateSchema.partial();

const autorIdParamSchema = z.object({
  id: z.coerce.number().int().positive("El id debe ser un número positivo")
});

module.exports = { autorCreateSchema, autorUpdateSchema, autorIdParamSchema };