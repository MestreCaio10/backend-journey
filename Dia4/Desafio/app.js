import { products } from "./data.js";
import {
    addProduct,
    findProductById,
    updateProduct,
    removeProduct,
    filterLowStock,
    calculateTotalStockValue,
    calculateStockValue
} from "./services.js";

console.log(products);

let newProducts = addProduct(products, {id: 11, name: "Switch", price: 250.90, quantity: 6});
console.log(newProducts)

console.log(findProductById(newProducts, 8));

newProducts = updateProduct(newProducts, 2, {price: 99.90, quantity: 15});
console.log(newProducts)
newProducts = removeProduct(newProducts, 10);
console.log(newProducts)

console.log(filterLowStock(newProducts, 5));

console.log(calculateStockValue(newProducts, 6));

console.log(calculateTotalStockValue(newProducts));

console.log(newProducts);
