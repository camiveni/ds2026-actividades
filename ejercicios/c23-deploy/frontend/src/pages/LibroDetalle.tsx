import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert, Button, Card, Badge } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import { apiFetch } from '../services/api';
import { obtenerToken } from '../services/sesion';

export function LibroDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: libro, loading, error } = useFetch<any>(`/libros/${id}`);

  let esAdmin = false;
  const token = obtenerToken();
  
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      
      console.log("Datos dentro del JWT:", payload);
      
      const rolUsuario = (payload.rol || payload.role || '').toUpperCase();
      esAdmin = rolUsuario === 'ADMIN'; 
    } catch (e) {
      console.error("Error al leer el token");
    }
  }

  const handleEliminar = async () => {
    if (window.confirm('¿Estás seguro de que querés eliminar este libro del catálogo?')) {
      try {
        await apiFetch(`/libros/${id}`, { method: 'DELETE' });
        alert('Libro eliminado con éxito');
        navigate('/catalogo');
      } catch (err: any) {
        alert(err.message || 'Hubo un error al eliminar el libro. Revisá los permisos.');
      }
    }
  };

  if (loading) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
  if (error) return <Container className="mt-5"><Alert variant="danger">{error}</Alert></Container>;
  if (!libro) return <Container className="mt-5"><Alert variant="warning">Libro no encontrado</Alert></Container>;

  return (
    <Container className="mt-5 mb-5">
      <Card className="border-0 shadow-sm p-4">
        <Row>
          <Col md={5} className="text-center">
            <img src={libro.imagen} alt={libro.titulo} className="img-fluid detalle-img mb-3" />
          </Col>
          <Col md={7}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h1 className="display-5 fw-bold text-dark">{libro.titulo}</h1>
              <Badge bg={libro.disponible ? "success" : "secondary"} className="fs-6 mt-2">
                {libro.disponible ? "Disponible" : "Sin stock"}
              </Badge>
            </div>
            
            <h3 className="text-muted mb-4">{libro.autor?.nombre}</h3>
            <h4 className="text-primary fw-bold mb-4">${libro.precio}</h4>
            
            <div className="bg-light p-3 rounded mb-4">
              <p className="mb-1"><strong>Género:</strong> {libro.genero || 'Ficción'}</p>
              <p className="mb-0"><strong>ISBN:</strong> {libro.isbn || 'No registrado'}</p>
            </div>

            <div className="d-flex gap-3 mt-5">
              <Button variant="outline-secondary" onClick={() => navigate('/catalogo')}>
                Volver al catálogo
              </Button>
              
              {esAdmin && (
                <Button variant="danger" onClick={handleEliminar}>
                  🗑️ Eliminar Libro
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}