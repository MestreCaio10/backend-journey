const readline = require('readline-sync');

const Num = readline.questionInt("Escolha um número: ");

if (Num === 0) {
    console.log("Este número é igual a zero.");
} else if (Num > 0) {
    console.log("Este número é maior que zero.");
} else {
    console.log("Este número é menor que zero.");
}