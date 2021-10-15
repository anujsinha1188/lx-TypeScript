// class Decorator
function logClass(constructor: Function) {
    const newconstructor: any = function (...args) {
        this.name = args[0];
        this.surname = args[1];
    };
    return newconstructor;
}
@logClass
class Person {
    name: string;
    surname: string;
    constructor(name: string, surname: string) {
    }
}

// Method Decorator
function get() {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        return {
            value: (...args: any[]) => {
                let result = 100;
                if (args[0] > 10) {
                    result = 1000;
                }
                return result;
            }
        };
    };
}
class Product2 {
    productId: number;
    @get()
    getProductPrice(productId: number): number {
        return 100;
    }
}
let personOne = new Person("A", "One");
console.log('Name is ' + personOne.name + ' ' + personOne.surname);
let productOne = new Product2();
console.log('Product price : ' + productOne.getProductPrice(10));

// Run command
// tsc --target ES5 --experimentalDecorators .\03_Exercise_Decorator.ts
// node .\03_Exercise_Decorator.js