import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="bg-primary text-white text-center p-5">
            <Container>
                <h1>Bienvenidos a la mejor librería</h1>
                <p>Tenemos los mejores libros</p>
                <Link to="/catalogo">
                    <Button variant="light">Ir al catálogo</Button>
                </Link>
            </Container>
        </div>
    );
}