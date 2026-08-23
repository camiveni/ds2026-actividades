import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { LibroCardProps } from '../types/LibroCardProps';

export function LibroCard({ id, titulo, autor, imagen }: LibroCardProps) {
    const [likes, setLikes] = useState<number>(0);

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imagen} alt={titulo} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{autor}</Card.Text>
                
                <div className="d-flex flex-column gap-2 mt-3">
                    <Link to={`/libros/${id}`} className="btn btn-primary">Ver más</Link>
                    <Button variant="outline-danger" onClick={() => setLikes(likes + 1)}>
                        ❤️ Me gusta ({likes})
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}