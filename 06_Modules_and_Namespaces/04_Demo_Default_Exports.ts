export default class {
    productName = 'Tablet';
    getProductDetails(productId: number): string {
        return 'ProductId is ' + productId + 'ProductName is ' + this.productName;
    }
}
export class Utility {
    CalculateAmount(price: number, quantity: number): number {
        return price * quantity;
    }
}

// Run command
// tsc 04_Demo_Default_Exports.ts 04_test_defaultexport.ts
// node 04_test_defaultexport.js