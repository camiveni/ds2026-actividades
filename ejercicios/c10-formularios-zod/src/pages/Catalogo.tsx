import { Container, Row, Col } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import type { LibroCardProps } from '../types/LibroCardProps';

export function Catalogo({ libros }: { libros: LibroCardProps[] }) {
    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-4">Nuestro Catálogo Completo</h2>
            <Row xs={1} md={3} className="g-4">
                {libros.map((libro) => (
                    <Col key={libro.id}>
                        <LibroCard 
                            id={libro.id}
                            titulo={libro.titulo} 
                            autor={libro.autor} 
                            imagen={libro.imagen} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}