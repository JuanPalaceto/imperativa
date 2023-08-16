
// Variables
// let - const

let nombre = "Pepe";
const apellido = "Perez";

console.log(nombre);
console.log(apellido);

// let nombre_usuario = "dasdas"
// let nombreDelUsuario = "dasdas"

nombre = "Carmen";
console.log(nombre);

// apellido = "gonzalez";
// console.log(apellido);

// Tipo de datos
// STRINGS -> cadena de texto

let frase = "hola cóomo estás?";

// NUMBER -> numeros

let edad = 12;

// BOOLEAN -> true o false

let esMayorDeEdad = false;
let isLogged = true;

// UNDEFINED

let email = undefined;
let stock = null;

let y = 1;
let z = "pepe";
let x = y * z;

console.log("email: ", email);
console.log("x: ", x);

console.log("---------------------");

// OPERADORES

// Matemáticos
let n1 = 9;
let n2 = 2;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
// MODULO
console.log(n1 % n2);

//CONCATENAR -< Juntar

let palabraUno = "hola";
let palabraDos = "bye";

let fraseCompleta = palabraUno + " " + palabraDos;
console.log(fraseCompleta);

//TEMPLATE LITERALS -> BACKSTICKS
let fraseCompleta2 =  `${palabraUno} pepe ${palabraDos}, yo muy bien!`;
console.log(fraseCompleta2);

// Comparación
let num1 = 6;
let num2 = "6";

//console.log( num1 == num2 ); // SIMPLE
//console.log( num1 != num2 ); // SIMPLE
console.log( num1 === num2 ); // ESTRICTA
console.log( num1 !== num2 ); // ESTRICTA
// console.log( num1 > num2 );
// console.log( num1 < num2 );
// console.log( num1 >= num2 );
// console.log( num1 <= num2 );

// Lógicos

console.log("---------------");
// AND --> &&

let estaLogueado = true;
let esAdmin = true;

// ULTIMO TRUE O PRIMER FALSE
// FALSY --> 0 - undefined - null - ""
// TRUTHY --> 1 - [] - {} - "mama"
let tienePermiso = estaLogueado === true && 0 && esAdmin === true && 20 > 2 && 12 < 15;
console.log(tienePermiso);

// OR --> ||
// CON EL Primer Truthy, O CON EL Ultimo FALSY
let tienePermiso2 = estaLogueado === true || esAdmin == true || 0 || undefined;
console.log(tienePermiso2);

// NOT --> !
let r = true;
console.log(!r);