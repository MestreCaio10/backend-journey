const products = [
  { id: 1, name: "Café", price: 35.90, quantity: 12 },
  { id: 2, name: "Arroz", price: 24.50, quantity: 5 },
  { id: 3, name: "Feijão", price: 8.90, quantity: 0 },
  { id: 4, name: "Leite", price: 5.50, quantity: 20 },
  { id: 5, name: "Açúcar", price: 4.80, quantity: 3 },
  { id: 6, name: "Macarrão", price: 7.90, quantity: 15 },
  { id: 7, name: "Óleo", price: 9.50, quantity: 8 },
  { id: 8, name: "Farinha", price: 6.20, quantity: 0 },
  { id: 9, name: "Sal", price: 3.50, quantity: 25 },
  { id: 10, name: "Manteiga", price: 12.90, quantity: 4 }
];

const existeSemEstoque = products.some(product => product.quantity === 0);
console.log(existeSemEstoque)