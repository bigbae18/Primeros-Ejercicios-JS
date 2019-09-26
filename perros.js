class Perro {
    constructor(raza, colorPelo, tamaño, peso) {
        this.raza = raza;
        this.colorPelo = colorPelo;
        this.tamaño = tamaño;
        this.peso = peso;
    }
    ladrar = () => {
        console.log(`Guau Guau!`);
    }
    morder = (fuerza = 50) => {
        console.log(`Daño del mordisco: ${fuerza}`);
    }

    digievoluciona = (raza) => {
        this.raza = raza;
        console.log(`He cambiado de raza a: ${raza} con ${this.peso}kg`);
    }
}