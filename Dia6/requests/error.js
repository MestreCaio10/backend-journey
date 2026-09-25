const products = [
    {
        id: 1,
        name: "Mouse Gamer",
        price: 149.90,
        quantity: 12
    },
    {
        id: 2,
        name: "Teclado Mecânico",
        price: 299.90,
        quantity: 8
    },
    {
        id: 3,
        name: "",
        price: 89.90,
        quantity: 15
    },
    {
        id: 4,
        name: "Monitor 24",
        price: -899.90,
        quantity: 5
    },
    {
        id: 5,
        name: "Headset",
        price: 199.90,
        quantity: -3
    },
    {
        id: 6,
        name: "Webcam",
        price: 0,
        quantity: 7
    },
    {
        id: 7,
        name: "Notebook",
        price: 3499.90,
        quantity: 0
    },
    {
        id: 8,
        name: "SSD 1TB",
        price: "499.90",
        quantity: 10
    },
    {
        id: 9,
        name: "Memória RAM 16GB",
        price: 329.90,
        quantity: "6"
    },
    {
        id: 10,
        price: 79.90,
        quantity: 20
    },
    {
        id: 11,
        name: 12345,
        price: 59.90,
        quantity: 4
    },
    {
        id: 12,
        name: "Cabo HDMI",
        price: 39.90,
        quantity: 25
    }
];

function validateProduct(product) {
    if (!product.name || typeof product.name !== "string") {
        throw new Error("Produto sem nome ou com nome inválido.")
    }

    if (product.price === undefined || product.price === null || typeof product.price !== "number" || product.price <= 0) {
        throw new Error("Produto sem preço ou com preço inválido.");
    }

    if (product.quantity === undefined || product.quantity === null || typeof product.quantity !== "number" || product.quantity < 0) {
        throw new Error("Produto com quantidade inválida");
    }
}

for (let index = 0; index < products.length; index++) {
    const element = products[index];

    try {
        validateProduct(element);
        console.log("Produto com id:",element.id," válido");

    } catch (error) {
        console.log("Produto com id:",element.id," inválido, pelo motivo:", error.message);
    }
    
}