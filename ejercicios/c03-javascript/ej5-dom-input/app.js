const input = document.querySelector('#alturaInput');
const boton = document.querySelector('#botonGenerar');
const pantalla = document.querySelector('#resultado');

function generarAsteriscos(n) {
    let resultado = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 0; j < i; j++) {
            resultado += "*";
        }

        resultado += "\n";
    }
    return resultado;
}

boton.addEventListener('click', () => {
    const altura = Number(input.value);

    if (input.value === "" || altura < 1) {
        pantalla.innerHTML = "ERROR. EL NÚMERO INGRESADO DEBE SER MAYOR A 0";
        pantalla.style.color = "red";
        return;
    }

    const arbolFinal = generarAsteriscos(altura);

    pantalla.innerHTML = arbolFinal;
    pantalla.style.color = "pink";
});