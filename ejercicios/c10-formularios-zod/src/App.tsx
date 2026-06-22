import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';
import { Catalogo } from './pages/Catalogo';
import { LibroDetalle } from './pages/LibroDetalle';
import { LibroNuevo } from './pages/LibroNuevo';
import type { LibroCardProps } from './types/LibroCardProps';

const LIBROS_INICIALES: LibroCardProps[] = [
    {
        id: 1,
        titulo: "GATURRO MUNDIAL 26",
        autor: "Nik",
        imagen: "https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/a95e9bcb-08f2-459c-a7c3-4bf4ee182271/mediamodifierc0ce9a85c3f.webp"
    },
    {
        id: 2,
        titulo: "EL PRINCIPITO",
        autor: "Antoine de Saint Exupéry",
        imagen: "https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f7d5a0c6-58d6-41f5-807b-f7db4448290f/mediamodifier4a852b98b23.webp"
    }
];

function App() {
    const [libros, setLibros] = useState<LibroCardProps[]>(LIBROS_INICIALES); 
    const agregarLibro = (nuevo: LibroCardProps) => setLibros([...libros, nuevo]);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo libros={libros} />} />
                <Route path="/libros/:id" element={<LibroDetalle />} />
                <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
            </Routes>
        </Layout>
    );
}

export default App;