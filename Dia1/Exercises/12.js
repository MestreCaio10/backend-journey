const readline = require('readline-sync');

const Num = readline.questionInt("Digite um número de 1 a 7: ");

switch(Num){
    case 1:
        console.log("Esse número corresponde a Segunda-feira.");
        break;
    case 2:
        console.log("Esse número corresponde a Terça-feira.");
        break;
    case 3:
        console.log("Esse número corresponde a Quarta-feira.");
        break;
    case 4:
        console.log("Esse número corresponde a Quinta-feira.");
        break;
    case 5:
        console.log("Esse número corresponde a Sexta-feira.");
        break;
    case 6:
        console.log("Esse número corresponde a Sábado.");
        break;
    case 7:
        console.log("Esse número corresponde a Domingo.");
        break;
}