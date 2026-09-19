const readline = require('readline-sync');

const Num1 = readline.questionInt("Escolha o primeiro número: ");
const Num2 = readline.questionInt("Escolha o segundo número: ");

if (Num1 > Num2) {
    console.log("O primeiro número: ", Num1, "é maior que o segundo número: ", Num2)
}else if (Num1 < Num2) {
    console.log("O segundo número: ", Num2, "é maior que o primeiro número: ", Num1)
}else {
    console.log("Os dois números são iguais.")
}