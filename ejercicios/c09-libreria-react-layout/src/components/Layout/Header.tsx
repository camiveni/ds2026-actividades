import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">📚 Librería</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}