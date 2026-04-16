//Crear un array con al menos 8 números
//Usando for o for...of, calcular y mostrar en consola:
//○ La suma total
//○ El promedio
//○ El número mayor
//○ El número menor

const numeros = [3, 7, 2, 9, 5, 20, 30, 23, 89, 76];

let sumaTotal = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (const num of numeros) {
    sumaTotal = sumaTotal + num;

    if (num > mayor) {
        mayor = num;
    }

    if (num < menor) {
        menor = num;
    }
}

const promedio = sumaTotal / numeros.length;

console.log(`Suma total: ${sumaTotal}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);

//Crear una función generarAsteriscos(n) que reciba un número y 
//retorne un string con esa cantidad de asteriscos (ej: 
//generarAsteriscos(5) → "*****"). Usar un bucle for.

function generarAsteriscos(n) {
    let resultado = "";
    for (i = 0; i < n; i++) {
        resultado = resultado + "*";
    }
    return resultado;
}

console.log(`Asteriscos (4): ${generarAsteriscos(4)}`);
