export function addProduct(products, product) {

    if (product.id === undefined || product.id === null || typeof product.id !== "number") {
        throw new Error("Produto sem ID ou com ID inválido.");
    }

    if (products.some(p => p.id === product.id)) {
        throw new Error("Já existe um produto cadastrado com este ID.");
    }
    
    if (!product.name || typeof product.name !== "string") {
        throw new Error("Produto sem nome ou com nome inválido.")
    }

    if (product.price === undefined || product.price === null || typeof product.price !== "number" || product.price <= 0) {
        throw new Error("Produto sem preço ou com preço inválido.");
    }

    if (product.quantity === undefined || product.quantity === null || typeof product.quantity !== "number" || product.quantity < 0) {
        throw new Error("Produto com quantidade inválida");
    }

    const currentProducts = [...products, product]

    return currentProducts
}

export function findProductById(products, id) {
    const product = products.find(product => product.id === id);
    if (product === undefined) {
        throw new Error("Produto inexistente");      
    }
    return product;
}

export function updateProduct(products, id, newData) {
    const originalProduct = products.find(product => product.id === id);
    if (originalProduct === undefined) {
        throw new Error("Produto inexistente");      
    }
    
    const simulatedProduct = { ...originalProduct, ...newData };
    
    if (!simulatedProduct.name || typeof simulatedProduct.name !== "string") {
        throw new Error("Produto sem nome ou com nome inválido.");
    }

    if (simulatedProduct.price === undefined || simulatedProduct.price === null || typeof simulatedProduct.price !== "number" || simulatedProduct.price <= 0) {
        throw new Error("Produto sem preço ou com preço inválido.");
    }

    if (simulatedProduct.quantity === undefined || simulatedProduct.quantity === null || typeof simulatedProduct.quantity !== "number" || simulatedProduct.quantity < 0) {
        throw new Error("Produto com quantidade inválida");
    }

    const currentProducts = products.map(product => {
        if (product.id === id) {
            return simulatedProduct;
        }
        return product;
    });

    return currentProducts; 
}

export function removeProduct(products, id) {
    findProductById(products, id)
    const currentProducts = products.filter(product => product.id !== id);
    return currentProducts;
}

export function filterByCategory(products, category) {
    if (!products.some(product => product.category === category)) {
        throw new Error("Categoria inexistente na lista de produtos.");
    }
    return products.filter(product => product.category === category);
}

export function getLowStockProducts(products, limit) {
    return products.filter(product => product.quantity <= limit && product.quantity > 0);
}

export function getOutOfStockProducts(products) {
    return products.filter(product => product.quantity === 0);
}