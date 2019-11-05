class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }


    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.67
    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`hola, buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log("Oye, no sabia que eras desarrollador/a")
    }
}





var john = new Desarrollador("john", "tremont", 1.68)

var angie = new Persona("angie", "alvarado", 1.57)

var myrna = new Persona("myrna", "alvarado", 1.58)

john.saludar(responderSaludo)
angie.saludar(responderSaludo)
myrna.saludar(responderSaludo)