/*
    1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
*/

function permisoConducir() {
    let edad = prompt('Introduzca su edad para confirmar si es apto', '');
    if (edad == 'cancelar') {
        return
    }
    if ( edad === '') {
        alert('Te has equivocado. Porfavor, introduzca su edad.');
        permisoConducir();
    } else if (edad >= 18) {
        alert('Usted es apto para sacarse la licencia');
    } else if (edad < 18 && edad >= 0) {
        alert('Lo sentimos, pero usted es menor de edad');
    } else {
        return;
    }
}