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

export {
    addProduct,
    findProductById,
    updateProduct,
}