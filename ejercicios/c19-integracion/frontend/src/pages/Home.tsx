import { Container, Row, Col } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import { Hero } from '../components/Hero';

export function Home() {
  return (
    <>
      <Hero />
      <Container className="mt-5 mb-5 text-center">
        <h2 className="mb-4">Libros Destacados</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <LibroCard
              id={1}
              titulo="Gaturro a lo grande"
              autor={{ id: 1, nombre: "Nik", nacionalidad: "Argentina" }}
              imagen="/img/gaturro.jpg"
            />
          </Col>
          <Col>
            <LibroCard
              id={2}
              titulo="El Principito"
              autor={{ id: 2, nombre: "Antoine de Saint Exupéry", nacionalidad: "Francia" }}
              imagen="/img/principito.jpg"
            />
          </Col>
          <Col>
            <LibroCard
              id={3}
              titulo="Moonwalk"
              autor={{ id: 3, nombre: "Michael Jackson", nacionalidad: "Estados Unidos" }}
              imagen="/img/moonwalk.jpg"
            />
          </Col>
          <Col>
            <Col>
            <LibroCard
              id={4}
              titulo="The Woman In Me"
              autor={{ id: 4, nombre: "Britney Spears", nacionalidad: "Estados Unidos" }}
              imagen="/img/britney.jpg"
            />
          </Col>
          </Col>
          <Col>
            <LibroCard
              id={5}
              titulo="El Alquimista"
              autor={{ id: 5, nombre: "Maybell Eequay", nacionalidad: "Argentina" }}
              imagen="/img/alquimista.jpg"
            />
          </Col>
          <Col>
            <LibroCard
              id={6}
              titulo="Cien Años de Soledad"
              autor={{ id: 6, nombre: "Maybell Eequay", nacionalidad: "Argentina" }}
              imagen="/img/soledad.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}