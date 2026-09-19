const readline = require('readline-sync');

const temp = readline.question("Qual a temperatura em Celsius a ser convetida: ");
let tempF = 0;

tempF = (temp * 1.8 + 32);

console.log("A temperatura em Fahrenheit é: ", tempF);