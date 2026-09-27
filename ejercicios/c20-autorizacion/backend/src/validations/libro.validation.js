const { z } = require('zod');

const libroCreateSchema = z.object({
  titulo: z.string().trim().min(1, "El título es obligatorio").max(200),
  precio: z.number().int().positive("El precio debe ser mayor a 0"),
  imagen: z.string().min(1, "La imagen es obligatoria"),
  disponible: z.boolean().optional(),
  autorId: z.number().int().positive("El autor es obligatorio")
});

const libroUpdateSchema = libroCreateSchema.partial();

const idParamSchema = z.object({
  id: z.coerce.number().int().positive("El id debe ser un número positivo")
});

module.exports = { libroCreateSchema, libroUpdateSchema, idParamSchema };