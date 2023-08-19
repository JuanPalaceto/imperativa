// --> Array - Arreglo - Colección

let numeroDeLaSuerteUno = 15;
let numeroDeLaSuerteDos = 27;
let numeroDeLaSuerteTres = 153;
let numeroDeLaSuerteCuatro = 151;

let numeroDeLaSuerte = [15, 27, 153, 151];

let palabras = ["casa", "avion", "perro", "gato"];

console.log(numeroDeLaSuerte[1]);

let nombre = "juan";

console.log(nombre);

nombre = nombre.toUpperCase();

console.log(nombre);

let x = nombre.includes("A");
console.log(x);
console.log(nombre.length);
console.log(numeroDeLaSuerte.length);
console.log(numeroDeLaSuerte.includes(43));

let numeros = [1, 4, 5, 7, 12, 44, 13, 47];

// numeros.push(15);
console.log(numeros);

numeros.pop();

console.log(numeros);

let numeritos = [43, 105, 87, 12];
let arrayInvertido = []; // [12, 87, 105, 43]

arrayInvertido.push(numeritos.pop());
arrayInvertido.push(numeritos.pop());
arrayInvertido.push(numeritos.pop());
arrayInvertido.push(numeritos.pop());
console.log(arrayInvertido);

let palabras2 = ["casa", "avion", "perro", "gato", "luna", "sol"];

const mostrarElementos = () => {
    for(let i = 0; i < palabras2.length; i++) {
        console.log(palabras2[i]);
    }
}

mostrarElementos();

let notasPepito = [8, 9, 10];

const promediar = (arreglo) => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma / arreglo.length;
}

let promedioPepito = promediar(notasPepito);
console.log(promedioPepito);

let notasMaria = [10, 9, 10, 9];
let promedioMaria = promediar(notasMaria);
console.log(promedioMaria);