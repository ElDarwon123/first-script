class Ventilador {
    marca: string
    color: string
    seMueve: boolean
    numeroAspas: number
    precio: number


    constructor(marca: string, color: string, seMueve: boolean, numeroAspas: number, precio: number) {
        this.marca = marca
        this.color = color
        this.seMueve = seMueve
        this.numeroAspas = numeroAspas
        this.precio = precio
    }

    getMarca() {
        return this.marca
    }

    setMarca(_marca: string) {
        this.marca = _marca
    }

    encenderVentilador() {
        return "se preindió el venti: " + this.marca
    }
    infoVentilador() {
        return "usted compró un ventilador: " + this.marca +
            ", de color: " + this.color +
            ", de " + this.numeroAspas + " aspas" +
            ", con un costo de: $"+ this.precio
    }

    setSeMueve(_seMueve: boolean) {
        this.seMueve = _seMueve
    }
}

let ventiladociito = new Ventilador("samurai", "negro", true, 4, 150000)
let on = ventiladociito.encenderVentilador()

ventiladociito.setMarca("often")
let on1 = ventiladociito.encenderVentilador()
/*
console.log(ventiladociito.encenderVentilador())
console.log(ventiladociito.getMarca())
*/

console.log(ventiladociito.infoVentilador())