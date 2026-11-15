import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export function LibroDetalle() {
    const { id } = useParams<{ id: string }>();

    return (
        <Container className="text-center mt-5 mb-5">
            <h1 className="display-4">Detalle del Libro</h1>
            <p className="lead mt-3">
                Estás leyendo el detalle del libro con el id: <strong>{id}</strong>
            </p>
        </Container>
    );
}