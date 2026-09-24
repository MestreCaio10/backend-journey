function somarNumeros(...numbers) {
    return numbers.reduce((total, atual) => total + atual, 0);
}

console.log(somarNumeros(10, 5, 25, 60));