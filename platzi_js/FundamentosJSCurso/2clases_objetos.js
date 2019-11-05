class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }


    saludar() {
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.67
    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)

    }
}





// var john = new Persona("john", "tremont", 1.68)

// var angie = new Persona("angie", "alvarado", 1.57)

// var myrna = new Persona("myrna", "alvarado", 1.58)