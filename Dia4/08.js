const products = [
    {name: "Notebook", category: "computadores"},
    {name: "Mouse", category: ""},
    {name: "Teclado"},
]

const category = products[0].category ?? "Sem categoria";
const category2 = products[1].category ?? "Sem categoria";
const category3 = products[2].category ?? "Sem categoria";

console.log(category);
console.log(category2);
console.log(category3);