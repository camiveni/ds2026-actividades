import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { libroSchema } from '../schemas/LibroSchema';
import type { LibroCardProps } from '../types/LibroCardProps';

interface LibroNuevoProps {
    onAgregar: (libro: LibroCardProps) => void;
}

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro+Nuevo';

export function LibroNuevo({ onAgregar }: LibroNuevoProps) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        titulo: '',
        autor: '',
        precio: '',
        disponible: true
    });

    const [errores, setErrores] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const resultado = libroSchema.safeParse(form);

        if (!resultado.success) {
            const erroresMapeados: Record<string, string> = {};
            for (const issue of resultado.error.issues) {
                const campo = String(issue.path[0]);
                if (!erroresMapeados[campo]) {
                    erroresMapeados[campo] = issue.message;
                }
            }
            setErrores(erroresMapeados);
            return;
        }

        setErrores({});
        onAgregar({
            id: Date.now(),
            titulo: resultado.data.titulo,
            autor: resultado.data.autor,
            imagen: IMG_PLACEHOLDER
        });
        
        navigate('/catalogo');
    };

    return (
        <Container className="mt-5 mb-5" style={{ maxWidth: '500px' }}>
            <Card className="p-4 shadow-sm">
                <h2 className="mb-4 text-center">Cargar Nuevo Libro</h2>
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Título del Libro</Form.Label>
                        <Form.Control 
                            name="titulo" 
                            value={form.titulo} 
                            onChange={handleChange}
                            isInvalid={!!errores.titulo}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errores.titulo}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control 
                            name="autor" 
                            value={form.autor} 
                            onChange={handleChange}
                            isInvalid={!!errores.autor}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errores.autor}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Precio ($)</Form.Label>
                        <Form.Control 
                            type="number"
                            name="precio" 
                            value={form.precio} 
                            onChange={handleChange}
                            isInvalid={!!errores.precio}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errores.precio}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check 
                            type="checkbox"
                            label="Disponible para venta" 
                            name="disponible"
                            checked={form.disponible}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100 mt-2">
                        Guardar Libro
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}