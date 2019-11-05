var x = 4,
    y = "4"

var john = {
        nombre: "John",
    }
    // var otraPersona = {     // con esta variable nos da false por que son distintos objetos
    //     nombre: "john",
    // }

// var otraPersona = john // con esta si nos da true por que tienen el mismo origen

var otraPersona = { // con esta tambien nos da false por que son objetos distintos
    ...john,
}