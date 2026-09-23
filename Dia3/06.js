const products = [
  { id: 1, name: "Notebook", price: 3500, quantity: 8 },
  { id: 2, name: "Mouse", price: 90, quantity: 25 },
  { id: 3, name: "Teclado", price: 330, quantity: 4 },
  { id: 4, name: "Monitor", price: 900, quantity: 7 },
  { id: 5, name: "Headset", price: 250, quantity: 0 }
];

function filterLowStock(products, limit) {
    return products.filter(product => product.quantity <= limit && product.quantity > 0);
}

console.log(filterLowStock(products, 10))