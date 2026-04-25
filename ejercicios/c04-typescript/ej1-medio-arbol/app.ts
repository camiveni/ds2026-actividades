const input = document.querySelector('#alturaInput') as HTMLInputElement;
const boton = document.querySelector('#botonGenerar') as HTMLButtonElement;
const pantalla = document.querySelector('#resultado') as HTMLElement;

function generarAsteriscos(n: number): string {
    let resultado: string = "";

    for (let i: number = 1; i <= n; i++) {

        for (let j: number = 0; j < i; j++) {
            resultado += "*";
        }

        resultado += "\n";
    }
    return resultado;
}

boton.addEventListener('click', (): void => {
    const altura: number = Number(input.value);

    if (input.value === "" || altura < 1) {
        pantalla.innerHTML = "ERROR. EL NÚMERO INGRESADO DEBE SER MAYOR A 0";
        pantalla.style.color = "red";
        return;
    }

    const arbolFinal: string = generarAsteriscos(altura);

    pantalla.innerText = arbolFinal;
    pantalla.style.color = "pink";
});