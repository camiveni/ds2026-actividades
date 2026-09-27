import { z } from 'zod';

export const libroSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio'),
  precio: z.number().positive('El precio debe ser mayor a 0'),
  imagen: z.string().url('Debe ser una URL válida'),
  autorId: z.number().int().positive('El ID de autor es obligatorio'),
  disponible: z.boolean()
});

export type LibroFormData = z.infer<typeof libroSchema>;