export function addProduct(products, product) {
    const newData = [...products, product]
    return newData
}

export function findProductById(products, id) {
    return products.find(product => product.id === id);
}

export function updateProduct(products, id, newData) {
  return products.map(product => {
    if (product.id === id) {
      return { ...product, ...newData };
    }
    return product;
  });
}

export function removeProduct(products, id) {
    const newProducts = products.filter(product => product.id !== id);
    return newProducts;
}

export function filterLowStock(products, limit) {
    return products.filter(product => product.quantity <= limit && product.quantity > 0);
}

export function calculateTotalStockValue(products) {
    return products.reduce((n, product) => n + (product.quantity * product.price), 0);
}

export function calculateStockValue(products, id) {
    const prd = products.find(product => product.id === id);
    const stockValue = prd.quantity * prd.price;
    return stockValue;
}

