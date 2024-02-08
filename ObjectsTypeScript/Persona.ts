class Persona {
    nombre: string
    edad: number
    telefono: string
    direccion: string
    ciudad: string

    constructor(nombre: string, edad: number, telefono: string, direccion: string, ciudad: string) {
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
    }
    // NOMBRE
    setNombre(nombre: string) {
        this.nombre = nombre
    }
    getNombre() { return this.nombre }
    // EDAD
    setEdad(edad: number) {
        this.edad = edad
    }
    getEdad() { return this.edad }
    // TELEFONO
    setTelefono(telefono: string) {
        this.telefono = telefono
    }
    getTelefono() { return this.telefono }
    // DIRECCION
    setDireccion(direccion: string) {
        this.direccion = direccion
    }
    getDireccion() { return this.direccion }
    // CIUDAD
    setCiudad(ciudad: string) {
        this.ciudad = ciudad
    }
    getCiudad() { return this.ciudad }
    
    // METODOS APARTE
    infoPersona() {
        return "nombre: " + this.nombre + "\n " + 
            "edad: " + this.edad + "\n "+
            "telefono: " + this.telefono + "\n"+
            "direccion: " + this.direccion + "\n "+
            "ciudad: " + this.ciudad 
    }
    esMayor(edad: number) {
        if (edad > 18) {
            console.log("es mayor de edad")
        } else {
            console.log("es menor de edad")
        }
    }
}

// PERSONAS
let persona1 = new Persona("Steven", 17, "3134838350", "direccion1", "Popayán")
let persona2 = new Persona("Pilar", 22, "313214444", "direccion2", "Popayan")
let persona3 = new Persona("Daniel", 9, "313213456", "direccion3", "Tambo")
let persona4 = new Persona("Allen", 26, "313245645", "direccion4", "Chernobil")
let persona5 = new Persona("Antonio", 18, "313245656", "direccion5", "Alabama")
// INFORMACION
let info = "\n --info persona1--- \n"
    + persona1.infoPersona()
    + "\n --info persona2--- \n" +
    + "\n " + persona2.infoPersona()
    + "\n --info persona3--- \n" +
    + "\n" + persona3.infoPersona()
    + "\n --info persona4--- \n" +
    + "\n" + persona4.infoPersona()
    + "\n --info persona5--- \n" +
    + "\n" + persona5.infoPersona()
console.log(info)
console.log("---------------EDADES-----------------")
// ES MAYOR
let edads = persona1.esMayor(persona1.edad) 
console.log(edads)
