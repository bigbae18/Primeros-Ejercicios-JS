/*
2. Pide una nota (número). Muestra la calificación según la nota:

    0-3: Muy deficiente
    3-5: Insuficiente
    5-6: Suficiente
    6-7: Bien
    7-9: Notable
    9-10: Sobresaliente

*/

function Nota() {
    let nota = prompt('¿Cuánto has sacado en el último examen', '');
    if (nota === null || nota === '') {
        alert('Yo diría que eso no es una nota...');
        Nota();
    } else if (nota >= 0 && nota < 3) {
        alert('Muy deficiente...');
    } else if (nota >= 3 && nota < 5) {
        alert('Insuficiente, hijo..');
    } else if (nota >= 5 && nota < 6) {
        alert('Aprobado por los pelos, ¿eh? ¡Suficiente!');
    } else if (nota >= 6 && nota < 7) {
        alert('Bien!');
    } else if (nota >= 7 && nota < 9) {
        alert('Has estudiado eh, ¡Notable!');
    } else if (nota >= 9 && nota < 10) {
        alert('¡No podrías haberlo hecho mejor! ¡Sobresaliente!')
    } else if (nota == 10) {
        alert('Matrícula de honor, ché');
    } else {
        alert('Porfavor, inserta tu nota del 1 al 10');
        Nota();
    }
}