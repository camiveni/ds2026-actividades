// La respuesta tiene un campo docs que es un array.
// Definir una interface LibroOL con title, author_name?, first_publish_year?
interface LibroOL {
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}

interface RespuestaAPI {
    docs: LibroOL[];
}

// capturamos elem que creamos en el HTML
const inputBuscador = document.querySelector('#input-buscador') as HTMLInputElement;
const btnBuscar = document.querySelector('#btn-buscar') as HTMLButtonElement;
const divResultados = document.querySelector('#resultados') as HTMLDivElement;

// al hacer click
btnBuscar.addEventListener('click', async () => {
    const busqueda = inputBuscador.value.trim();

    // input vacío mostrar mensaje de error, no hacer fetch
    if (busqueda === "") {
        divResultados.innerHTML = '<p class="error">ERROR: MENSAJE VACÍO</p>'; 
        return;
    }

    divResultados.innerHTML = '<p>Buscando libros...</p>';

    try {
        // hacer fetch a la URL con el texto del input como parámetro q
        const respuesta = await fetch(`https://openlibrary.org/search.json?q=${busqueda}`);
        if (!respuesta.ok) throw new Error("ERROR EN LA API");

        const data: RespuestaAPI = await respuesta.json();
        
        // mostrar los primeros 10 resultados
        const primeros10 = data.docs.slice(0, 10); 
        
        divResultados.innerHTML = '';

        if (primeros10.length === 0) {
            divResultados.innerHTML = '<p>No se han encontrado resultados.</p>';
            return;
        }

        // como tarjetas con título, autor (si existe) y año (si existe)
        for (const libro of primeros10) {
            const card = document.createElement('div'); 
            card.className = 'card'; 

            const titulo = document.createElement('h3');
            titulo.textContent = libro.title;

            const autor = document.createElement('p');
            // validamos si el autor existe para mostrarlo
            autor.textContent = libro.author_name ? `Autor: ${libro.author_name[0]}` : 'Autor: Desconocido';

            const anio = document.createElement('p');
            // validamos si el año existe para mostrarlo
            anio.textContent = libro.first_publish_year ? `Año: ${libro.first_publish_year}` : 'Año: Desconocido';

            card.appendChild(titulo); 
            card.appendChild(autor);
            card.appendChild(anio);
            
            divResultados.appendChild(card);
        }

    } catch (error) {
        divResultados.innerHTML = '<p class="error">ERROR AL BUSCAR LOS LIBROS</p>';
    }
});