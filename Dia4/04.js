const products = [
  { id: 1, name: "Notebook", price: 3500, quantity: 8 },
  { id: 2, name: "Mouse", price: 90, quantity: 25 },
  { id: 3, name: "Teclado", price: 330, quantity: 4 },
  { id: 4, name: "Monitor", price: 900, quantity: 7 },
  { id: 5, name: "Headset", price: 250, quantity: 0 }
];

const newProducts = [...products, {id: 6, name: "Microphone", price: 75, quantity: 9}];

console.log(newProducts);