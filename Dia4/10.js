const products = [
  { id: 1, name: "Notebook", price: 3500, quantity: 8 },
  { id: 2, name: "Mouse", price: 90, quantity: 25 },
  { id: 3, name: "Teclado", price: 330, quantity: 4 },
  { id: 4, name: "Monitor", price: 900, quantity: 7 },
  { id: 5, name: "Headset", price: 250, quantity: 0 }
];

function updateProduct(products, id, newData) {
  return products.map(product => {
    if (product.id === id) {
      return { ...product, ...newData };
    }
    return product;
  });
}



