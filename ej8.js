/*
Genera 3 números aleatorios entre 1 y 99 q no se repitan
*/

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getThree() {
    let i = 0;
    let arr = [];
    do {
        let num = randomNumber(1, 99);
        if (!arr.includes(num)) {
            arr.push(num)
            i++
        } else {
            i--
        }
    } while (i < 3);
    alert(arr);
}