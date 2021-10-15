// declaring orderLength method with Generic constraints
function orderLength(arg) {
    var lengthValue = arg.length;
    console.log('Length is ' + lengthValue);
    return arg;
}
// declaring a class Product implementing AddLength interface
var Product = /** @class */ (function () {
    function Product() {
        this.length = 10;
    }
    return Product;
}());
// variable of Product class
var product = new Product();
// creation of variable which holds the return value of orderLength method
var product1 = orderLength(product);
// line to populate the length of Product class on console
console.log('Product Length ' + product1.length);
