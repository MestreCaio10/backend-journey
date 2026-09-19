const readline = require('readline-sync');
const Num1 = readline.questionFloat("Digite o primeiro número: ");
const Num2 = readline.questionFloat("Digite o segundo número: ");
const Operacao = readline.question("Digite a operação (+, -, *, /): ");
let valorFinal

switch (Operacao) {
    case "+" :
        valorFinal = Num1 + Num2;
        console.log("O resultado da soma dos dois números é: ", valorFinal)
        break;
    case "-" :
        valorFinal = Num1 - Num2;
        console.log("O resultado da subtração dos dois números é: ", valorFinal)
        break;
    case "*" :
        valorFinal = Num1 * Num2;
        console.log("O resultado da multiplicação dos dois números é: ", valorFinal)
        break;
    case "/" :
        valorFinal = Num1 / Num2;
        console.log("O resultado da divisão dos dois números é: ", valorFinal)
        break;
}