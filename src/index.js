const readFile = require('./read-file');
const archive = readFile("\data-teste.xlsx");



let novoArray = [];
let contadorLinhas = 0;
let contadorColunas = 0;


for (i = 0; i < archive.length; i++) {

    for (f = 0; f < archive[i].length; f++) {
        if (f == 1) {
            let nota1 = archive[f]
            let nota2 = archive[f + 1]

            novoArray[3].push(nota1 + nota2)
        }
    }
    novoArray[i] = archive[i]
}
console.log(novoArray)