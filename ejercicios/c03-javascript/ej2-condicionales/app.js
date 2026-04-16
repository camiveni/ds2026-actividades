//Crear una función clasificarNota(nota) que reciba un número y 
//retorne:
// ○ "Desaprobado" si es menor a 4
// ○ "Aprobado" si es entre 4 y 7
// ○ "Promocionado" si es 8 o más

function clasificarNota(nota) {
    if (nota < 4) {
        return "desaprobado";
    } else if (nota >= 4 && nota <= 7) {
        return "aprobado";
    } else if (nota >= 8) {
        return "promocionado";
    }
}

console.log("nota 2:", clasificarNota(2));
console.log("nota 7:", clasificarNota(7));
console.log("nota 10:", clasificarNota(10));

// Crear una función diaDeLaSemana(numero) con switch que retorne 
//el nombre del día (1=Lunes...7=Domingo). Si es 6 o 7 agregar 
//"(fin de semana)". Si no es 1-7, retornar "Día inválido".

function diaDeLaSemana(numero) {
    switch (numero) {
        case 1: return "lunes"; 
        case 2: return "martes";
        case 3: return "miércoles";
        case 4: return "jueves";
        case 5: return "viernes";
        case 6: return "sábado (fin de semana)";
        case 7: return "domingo (fin de semana)";
        default:
            return "día inválido";
    }
}

console.log("día 1:", diaDeLaSemana(1));
console.log("día 6:", diaDeLaSemana(6));
console.log("día 10:", diaDeLaSemana(10));