var john = {
    nombre: "john",
    apellido: "tremont",
    altura: 1.67,
}
var myrna = {
    nombre: "myrna",
    apellido: "alvarado",
    altura: 1.59,
}

var angie = {
    nombre: "angie",
    apellido: "alvarado",
    altura: 1.61,
}

var manolo = {
    nombre: "manolo",
    apellido: "ramos",
    altura: 1.68,
}

var doris = {
    nombre: "doris",
    apellido: "lagambino",
    altura: 1.40,
}
const esBaja = (persona) => persona.altura <= 1.59
const esAlta = (persona) => persona.altura > 1.6

var personas = [john, angie, manolo, myrna, doris]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})


var personasACms = personas.map(pasarAlturaACms)


console.log(personasACms)
    // console.log(personasBajas)