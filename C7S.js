const numerosSiguientes = x => {
    for (let i = x+1; i <= x+10; i++) {
        console.log(i);
    }
}

numerosSiguientes(3);

console.log("-----------------------------");

const numerosSaltandoTres = () => {
    for (let i = 5; i <= 20; i = i+3) {
        console.log(i);
    }
}

numerosSaltandoTres();

console.log("-----------------------------");

const sumatoria = () => {
    let suma = 0;
    for (let i = 1; i <= 100; i++){
        suma += i;
    }

    return suma;
}

let suma = sumatoria();
console.log(suma);

console.log("-----------------------------");

const factorial = x => {
    let res = 1;

    for(let i = 1; i <= x; i++) {
        res = res * i;
    }

    return res;
}

let fact = factorial(8);

console.log(fact);
