const readline = require('readline-sync');

const age = readline.question("Qual a sua idade: ");

if (age <= 11) {
    console.log("Você tem ", age, " e é uma criança (0-11)")
}else if (age > 11 && age <= 17) {
    console.log("Você tem ", age, " e é um adolescente (12-17)")
}else if (age > 17 && age <= 59) {
    console.log("Você tem ", age, " e é um adulto(18-59)")
}else {
    console.log("Você tem ", age, " e é um idoso(59 em diante)");
}
