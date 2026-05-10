"use strict";
async function renderizarUsuarios() {
    // capturamos los elem del HTML 
    const lista = document.querySelector('#lista-usuarios');
    const cargando = document.querySelector('#cargando');
    const errorMensaje = document.querySelector('#error-mensaje');
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok)
            throw new Error("ERROR EN LA API");
        const usuarios = await respuesta.json();
        // si todo salió bien, ocultamos texto de carga
        cargando.style.display = 'none';
        // creamos un <li> por cada usuario
        for (const user of usuarios) {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            lista.appendChild(li); // lo metemos adentro del <ul>
        }
    }
    catch (error) {
        // si hay error, ocultamos la carga y mostramos el texto rojo
        cargando.style.display = 'none';
        errorMensaje.style.display = 'block';
        errorMensaje.textContent = "ERROR: no se pudo cargar la lista de usuarios";
    }
}
renderizarUsuarios();
