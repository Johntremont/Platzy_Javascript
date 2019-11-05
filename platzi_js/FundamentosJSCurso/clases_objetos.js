function heredaDe(prototypeHijo, prototypePadre) {
    var fn = function() {}
    fn.prototype = prototypePadre.prototype
    prototypeHijo.prototype = new fn
    prototypeHijo.prototype.constructor = prototypeHijo
}


function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

Persona.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function() {
    return this.altura > 1.67
}



// var john = new Persona("john", "tremont", 1.68)

// var angie = new Persona("angie", "alvarado", 1.57)

// var myrna = new Persona("myrna", "alvarado", 1.58)