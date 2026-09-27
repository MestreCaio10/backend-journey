import {
    products
} from "./data/products.js";
import * as productService from "./services/productService.js";
import {
    generateInventoryReport
} from "./reports/productReport.js";
let currentProducts = products;

console.log(products);

currentProducts = productService.addProduct(currentProducts, {id: 13, name: "Cabo de rede", category: "Acessórios", price: 10.00, quantity: 16});

console.log(productService.findProductById(currentProducts, 8));

currentProducts = productService.updateProduct(currentProducts, 8, {price: 460.00});

currentProducts = productService.removeProduct(currentProducts, 10);

console.log(productService.filterByCategory(currentProducts, "Acessórios"));
console.log(productService.getLowStockProducts(currentProducts, 5));
console.log(productService.getOutOfStockProducts(currentProducts));

const report = generateInventoryReport(currentProducts);

console.log("=========== Relatório de Inventário ============");
console.log("Total de produtos cadastrados: ", report.totalProducts);
console.log("Total de unidades em estoque: ", report.totalUnits);
console.log("Valor do inventário: R$", report.totalInventoryValue);
console.log("Quantidade de produtos com estoque baixo: ", report.lowStockCount);
console.log("Quantidade de produtos fora de estoque: ", report.outOfStockCount);
console.log("================================================");

console.log(currentProducts);

try {
    productService.addProduct(currentProducts, {id: 13, name: "Cabo de rede", category: "Acessórios", price: 10.00, quantity: 16 });
} catch (error) {
    console.log(error.message);
}

try {
    productService.updateProduct(currentProducts, 66, {price: 92.00});
} catch (error) {
    console.log(error.message);
}

try {
    productService.removeProduct(currentProducts, 55);
} catch (error) {
    console.log(error.message);
}