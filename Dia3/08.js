const products = [
  { id: 1, name: "Notebook", price: 3500, quantity: 8 },
  { id: 2, name: "Mouse", price: 90, quantity: 25 },
  { id: 3, name: "Teclado", price: 330, quantity: 4 },
  { id: 4, name: "Monitor", price: 900, quantity: 7 },
  { id: 5, name: "Headset", price: 250, quantity: 0 }
];

function removeProduct(products, id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1){
        products.splice(index, 1);
    }
}

removeProduct(products, 4);

console.log(products);