class Operaciones {
    numero1: number
    numero2: number
    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    setNumero1(numero1: number) {
        this.numero1 = numero1
    }
    getNumero1() { return this.numero1 }

    setNumero2(numero2: number) {
        this.numero2 = numero2
    }
    getNumero2() { return this.numero2 }

    suma(numero1: number, numero2: number) {
        return numero1 + numero2
    }
    resta(numero1: number, numero2: number) {
        return numero1 - numero2
    }
    multiplicar(numero1: number, numero2: number) {
        return numero1 * numero2
    }
    dividir(numero1: number, numero2: number) {
        if (numero2 > numero1) {
            return console.log("no se puede realizar la división, con un dividendo de 0")
        } else {
            return numero1/numero2
        }
    }
}

let operacion1 = new Operaciones(23, 20)
let operacion2 = new Operaciones(45, 32)
let operacion3 = new Operaciones(56, 0)
let operacion4 = new Operaciones(45, 44)
let operacion5 = new Operaciones(65, 46)

let todo1 = [operacion1.getNumero1(), operacion1.getNumero2(),
    ["suma", operacion1.suma(operacion1.getNumero1(), operacion1.getNumero2())],
    ["resta", operacion1.resta(operacion1.getNumero1(), operacion1.getNumero2())],
    ["multip", operacion1.multiplicar(operacion1.getNumero1(), operacion1.getNumero2())],
    ["divide", operacion1.dividir(operacion1.getNumero1(), operacion1.getNumero2())]

]
console.log(todo1) 