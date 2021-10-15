export function MaxDiscountAllowed(noOfProduct: number): number {
    if (noOfProduct > 5) {
        return 30;
    } else {
        return 10;
    }
}
class Utility {
    CalculateAmount(price: number, quantity: number): number {
        return price * quantity;
    }
}
interface Category {
    getCategory(productId: number): string;
}
export const productName = 'Mobile';
export { Utility, Category };

// Run command
// tsc 03_Demo_Modules.ts 03_module_import.ts
// node .\03_module_import.js