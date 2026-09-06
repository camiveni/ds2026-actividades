import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import { useFetch } from '../hooks/useFetch';
import type { LibroCardProps } from '../types/LibroCardProps';

export function Catalogo() {
    const { data: libros, loading, error } = useFetch<LibroCardProps[]>('/libros.json');

    return (
        <Container className="mt-5 mb-5 text-center">
            <h2 className="mb-4">Nuestro Catálogo Completo</h2>

        
            {loading && <Spinner animation="border" variant="primary" />}

            {error && <Alert variant="danger">{error}</Alert>}

            {!loading && !error && (
                <Row xs={1} md={3} className="g-4">
                    {(libros ?? []).map((libro) => (
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
            )}
        </Container>
    );
}