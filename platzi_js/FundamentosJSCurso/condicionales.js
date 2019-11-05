var john = {
    nombre: "john",
    apellido: "tremont",
    edad: 32,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false,
}
var angie = {
    nombre: "angie",
    apellido: "alvarado",
    edad: 17,

}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero === true) {
        console.log("ingeniero")
    }
    if (persona.cocinero) {
        console.log("cocinero")
    } else {
        console.log("no es cocinero")
    }
    if (persona.cantante) {
        console.log("cantante")
    } else {
        console.log("no es cantante")
    }
    if (persona.dj) {
        console.log("dj")
    } else {
        console.log("no es dj")
    }
    if (persona.drone) {
        console.log("vuela drone")
    } else {
        console.log("no es piloto de Drone")
    }

    if (persona.guitarrista) {
        console.log("guitarrista")
    } else {
        console.log("no es guitarrista")
    }

}

const MAYOR_DE_EDAD = 18

// const esMayorDeEdad = function(persona) {    // esto es lo mismo que el arrow function
//     return persona.edad >= MAYOR_DE_EDAD
// }

// const esMayorDeEdad = (persona) => {              // esto es lo mismo que la de abajo solo que retorna impli
//     return persona.edad >= MAYOR_DE_EDAD             citamente el valor, incluso sin tener parentesis
// }
// const esMayorDeEdad = persona => persona.edad >= MAYOR_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYOR_DE_EDAD //esta es la misma que la de arrriba perore ducuda
const esMenorDeEdad = ({ edad }) => edad < MAYOR_DE_EDAD

function imprimirEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
    if (persona.edad === 32) {
        console.log(`${persona.nombre} tiene 32 años para ser exactos`)
    }

}

function negarAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log("NO ES MAYOR DE EDAD")
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log("ACCESO DENEGADO")
    }
}

// imprimirProfesiones(john)
// imprimirEdad(john)