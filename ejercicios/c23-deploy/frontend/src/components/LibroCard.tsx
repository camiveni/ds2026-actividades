import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { LibroCardProps } from '../types/LibroCardProps';

export function LibroCard({ id, titulo, autor, imagen }: LibroCardProps) {
  const [likes, setLikes] = useState<number>(0);

  return (
    <Card className="h-100 border-0 shadow-sm libro-card">
      <Card.Img variant="top" src={imagen} alt={titulo} className="card-img-top" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{titulo}</Card.Title>
        <Card.Text className="text-muted">{autor.nombre}</Card.Text>
        
        <div className="d-flex flex-column gap-2 mt-auto pt-3">
          <Link to={`/libros/${id}`} className="btn btn-pastel fw-semibold">Ver detalle</Link>
          <Button variant="outline-danger" onClick={() => setLikes(likes + 1)}>
            ❤️ Me gusta ({likes})
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}