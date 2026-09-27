import {
    getOutOfStockProducts,
    getLowStockProducts
} from "../services/productService.js"

export function generateInventoryReport(products) {
    const totalProducts = products.length;
    const totalUnits = products.reduce((total, product) => total + product.quantity, 0);
    const totalInventoryValue = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const lowStock = getLowStockProducts(products, 5);
    const lowStockCount = lowStock.length;
    const outOfStock = getOutOfStockProducts(products);
    const outOfStockCount = outOfStock.length;

    const inventoryReport = {totalProducts, totalUnits, totalInventoryValue, lowStockCount, outOfStockCount};

    return inventoryReport;
} 