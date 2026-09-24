const product = { id: 1, name: "Notebook", price: 3500, quantity: 8 };

const stockValue = product.price * product.quantity;

const message = `O produto ${product.name} tem ${product.quantity} unidades no estoque e está saindo por R$${product.price}. O valor em estoque é de R$${stockValue}`;

console.log((message));