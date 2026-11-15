import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function SinPermiso() {
  return (
    <Container className="py-4">
      <Alert variant="warning">
        <Alert.Heading>Acceso denegado</Alert.Heading>
        <p>No tenés los permisos necesarios para acceder a esta sección.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/catalogo" className="btn btn-outline-warning">
            Volver al catálogo
          </Link>
        </div>
      </Alert>
    </Container>
  );
}