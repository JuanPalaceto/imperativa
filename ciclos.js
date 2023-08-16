// --> Estructuras de repetición

// for
// inicializacion ; condicion ; modificador

// mostrar por conbsola la palabra casas 10 veces

// mostrar los desde i del 1 hasta x inclusive donde x se recibe por parametros
const mostratCasa = (y, x) => {
    for (i = y; i<=x; i++) {
        // bloque de código
        console.log(i);
    }
}

mostratCasa(10, 12);
// while
const constarHastaVeinte =() => {
    let i = 1;
    while(i<=20) {
        console.log(i);

        i++;
    }
}


// do while
console.log("-------------------------");
const saludarDiez = () => {
    let i = 1;
    do {
        console.log("hola cómo estás");
        i++;
    }
    while (i < 1)

    console.log("terminé");
}

saludarDiez();


// Tabla de multiplicar
const tabla = numero => {
    for (let i = 1; i <= 10; i++) {
        // console.log(`${numero} x ${i} = ${ numero * i}`);
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

tabla(7);

const sumatoria = () => {
    let acumulador = 0;

    for (let i=1; i<=15; i++) {
        if ( i % 2 !== 0){
            acumulador++;
        }
    }

    return acumulador;
}

let x = sumatoria();

console.log(x);