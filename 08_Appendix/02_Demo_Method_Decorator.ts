function logMethod() {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        return {
            value: (...args: any[]) => {
                console.log('Arguments: ', args.join(', '));
                const result = descriptor.value.apply(target, args);
                console.log('Total Payable Amount is: ', result);
                return result;
            }
        };
    };
}
class Product {
    @logMethod()
    calculateAmountPayable(price: number, quantity: number) {
        return price * quantity;
    }
}
const p: Product = new Product();
p.calculateAmountPayable(220, 3);

// Run command
// tsc --target ES5 --experimentalDecorators 02_Demo_Method_Decorator.ts
// node 02_Demo_Method_Decorator.js