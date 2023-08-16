const prompt = require("prompt-sync")({ sigint: true });

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

console.log("-------------- Testeo de Operaciones / Calculadora --------------");
let n1 = +prompt("Ingrese el primer número: ");
let n2 = +prompt("Ingrese el segundo número: ");

let suma = sumar(n1, n2);
let resta = restar(n1, n2);
let multiplicacion = multiplicar(n1, n2);
let division = dividir(n1, n2);
let divisionConCero = dividir(n1, 0);

console.log(`El resultado de la suma es ${suma}`);
console.log(`El resultado de la resta es ${resta}`);
console.log(`El resultado de la multiplicación es ${multiplicacion}`);
console.log(`El resultado de la división es ${division}`);
console.log(`El resultado de la división con cero es ${divisionConCero}`);

console.log("-------------- Funciones extra --------------");
// Cuadrado de un número
const cuadradoDeUnNumero = num => multiplicar(num, num);
let num = +prompt("Ingrese el número a elevar al cuadrado: ");
let cuadrado = cuadradoDeUnNumero(num);
console.log(`El cuadrado de ${num} es ${cuadrado}`);

console.log("");
// Promedio de 3 números
const promedioDeTresNumeros = (n1, n2, n3) => {
    let suma = sumar(sumar(n1,n2),n3);
    let promedio = dividir(suma, 3);

    return promedio;
};
let calif1 = +prompt("Ingrese la primer calificacíon: ");
let calif2 = +prompt("Ingrese la primer calificacíon: ");
let calif3 = +prompt("Ingrese la primer calificacíon: ");
let prom = promedioDeTresNumeros(calif1, calif2, calif3);
console.log(`El promedio es ${prom}`);

console.log("");
// Calcular porcentaje
const calcularPorcentaje = (total, porcentaje) => {
    let multiplicacion = multiplicar(total, porcentaje);
    let porciento = dividir(multiplicacion, 100);

    return porciento
}
let total = +prompt("Ingrese número total: ");
let porcentaje = +prompt("Ingrese el porcentaje a calcular: ");
let porciento = calcularPorcentaje(total, porcentaje);
console.log(`El ${porcentaje}% de ${total} es ${porciento}`);

console.log("");
// Generador de porcentaje
const GeneradorDePorcentaje = (n1, n2) => {
    let division = dividir(n1, n2);
    let porcentaje = multiplicar(division, 100);

    return porcentaje;
}
let porcentaje2 = +prompt("Ingrese el número del porcentaje a calcular: ");
let total2 = +prompt("Ingrese número total: ");
let porciento2 = GeneradorDePorcentaje(porcentaje2, total2);
console.log(`${porcentaje2} es el ${porciento2}% de ${total2}`);