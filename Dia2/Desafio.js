const products = [
  { id: 1, name: "Notebook", price: 3499.90, quantity: 8 },
  { id: 2, name: "Mouse", price: 89.90, quantity: 25 },
  { id: 3, name: "Teclado Mecânico", price: 329.90, quantity: 4 },
  { id: 4, name: "Monitor 24", price: 899.90, quantity: 7 },
  { id: 5, name: "Headset", price: 249.90, quantity: 0 },
  { id: 6, name: "Webcam", price: 199.90, quantity: 3 },
  { id: 7, name: "SSD 1TB", price: 459.90, quantity: 12 },
  { id: 8, name: "Memória RAM 16GB", price: 289.90, quantity: 18 },
  { id: 9, name: "Cadeira Gamer", price: 1299.90, quantity: 2 },
  { id: 10, name: "Mousepad", price: 49.90, quantity: 0 },
  { id: 11, name: "Microfone USB", price: 399.90, quantity: 5 },
  { id: 12, name: "Suporte para Notebook", price: 119.90, quantity: 15 }
];

const totalStock = products.reduce((total, product) => total + product.quantity, 0);
const priceStock = products.reduce((total, product) => total + product.price * product.quantity, 0);

const shorted = [...products].sort((a, b) => a.price - b.price);
const cheapest = shorted[0]
const mostExpensive = shorted[shorted.length - 1];
const noStock = products.filter(product => product.quantity === 0);
const stockBelowMinimum = products.filter(product => product.quantity > 0 && product.quantity <= 5);

console.log("===== RELÁTORIO DE ESTOQUE =====");
console.log("Total de unidades:", totalStock);
console.log("Valor do estoque:", priceStock);
console.log("Produto mais caro:", mostExpensive);
console.log("Produto mais barato:", cheapest);
console.log("Sem Estoque:");
for (const p of noStock) {
    console.log(p);
}
console.log("Estoque Baixo:");
for (const p of stockBelowMinimum) {
    console.log(p);
}