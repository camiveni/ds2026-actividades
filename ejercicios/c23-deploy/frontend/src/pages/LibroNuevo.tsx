import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { libroSchema, type LibroFormData } from '../schemas/libroSchema';
import { apiFetch } from '../services/api';

export function LibroNuevo() {
  const [errorBackend, setErrorBackend] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LibroFormData>({
    resolver: zodResolver(libroSchema),
    defaultValues: {
      titulo: '',
      precio: 0,
      imagen: '',
      autorId: 1,
      disponible: true
    }
  });
  
  const onSubmit = async (data: LibroFormData) => {
    try {
      setErrorBackend(null);
      await apiFetch('/libros', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      navigate('/catalogo');
    } catch (err: any) {
      setErrorBackend(err.message || 'Error al crear el libro');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4 mb-5">
      <Card style={{ width: '500px' }} className="p-4 shadow-sm">
        <h3 className="text-center mb-4">Nuevo Libro</h3>

        {errorBackend && <Alert variant="danger">{errorBackend}</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Rayuela"
              {...register('titulo')}
              isInvalid={!!errors.titulo}
            />
            <Form.Control.Feedback type="invalid">
              {errors.titulo?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="precio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 16000"
              {...register('precio', { valueAsNumber: true })}
              isInvalid={!!errors.precio}
            />
            <Form.Control.Feedback type="invalid">
              {errors.precio?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="imagen">
            <Form.Label>URL de Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://..."
              {...register('imagen')}
              isInvalid={!!errors.imagen}
            />
            <Form.Control.Feedback type="invalid">
              {errors.imagen?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="autorId">
            <Form.Label>ID de Autor</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 1"
              {...register('autorId', { valueAsNumber: true })}
              isInvalid={!!errors.autorId}
            />
            <Form.Control.Feedback type="invalid">
              {errors.autorId?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="disponible">
            <Form.Check
              type="checkbox"
              label="Disponible para préstamo/venta"
              {...register('disponible')}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Guardando...' : 'Crear Libro'}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}