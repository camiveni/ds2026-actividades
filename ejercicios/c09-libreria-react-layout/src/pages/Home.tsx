import { Container, Row, Col } from 'react-bootstrap';
import { Hero } from '../components/Hero';
import { LibroCard } from '../components/LibroCard';

export function Home() {
    return (
        <>
            <Hero />
            <Container className="mt-5 mb-5">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <LibroCard 
                            id={1}
                            titulo="GATURRO MUNDIAL 26" 
                            autor="Nik" 
                            imagen="https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/a95e9bcb-08f2-459c-a7c3-4bf4ee182271/mediamodifierc0ce9a85c3f.webp" 
                        />
                    </Col>
                    <Col>
                        <LibroCard 
                            id={2}
                            titulo="EL PRINCIPITO" 
                            autor="Antoine de Saint Exupéry" 
                            imagen="https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f7d5a0c6-58d6-41f5-807b-f7db4448290f/mediamodifier4a852b98b23.webp" 
                        />
                    </Col>
                    <Col>
                        <LibroCard 
                            id={3}
                            titulo="MOONWALK" 
                            autor="Michael Jackson" 
                            imagen="https://http2.mlstatic.com/D_NQ_NP_709922-MLA100001205053_112025-O.webp" 
                        />
                    </Col>
                    <Col>
                        <LibroCard 
                            id={4}
                            titulo="LA MUJER QUE SOY" 
                            autor="Britney Spears" 
                            imagen="https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/da4a2352-43bb-47cd-91ed-c7f70d77d7ac/9789506446994_9545757a-b92c-4550-a819-d4d2a2d538be.jpg" 
                        />
                    </Col>
                    <Col>
                        <LibroCard 
                            id={5}
                            titulo="GUÍA DE LA RANITA PARA QUERERTE MÁS CADA DÍA" 
                            autor="Maybell Eequay" 
                            imagen="https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/e46a2b10-8abf-4ac5-9acf-5f42efa99a32/811nwG0QBoL._UF1000,1000_QL80_.jpg" 
                        />
                    </Col>
                    <Col>
                        <LibroCard 
                            id={6}
                            titulo="GUÍA DE LA RANITA PARA LA VIDA" 
                            autor="Maybell Eequay" 
                            imagen="https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f716b273-f096-4489-9ce0-e210214f4d6b/5.jpg" 
                        />
                    </Col>
                </Row>
            </Container>

        </>
    );
}