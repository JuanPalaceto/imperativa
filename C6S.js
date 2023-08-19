const prompt = require("prompt-sync")({ sigint: true });

// Edades
let edad = prompt("Ingresa tu edad: ");

if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
    console.log("No puede pasar al bar.");
} else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
    console.log("Puede pasar al bar y tomar alcohol");
    if (edad === 21) {
        console.log("Felicidades por la mayoría de edad!");
    }

}

if (edad % 2 !== 0) {
    console.log("Sabías que tu edad es impar?");
};

// Total a Pagar
const totalAPagar = (vehiculo, litrosConsumidos) => {
    let precioTotal = 0;
    switch(vechiculo) {
        case "coche":
            precioTotal *= 86;
            break;
        case "moto":
            precioTotal *= 70;
            break;
        case "autobus":
            precioTotal *= 55;
            break;
        default:
            return "No existe ese vehículo amigo";
    }

    if (litrosConsumidos >= 0 && precioTotal <= 25) {
        precioTotal += 50;
    } else if (litrosConsumidos > 25) {
        precioTotal += 25;
    } else {
        return "Imposible que hayas consumido litros negativos!";
    }

    return precioTotal;
}

let vehiculo = prompt("Ingresa el vehículo: ");
let litros = prompt("Ingresa los litros consumidos: ");
let resultado = totalAPagar(vehiculo, litros);

console.log(resultado);

// Local de sándwiches
const pedido = (sandwich, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let total = 0;

    switch (sandwich) {
        case "pollo":
            total = 150;
            break;
        case "carne":
            total = 200;
            break;
        case "veggie":
            total = 100;
            break;
        default:
            return "No existe ese sandwich";
    }

    switch (pan) {
        case "blanco":
            total += 50;
            break;
        case "negro":
            total += 60;
            break;
        case "s/gluten":
            total += 75;
            break;
        default:
            return "No existe ese pan";
    }

    queso ? total += 20 : "";
    tomate ? total += 15 : "";
    lechuga ? total += 10 : "";
    cebolla ? total += 15 : "";
    mayonesa ? total += 5 : "";
    mostaza ? total += 5 : "";

    return total;
}

console.log("********** LISTA DE SANDWICHES **********");
console.log("1. $150 Pollo => \"pollo\"");
console.log("2. $200 Carne => \"carne\"");
console.log("3. $100 Vegetariano => \"veggie\"");
console.log("");
let sandwich = prompt("Ingresa tu sándwich: ");
console.log("");
console.log("********** LISTA DE PANES **********");
console.log("1. $50 Blanco c/orégano y parmesano => \"blanco\"");
console.log("2. $60 Negro c/avena => \"negro\"");
console.log("3. $75 Sin gluten => \"s/gluten\"");
console.log("");
let pan = prompt("Escoge tu pan: ");
console.log("");
console.log("********** EXTRAS **********");
console.log("********** Se te presentará una selección de extras disponibles, escribe \"true\" si deseas agregarlo, o \"false\" si no lo deseas **********");
console.log("");
let queso = prompt("¿Deseas queso? $20: ");
let tomate = prompt("¿Deseas tomate? $15: ");
let lechuga = prompt("¿Deseas lechuga? $10: ");
let cebolla = prompt("¿Deseas cebolla? $15: ");
let mayonesa = prompt("¿Deseas mayonesa? $5: ");
let mostaza = prompt("¿Deseas mostaza? $5: ");
console.log("");

let precioAPagar = pedido(sandwich, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza);
console.log(precioAPagar);


// Número Secreto
const numeroSecreto = num => {
    let numSecreto = Math.floor(Math.random() * 10) + 1;
    num = parseInt(num);

    return num === numSecreto ? "Felicidades, acertaste el número" : `Lo siento, el número secreto era ${numSecreto} y tú ingresaste ${num}`;
}

let num = prompt("Ingresa un número entre el 1 y el 10: ");
console.log(numeroSecreto(num));

// Abrir Paracaídas
const abrirParacaidas = (velocidad, altura) => {
    return velocidad < 1000 && altura >= 2000 && altura < 3000 ? "El paracaídas debe abrirse." : "El paracaídas no debe abrirse.";
}

console.log(abrirParacaidas(999, 2000));

// ESTRUCTURA SWITCH

// Traductor condicional
const traudctorCondicional = palabra => {
    let traduccion;
    switch (palabra) {
        case "casa":
            traduccion = "house";
            break;
        case "perro":
            traduccion = "dog";
            break;
        case "pelota":
            traduccion = "ball";
            break;
        case "árbol":
            traduccion = "tree";
            break;
        case "genio":
            traduccion = "genius";
            break
        default:
            traduccion = "La palabra ingresa es incorrecta";
    }

    return traduccion;
}
console.log("********* LISTA DE PALABRAS *********");
console.log('1. "casa"');
console.log('2. "perro"');
console.log('3. "pelota"');
console.log('4. "árbol"');
console.log('5. "genio"');
console.log("");
let palabra = prompt("Ingrese una palabra del listado: ");
console.log(traudctorCondicional(palabra));

// Valoración de películas
const valoracionPeliculas = rate => {
    let mensaje;
    switch (rate) {
        case "Muy mala":
        case "Mala":
        case "Mediocre":
            mensaje = "Lo lamentamos mucho";
            break;
        case "Buena":
        case "Muy buena":
            mensaje = "Nos alegramos mucho";
            break
        default:
            return "Ingresaste un valor inválido";
    }

    return `Calificaste la película como ${rate}. ${mensaje}.`;
}

const despedida = res => !(res === 'Ingresaste un valor inválido') ? console.log("Muchas gracias por tu visita!!") : "";

console.log("********* VALORACIONES *********");
console.log('1. "Muy mala"');
console.log('2. "Mala"');
console.log('3. "Mediocre"');
console.log('4. "Buena"');
console.log('5. "Muy buena"');
console.log("");
let valoracion = prompt("Por favor valora la película con una de las valoraciones disponibles: ");
let res = valoracionPeliculas(valoracion);
console.log(res);
despedida(res);