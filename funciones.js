function f1() {
    console.log("hola");
};

function f2() {

};

function saludar (nombre, apellido="Rodríguez") {
    // BLOQUE DE CODIGO
    let saludoFinal = `hola ${nombre} ${apellido} cómo estás?`;

    return saludoFinal; // corta la ejecución y devuelve lo que tenga que devolver
}

f1();
f1();

let saludoListo = saludar("Carmen", "Pérez");
console.log(saludoListo);

let saludoListo2 = saludar("Juancito", "Gonzalez");
console.log(saludoListo2);

function sumar(numeroUno, numero2) {
    return numeroUno + numero2;
}

let res = sumar(12, 15);
console.log(res);

let res2 = sumar(3, 1);
console.log(res2);


// FUNCIONES EXPRESADAS -> ANONIMAS

// FUNCIONES EXREPSADAS TRADICIONAL

console.log("-------------------------");
const restar = function (n1, n2) {
    return n1 - n2;
}

let resultado = restar(12, 22);
console.log(resultado);

// FUNCIONES EXPRESADAS FLECHA --> ARROW FUNCTION

const multiplicar = (n1, n2) => n1 * n2;

const saludarr = nombre => `Hola ${nombre} cómo estás?`;

// SCOPE --> local

let palabra = "casa";
const pruebaScope = () => {
    let palabra = "avion";
    return palabra;
}

let resultadoPrueba = pruebaScope();

console.log(resultadoPrueba);

console.log("------------------------------");

// CREAR UNA FUNCION QUE CONVIERTA PESOS A DOLARES
// DANDO LA POSIBILIDAD DE QUE SEA DINAMICO LA CANTIDAD DE PESOS Y
// TAMBIEN EL VALOR DEL DOLAR ACTUAL

const convertirPesosADolares = (pesos, valorDolar) => pesos / valorDolar;

let resultadoConversion = convertirPesosADolares(6300, 17.15);

console.log(`$${resultadoConversion} dólares`);

// un profesor quiere un sistema donde pueda ingresar 3 notas
// y le devuelva el promedio del alumno
// que devuelva un string que diga, el promedio es--> el resultado

console.log("--------------------------------");

const promediar = (nombre, notaUno, notaDos, notaTres) => {
    let suma = notaUno + notaDos + notaTres;
    let promedio =Math.round(suma / 3);

    return `El promedio de ${nombre} es ${promedio}`;
}

let resultadoPepito = promediar("pepito", 8, 9, 10);
let resultadoJuancito = promediar("juancito", 5, 7, 10);

console.log(resultadoPepito);
console.log(resultadoJuancito);