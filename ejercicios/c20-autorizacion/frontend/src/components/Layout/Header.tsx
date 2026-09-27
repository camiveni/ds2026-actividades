import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function Header() {
  const { usuario, logout, tieneRol } = useAuth();
  const navigate = useNavigate();

  const manejarSesion = () => {
    if (usuario) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">📚 Librería</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            {tieneRol('ADMIN') && (
              <Nav.Link as={Link} to="/libros/nuevo">Nuevo Libro</Nav.Link>
            )}
          </Nav>

          <Nav className="align-items-center gap-2">
            {usuario && (
              <Navbar.Text className="me-2">
                Hola, {usuario.nombre}
              </Navbar.Text>
            )}
            <Button
              variant={usuario ? 'outline-danger' : 'outline-primary'}
              size="sm"
              onClick={manejarSesion}
            >
              {usuario ? 'Salir' : 'Ingresar'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}