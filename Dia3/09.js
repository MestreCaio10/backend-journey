const products = [
  { id: 1, name: "Notebook", price: 3500, quantity: 8 },
  { id: 2, name: "Mouse", price: 90, quantity: 25 },
  { id: 3, name: "Teclado", price: 330, quantity: 4 },
  { id: 4, name: "Monitor", price: 900, quantity: 7 },
  { id: 5, name: "Headset", price: 250, quantity: 0 }
];

function updateProduct(products, id, newData) {
    const prd = products.find(product => product.id === id);
    if (prd){
        Object.assign(prd, newData);
    }
}

updateProduct(products, 3, {price: 350, quantity: 9});

console.log(products)