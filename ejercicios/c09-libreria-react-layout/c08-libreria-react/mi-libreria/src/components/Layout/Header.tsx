import { Navbar, Container, Nav } from 'react-bootstrap';

export function Header() {
    return (
        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">📚 Librería</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav>
                        <Nav.Link href="#home" active>Inicio</Nav.Link>
                        <Nav.Link href="#catalogo">Catálogo</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}