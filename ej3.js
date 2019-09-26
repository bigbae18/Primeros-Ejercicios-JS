/*
3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

function concatenarTxt() {
    let txtFinal = '';
    let concat = '';
    do {
        concat = prompt('Introduce tu texto a concatenar porfavor.', '');
        if (concat != 'cancelar') {
            if (txtFinal == '') {
                txtFinal += concat;
            } else {
                txtFinal += ' - ' + concat;
            }
        }
    } while (concat != 'cancelar');
    alert(txtFinal);
}