import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="banner-inicio text-center">
            <Container>
                <h1>Bienvenidos a la mejor librería</h1>
                <p className="lead mt-3">Tenemos los mejores libros</p>
                <Link to="/catalogo">
                    <Button className="btn btn-pastel mt-3 px-4 rounded-pill shadow-sm" size="lg">
                        Ir al catálogo
                    </Button>
                </Link>
            </Container>
        </div>
    );
}