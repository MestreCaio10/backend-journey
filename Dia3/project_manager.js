const products = [
  { id: 1, name: "Smartphone", price: 2199.90, quantity: 12 },
  { id: 2, name: "Carregador USB-C", price: 89.90, quantity: 3 },
  { id: 3, name: "Fone Bluetooth", price: 299.90, quantity: 0 },
  { id: 4, name: "Smartwatch", price: 749.90, quantity: 7 },
  { id: 5, name: "Caixa de Som", price: 459.90, quantity: 2 },
  { id: 6, name: "Power Bank", price: 189.90, quantity: 15 },
  { id: 7, name: "Cabo USB-C", price: 39.90, quantity: 30 },
  { id: 8, name: "Tablet", price: 1599.90, quantity: 5 },
  { id: 9, name: "Controle Bluetooth", price: 249.90, quantity: 0 },
  { id: 10, name: "Hub USB", price: 129.90, quantity: 9 }
];

function addProduct(products, product) {
    return products.push(product);
}

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

function updateProduct(products, id, newData) {
    const prd = products.find(product => product.id === id);

    if (prd) {
        Object.assign(prd, newData);
    }
}

function removeProduct(products, id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

function filterLowStock(products, limit) {
    return products.filter(product => product.quantity <= limit && product.quantity > 0);
}

function calculateTotalStockValue(products) {
    return products.reduce((n, product) => n + (product.quantity * product.price), 0);
}

function calculateStockValue(products, id) {
    const prd = products.find(product => product.id === id);
    const stockValue = prd.quantity * prd.price;
    return stockValue;
}

console.log(products);

addProduct(products, {id: 11, name: "Switch", price: 250.90, quantity: 6});

console.log(findProductById(products, 8));

updateProduct(products, 2, {price: 99.90, quantity: 15});
removeProduct(products, 10);

console.log(filterLowStock(products, 5));

console.log(calculateStockValue(products, 6));

console.log(calculateTotalStockValue(products));

console.log(products);
