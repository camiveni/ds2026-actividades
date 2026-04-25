"use strict";
let catalogo = [
    { isbn: "1244", titulo: "Wings Of Starlight", autor: "Allison Saft", precio: 23000, disponible: true },
    { isbn: "2332", titulo: "Romeo y Julieta", autor: "William Shakespeare", precio: 40000, disponible: false },
    { isbn: "3864", titulo: "Gaturro y la Maldición de Tutangatón", autor: "Nik", precio: 15000, disponible: true }
];
const listadoUI = document.querySelector('#listado');
const statsUI = document.querySelector('#stats');
const errorFormUI = document.querySelector('#errorForm');
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((acc, l) => acc + l.precio, 0);
    return total / libros.length;
}
function validarFormulario() {
    const inputTitulo = document.querySelector('#nuevoTitulo');
    const inputAutor = document.querySelector('#nuevoAutor');
    const inputPrecio = document.querySelector('#nuevoPrecio');
    const inputDisponible = document.querySelector('#nuevoDisponible');
    const titulo = inputTitulo.value.trim();
    const autor = inputAutor.value.trim();
    const precio = Number(inputPrecio.value);
    if (titulo === "" || autor === "" || precio <= 0) {
        return null;
    }
    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible: inputDisponible.checked
    };
}
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
function eliminarLibro(isbn) {
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar(catalogo);
}
function renderizar(libros) {
    listadoUI.innerHTML = "";
    libros.forEach(l => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${l.titulo}</strong> - ${l.autor} ($${l.precio}) `;
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => eliminarLibro(l.isbn);
        li.appendChild(btnEliminar);
        listadoUI.appendChild(li);
    });
    statsUI.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros).toFixed(2)}`;
}
document.querySelector('#btnAgregar')?.addEventListener('click', () => {
    const nuevo = validarFormulario();
    if (nuevo === null) {
        errorFormUI.textContent = "Error: Datos inválidos.";
    }
    else {
        errorFormUI.textContent = "";
        agregarLibro(nuevo);
        document.querySelector('#nuevoTitulo').value = "";
        document.querySelector('#nuevoAutor').value = "";
        document.querySelector('#nuevoPrecio').value = "";
    }
});
document.querySelector('#filtrar')?.addEventListener('click', () => {
    const autorBusqueda = document.querySelector('#filtroAutor').value;
    const filtrados = catalogo.filter(l => l.autor.toLowerCase().includes(autorBusqueda.toLowerCase()));
    renderizar(filtrados);
});
document.querySelector('#mostrarDisponibles')?.addEventListener('click', () => {
    renderizar(catalogo.filter(l => l.disponible));
});
document.querySelector('#mostrarTodos')?.addEventListener('click', () => renderizar(catalogo));
renderizar(catalogo);
