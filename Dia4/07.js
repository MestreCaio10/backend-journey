const products = [
    {name: "Notebook", supplier:{name: "Asus"}},
    {name: "Mouse"},
]

console.log(products[0].supplier?.name);
console.log(products[1].supplier?.name);
