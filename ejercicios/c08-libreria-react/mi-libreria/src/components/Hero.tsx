import { Container, Button } from 'react-bootstrap';

export function Hero() {
    return (
        <div className="bg-primary text-white text-center p-5">
            <Container>
                <h1>Bienvenidos a la mejor librería</h1>
                <p>Tenemos los mejores libros</p>
                <Button variant="light" href="#catalogo">Ir al catálogo</Button>
            </Container>
        </div>
    );
}