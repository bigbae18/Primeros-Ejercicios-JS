
// 2. Realiza un script que genere un número aleatorio entre 1 y 99


function numeroRandom() {
    do {
        let numero = Math.floor(Math.random() * 99) + 1;
        alert(numero);
    } while (confirm('quieres otro número?'));
}