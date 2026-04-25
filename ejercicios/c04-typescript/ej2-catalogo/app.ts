interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
    { isbn: "1244", titulo: "Wings Of Starlight", autor: "Allison Saft", precio: 23000, disponible: true },
    { isbn: "2332", titulo: "Romeo y Julieta", autor: "William Shakespeare", precio: 40000, disponible: false},
    { isbn: "3864", titulo: "Gaturro y la Maldición de Tutangatón", autor: "Nik", precio: 15000, disponible: true}
];

const listadoUI = document.querySelector('#listado') as HTMLUListElement;
const statsUI = document.querySelector('#stats') as HTMLParagraphElement;
const inputFiltro = document.querySelector('#filtroAutor') as HTMLInputElement;

function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(l => l.disponible);
}

function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;
    const total = libros.reduce((acc, l) => acc + l.precio, 0);
    return total / libros.length;
}

function renderizar(libros: Libro[]): void {
    listadoUI.innerHTML = "";

    libros.forEach(l => {
        const li = document.createElement('li');
        li.textContent = `${l.titulo} - ${l.autor} ($${l.precio})`;
        listadoUI.appendChild(li);
    });

    statsUI.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros).toFixed(2)}`;
}

document.querySelector('#filtrar')?.addEventListener('click', () => {
    renderizar(buscarPorAutor(inputFiltro.value));
}); 

document.querySelector('#mostrarDisponibles')?.addEventListener('click', () => {
    renderizar(librosDisponibles());
});

document.querySelector('#mostrarTodos')?.addEventListener('click', () => {
    renderizar(catalogo);
});

renderizar(catalogo);
