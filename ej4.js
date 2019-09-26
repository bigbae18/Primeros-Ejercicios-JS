/*
4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

// function sumaNums() {
//     let sumaTotal = 0;
//     let sumaConcat = 0;
//     do {
//         sumaConcat = prompt('Pon un número', '');
//         if (sumaConcat == 'cancelar') {
//             return;
//         } else if (!isNaN(sumaConcat)) {
//             sumaTotal = parseInt(sumaTotal) + parseInt(sumaConcat);
//         } else {
//             alert('Eso no es un número brostone');
//         }
//     } while (sumaConcat != 'cancelar');
//     alert(sumaTotal);
// }

function sumaCadena() {
    let cadenaNums = 0;
    let sumaCadena = 0;
    do {
        cadenaNums = prompt('Añade números y los sumaré por ti', '');
        if (cadenaNums != 'cancelar') {
            if (parseInt(cadenaNums)) {
                sumaCadena += parseInt(cadenaNums);
            } else {
                alert('Porfavor, añade sólo números');
            }
        }
    } while (cadenaNums != 'cancelar');
    alert(sumaCadena);
}