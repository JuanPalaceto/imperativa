// Función 1
function convertirPulgadasACm (pulgada) {
    return Number(pulgada) * 2.54;
}

// Función 2
function toUrl(nombre) {
    return `http>//${nombre}.com`;
}

// Función 2 con flecha
const toUrl2 = (nombre) => {
    return `http>//${nombre}.com`;
};

//Función 3
function agregarSignoExclamacion(frase) {
    return `${frase}!`;
}

// Función 4
function anhosPerro(x) {
    return x * 7;
}

// Función 5
// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.
const prompt = require("prompt-sync")({ sigint: true });

function sueldoHora(sueldoMensual) {
    return sueldoMensual / 40;
}

let sueldo = prompt("Ingrese su sueldo mensual: ");
let sueldoxHora = sueldoHora(sueldo);

console.log(`Tu sueldo por hora es de $${sueldoxHora}`);

const sueldoHora2 = sueldoMensual => sueldoMensual / 40;

let sueldo2 = prompt("Ingrese su sueldo mensual: ");
sueldoPorHora = sueldoHora2(sueldo2);
console.log(`Tu sueldo por hora es de $${sueldoPorHora}`);

// Función 6
function calculadorIMC(peso, altura) {
    return peso/(altura*altura);
}

// Función 7
function minuMayu(palabra) {
    return palabra.toUpperCase();
}

// Función 8
function typ(n1) {
    return typeof n1;
}