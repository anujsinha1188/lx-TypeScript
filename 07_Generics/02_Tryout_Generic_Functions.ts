// declaring Generic function named printData
function printData<T>(data: T): T {
    return data;
}

// variable declaration to access Generic function
const stringData: string = printData<string>('Hello Generics');
const numberData: number = printData<number>(123);
class Product {
    constructor(productName: string) {
        this.productName = productName;
    }
    productName: string;
}
const classData: Product = printData<Product>(new Product('Product Name'));

// line to populate the result of Generic function on console.
console.log('String data ' + stringData);
console.log('Number data ' + numberData);
console.log('Class data ' + classData);
