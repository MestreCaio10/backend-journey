const readline = require('readline-sync');

const Nota1 = readline.questionFloat("Digite a primeira nota: ");
const Nota2 = readline.questionFloat("Digite a segunda nota: ");
const Nota3 = readline.questionFloat("Digite a terceira nota: ");

const MedFinal = (((Nota1 + Nota2 + Nota3) / 3).toFixed(1)); 
console.log("A média das notas é: ", MedFinal);
if (MedFinal >= 6) {
    console.log("Aluno Aprovado.")
}else {
    console.log("Aluno Reprovado")
}