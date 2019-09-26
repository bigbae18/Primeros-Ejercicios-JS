/*

* 1. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor

*/

let nombres = [];
let edades = [];

function masMayor() {
    for (let i = 1; i < 4; i++) {
        let nombre = prompt(`Nombre de la primera n ${i}`);
        let edad = parseInt(prompt(`Edad de la persona n ${i}`));
        nombres.push(nombre);
        edades.push(edad);
        console.log(nombres, edades);
    }
    let index = edades.indexOf(Math.max.apply(null, edades));
    alert(`El hermano mayor es ${nombres[index]} con ${edades[index]} años.`);
}