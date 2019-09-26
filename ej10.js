/*

Anterior pero 1 = 60% ; X = 30% ; 2 = 10%

*/

randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

quinielitaAmañada = () => {
    let i = 1;
    let quiniela = "";
    for (i; i < 15; i++) {
        let result = randomNumber(1, 10);
        switch (result) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                result = 1;
                break;
            case 7:
            case 8:
            case 9:
                result = 'X';
                break;
            case 10:
                result = 2;
                break;
        }
        quiniela += `<p> Resultado ${i}: ${result} </p>`;
    }
    console.log('Resultados generados');
    document.getElementsByClassName("quiniela")[0].innerHTML = (quiniela)
}