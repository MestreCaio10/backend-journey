let soma = 0;
let quantidade = 0;
const readline = require('readline-sync');
let Num;

do {
    Num = readline.question("Digite um número (ou deixe em branco para calcular a média)")
    if (Num.trim() !== "") {
        let Numero = parseFloat(Num);
        if (!isNaN(Numero)) {
            soma += Numero;
            quantidade++;
        } else {
            console.log("Isso não é um número válido! Tente novamente.");
        }
    }
}while (Num.trim() !== "");

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log("Foram informados ", quantidade, " número e a média é: ", media)
}