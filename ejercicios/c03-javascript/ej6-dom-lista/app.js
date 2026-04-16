const input = document.querySelector('#productoInput');
const boton = document.querySelector('#botonAgregar');
const lista = document.querySelector('#listaDinamica');
const textoContador = document.querySelector('#contadorProductos');

let total = 0;

function actualizarContador() {
    textoContador.innerHTML = `${total} PRODUCTOS EN LA LISTA`;
}

boton.addEventListener('click', () => {
    const nombreProducto = input.value;

    if (nombreProducto === "") {
        alert("ESCRIBA UN PRODUCTO");
        return;
    }

    const nuevoItem = document.createElement('li');
    nuevoItem.innerHTML = `${nombreProducto} `;

    const botonEliminar = document.createElement('button');
    botonEliminar.innerHTML = "ELIMINAR";
    
    botonEliminar.addEventListener('click', () => {
        nuevoItem.remove();
        total--;
        actualizarContador();
    });

    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);

    total++;
    actualizarContador();
    input.value = "";

});