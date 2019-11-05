var john = {
    nombre: "john",
    apellido: "tremont",
    edad: 32,
    peso: 75,
}




console.log(`al incio del año ${john.nombre} pesa ${john.peso}kg `)

const DIAS_DEL_AÑO = 365
const INCREMENTO_PESO = 0.3

// function subirDePeso (persona) {      // esto es lo mismo que la de abajo
//   return persona.peso +=200
// }
const subirDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

const META = john.peso - 3
var dias = 0

while (john.peso > META) { //mientras que el  peso de john sea mayor a la meta se ejecutara la condicion
    if (comeMucho()) {
        subirDePeso(john) //va a aumentar de peso
    }
    if (haceDeporte()) {
        adelgazar(john) //adelgazar
    }
    dias += 1
}

console.log(`pasaron ${dias} dias ahsta que ${john.nombre} adelgazo 3kg`)