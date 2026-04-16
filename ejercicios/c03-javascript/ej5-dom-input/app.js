const input = document.querySelector('#alturaInput');
const boton = document.querySelector('#botonGenerar');
const pantalla = document.querySelector('#resultado');

boton.addEventListener('click', () => {
    const altura = Number(input.value);
    let arbol = "";

    for (let i = 1; i <= altura; i++) {
        
        for (let j = 0; j < i; j++) {
            arbol += "*";
        }

        arbol += "\n";
    }

    pantalla.innerHTML = arbol;
    pantalla.style.color = "pink";
});