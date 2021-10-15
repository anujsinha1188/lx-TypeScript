// declaring Generic function named printData
function printData(data) {
    return data;
}
// variable declaration to access Generic function
var stringData = printData('Hello Generics');
var numberData = printData(123);
var Product = /** @class */ (function () {
    function Product(productName) {
        this.productName = productName;
    }
    return Product;
}());
var classData = printData(new Product('Product Name'));
// line to populate the result of Generic function on console.
console.log('String data ' + stringData);
console.log('Number data ' + numberData);
console.log('Class data ' + classData);
