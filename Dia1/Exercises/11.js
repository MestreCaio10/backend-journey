const readline = require('readline-sync');
const price = readline.questionFloat("Qual preço do produto: ");
const desc = readline.questionInt("Qual o percentual de desconto: ");
let finalPrice;

finalPrice = (price - (price * (desc / 100)));

console.log("O valor final do produto é: ", finalPrice);