// Definir una interface Usuario con: id, name, email, phone.

interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

// Escribir una función async function obtenerUsuarios(): Promise<Usuario[]> que use fetch
// y devuelva los usuarios tipados.

async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        // hacemos el fetch a la URL y esperamos con await
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // si la respuesta es inválida tiramos un error
        if (!respuesta.ok) {
            throw new Error("Error al obtener los datos");
        }
        
        // convertimos la respuesta a JSON y le avisamos a TS que es un array de Usuarios 
        const usuarios: Usuario[] = await respuesta.json();
        return usuarios;

    // Manejar errores con try/catch
    } catch (error) { 
        console.error("Hubo un problema:", error);
        return [];
    }
}

// Llamar la función y mostrar nombre y email de cada usuario en la consola.

obtenerUsuarios().then(usuarios => {
    for (const user of usuarios) {
        console.log(`Nombre: ${user.name} | Email: ${user.email}`);
    }
});