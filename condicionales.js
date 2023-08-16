// Estructuras de control

// IF

// CREAR UNA FUNCION QUE ME DEVUELVA LOS PERMISOS QUE TIENE EL USUARIO

// user --> tiene permiso a muy poco
// admin --> tiene permiso casi completo
// superAdmin --> tiene permiso a todo

const determinarPermiso = (rolUsuario) => {

    let condicionFinal = "";

    if (rolUsuario === "superAdmin") {
        // BLOQUE NUEVO
        // return "tiene permiso a todo";
        condicionFinal = "acceso a todo";
    } else if (rolUsuario === "admin") {
        // BLOQUE NUEVO
        // return "tiene permiso casi completo";
        condicionFinal = "acceso a casi todo";
    } else if (rolUsuario === "user") {
        // BLOQUE NUEVO
        // return "tiene permiso a muy poco";
        condicionFinal = "acceso a muy poco";
    } else {
        // BLOQUE NUEVO
        // return "El rol no existe, por ende, no te doy acceso";
        condicionFinal = "no tiene acceso";
    }

    return condicionFinal;
};

let permisos = determinarPermiso("cualquier cosa");
console.log(permisos);

// TERNARIO

// CREAR UNA FUNCIÓN QUE DEVUELVA UN STRING
// DICIENDO SI LLEVO PARAGUAS O NO
// SI EL CLIMA ESTÁ LLUVIOSO --> "si, llevalo"
// SI EL CLIMA NO ESTÁ LLUVIOSO --> "no, no hace falta"

const llevoParaguas = clima => clima === "lluvioso" ? "si, llevalo" : "no, no hace falta";

let resultado = llevoParaguas("lluvioso");
console.log(resultado);

// SWITCH

// SISTEMA QUE DETERMINE EL TOTAL DEL IMPUESTO A PAGAR DEPENDENDIENDO LA MARCA DEL AUTO
// COMO BASE SON 100 Y DESPUES HAY QUE SUMARLE DEPENDIENDO LO SIGUIENTE
// VW --> 10
// BMW --> 20
// AUDI --> 30
// VOLVO --> 40
// RENAULT --> 50
// CITROEN --> 60
// SI NO ES NINGUNA ESTÁ EXENTO

const determinarImpuesto = marcaAuto => {

    let impuesto = 100;

    switch (marcaAuto) {
        case "audi":
            impuesto += 10;
            break;
        case "citroen":
        case "vw":
            impuesto += 30;
            break;
        default:
            impuesto = 0;
    }

    return impuesto > 0 ? impuesto : "Su auto está exento de impuesto, no debe pagar nada";
};

let totalPagar = determinarImpuesto("citroen");
console.log( totalPagar)

// let x = 10

// x = x + 50
// x += 50

// CREAR UNA FUNCION QUE DE ACCESO A UN RECITAL
// UNICAMENTE A LAS PERSONAS QUE TENGAN MAS DE 18 AÑOS
// Y QUE TAMBIEN TENGAN TICKET

const determinarIngreso = (edad, siTieneTicket) => {
    // if(edad > 18 && siTieneTicket === true) {
    //     return "si puede pasar"
    // } else {
    //     return "no puede pasar"
    // }

    return edad > 18 && siTieneTicket === true ? "si puede pasar" : "no puede pasar";
}

let puedePasar = determinarIngreso(12, true);
console.log(puedePasar);