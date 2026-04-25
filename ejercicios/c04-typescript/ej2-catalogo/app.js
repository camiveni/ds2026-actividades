"use strict";
const catalogo = [
    { isbn: "1", titulo: "Wings Of Starlight", autor: "Allison Saft", precio: 23000, disponible: true },
    { isbn: "2", titulo: "Romeo y Julieta", autor: "William Shakespeare", precio: 40000, disponible: false },
    { isbn: "3", titulo: "Gaturro y la Maldición de Tutangatón", autor: "Nik", precio: 15000, disponible: true }
];
const listadoUI = document.querySelector('#listado');
const statsUI = document.querySelector('#stats');
const inputFiltro = document.querySelector('#filtroAutor');
function buscarPorAutor(autor) {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(l => l.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((acc, l) => acc + l.precio, 0);
    return total / libros.length;
}
function renderizar(libros) {
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
