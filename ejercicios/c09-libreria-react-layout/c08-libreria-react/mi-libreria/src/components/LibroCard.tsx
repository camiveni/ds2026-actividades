import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import type { LibroCardProps } from '../types/LibroCardProps';

export function LibroCard({ titulo, autor, imagen }: LibroCardProps) {
    const [likes, setLikes] = useState<number>(0);

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imagen} alt={titulo} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{autor}</Card.Text>
                
                <div className="d-flex flex-column gap-2 mt-3">
                    <Button variant="primary" href="#libro">Ver más</Button>
                    <Button variant="outline-danger" onClick={() => setLikes(likes + 1)}>
                        ❤️ Me gusta ({likes})
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}