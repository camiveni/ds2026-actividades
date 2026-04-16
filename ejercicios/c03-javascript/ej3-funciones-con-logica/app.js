//Crear función calcularPrecioFinal(monto, medioPago) donde 
//medioPago es "E" (efectivo), "D" (débito) o "C" (crédito):
// ○ Monto menor a $200: sin descuento
// ○ Entre $200 y $400: 30% off en efectivo, 20% débito, 10% 
//crédito
// ○ Mayor a $400: 40% off para todos
//Retornar precio finak

function calcularPrecioFinal(monto, medioPago) {
    let descuento = 0;

    if (monto > 400) {
        descuento = 0.40;
    } else if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") {
            descuento = 0.30; // 30% off efectivo
        } else if (medioPago === "D") {
            descuento = 0.20; // 20% off débito
        } else if (medioPago === "C") {
            descuento = 0.10; // 10% off crédito 
        } else {
            descuento = 0;
        }
    }
    const montoFinal = monto * (1 - descuento);
    return montoFinal;
}

//Probar con al menos 5 combinaciones diferentes de monto y 
//medio de pago. Mostrar cada resultado en consola con template 
//literals: "Monto: $X | Pago: Y | Final: $Z"

const m1 = 100; const p1 = "E";
console.log(`Monto: $${m1} | Pago: ${p1} | Final: $${calcularPrecioFinal(m1, p1)}`);

const m2 = 255; const p2 = "E";
console.log(`Monto: $${m2} | Pago: ${p2} | Final: $${calcularPrecioFinal(m2, p2)}`);

const m3 = 276; const p3 = "D";
console.log(`Monto: $${m3} | Pago: ${p3} | Final: $${calcularPrecioFinal(m3, p3)}`);

const m4 = 300; const p4 = "C";
console.log(`Monto: $${m4} | Pago: ${p4} | Final: $${calcularPrecioFinal(m4, p4)}`);

const m5 = 500; const p5 = "C";
console.log(`Monto: $${m5} | Pago: ${p5} | Final: $${calcularPrecioFinal(m5, p5)}`);