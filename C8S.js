let peliculas = ["star wars", "totoro", "pulp fiction", "la vida es bella"];

const convertirAMayusculas = array => {
    for (let i= 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }

    return array;
}

let peliculasMayusculas = convertirAMayusculas(peliculas);

console.log(peliculasMayusculas);

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// Paso 3
// const juntarArrays = (arrayUno, arrayDos) => {
//     let arrayDosMayusculas = convertirAMayusculas(arrayDos);
//     for (let i = 0; i < arrayDosMayusculas.length; i++){
//         arrayUno.push(arrayDosMayusculas[i]);
//     }

//     return arrayUno;
// }

const juntarArrays = (arrayUno, arrayDos) => {
    let arrayDosMayusculas = convertirAMayusculas(arrayDos);
    let videojuego = arrayDosMayusculas.pop();
    for (let i = 0; i < arrayDosMayusculas.length; i++){
        arrayUno.push(arrayDosMayusculas[i]);
    }

    return arrayUno;
}

let listaCompleta = juntarArrays(peliculasMayusculas, peliculasAnimadas);

console.log(listaCompleta);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const comparaCalificaciones = (calificacionAsia, calificacionEuro) => {
    for (let i = 0; i < calificacionAsia.length; i++) {
        if (listaCompleta[i] === undefined) {
            return;
        }
        calificacionAsia[i] === calificacionEuro[i] ? console.log(`La calificación de ${listaCompleta[i]} es ${calificacionAsia[i]} en ambas listas.`) : console.log(`La calificación de ${listaCompleta[i]} es distinta.`);
    }
}

comparaCalificaciones(asiaScores, euroScores);

// ARRAY INVERSO
console.log("");
const imprimirInverso = array => {
    for (let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

imprimirInverso(listaCompleta);

const inversor = array => {
    let nuevoArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        nuevoArray.push(array[i]);
    }

    return nuevoArray;
}

let arrayInvertido = inversor(listaCompleta);
console.log(arrayInvertido);

// SUMAR ARAY
const sumaArray = array => {
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }

    return suma;
}

let resultadoSuma = sumaArray([1,2, 3]); // 6
let resultadoSuma2 = sumaArray([10, 3, 10]); // 23
let resultadoSuma3 = sumaArray([-5,100, 19]); // 114
console.log(resultadoSuma);
console.log(resultadoSuma2);
console.log(resultadoSuma3);

// SIMULACION JOIN
const join = array => {
    let string = "";
    for (let i = 0; i < array.length; i++){
        string += array[i];
    }

    return string;
}

let joinUno = join(["h","o","l","a"]); // "hola".
let joinDos = join(["c","h","a","u"]); // "chau".
console.log(joinUno);
console.log(joinDos);