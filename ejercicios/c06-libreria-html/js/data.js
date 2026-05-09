const inputBuscador = document.querySelector('#input-buscador');
const btnBuscar = document.querySelector('#btn-buscar');
const divResultados = document.querySelector('#resultados');

btnBuscar.addEventListener('click', async () => {
    const busqueda = inputBuscador.value.trim();

    if (busqueda === "") {
        divResultados.innerHTML = '<div class="col-12"><p class="text-danger text-center">Error, ingrese un mensaje.</p></div>';
        return;
    }

    divResultados.innerHTML = '<div class="col-12"><p class="text-center">Buscando...</p></div>';

    try {
        const respuesta = await fetch(`https://openlibrary.org/search.json?q=${busqueda}`);
        if (!respuesta.ok) throw new Error("Problema con la API");

        const data = await respuesta.json();
        const primeros10 = data.docs.slice(0, 10); 
        
        divResultados.innerHTML = '';

        if (primeros10.length === 0) {
            divResultados.innerHTML = '<div class="col-12"><p class="text-center">No se encontraron libros con ese nombre.</p></div>';
            return;
        }

        primeros10.forEach(libro => {
        
            const autor = libro.author_name ? libro.author_name[0] : 'Autor desconocido';
            
            const cardHTML = `
                <div class="col">
                    <div class="card">
                        <img src="https://st2.depositphotos.com/2586633/10219/v/450/depositphotos_102194092-stock-illustration-books-vector-illustrator-stack-of.jpg" class="card-img-top" alt="Portada gen">
                        <div class="card-body">
                            <h5 class="card-title">${libro.title}</h5>
                            <p class="card-text">${autor}</p>
                            <a href="libro.html" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            `;
            
            divResultados.innerHTML += cardHTML;
        });

    } catch (error) {
        divResultados.innerHTML = '<div class="col-12"><p class="text-danger text-center">Error al buscar los libros. Intente nuevamente.</p></div>';
    }
});