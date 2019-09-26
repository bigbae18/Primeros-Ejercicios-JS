/*

4. Realiza un script que imprima 14 resultados aleatorios de una quiniela 1 X 2. Ejemplo de resultado:
Resultado 1: 1
Resultado 2: X
Resultado 3: 2
…..
Resultado 14: 2

*/

randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

quinielita = () => {
    let i = 1;
    let quiniela = "";
    for (i; i < 15; i++) {
        let result = randomNumber(1, 3);
        if (result == 3) {
            result = 'X';
        }
        quiniela += `<p>Resultado ${i}: ${result}</p>`;
    }
    console.log('Resultados generados');
    document.getElementsByClassName("quiniela")[0].innerHTML = (quiniela)
}