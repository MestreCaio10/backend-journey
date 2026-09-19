const readline = require('readline-sync');

const Num = readline.questionInt("Escolha um número: ");

if (Num % 2 === 0) {
    console.log("Este número é par")
} else {
    console.log("Este número é ímpar")
}