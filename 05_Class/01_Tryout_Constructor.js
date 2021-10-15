// declaring a Product class
var Product = /** @class */ (function () {
    // constructor declaration
    function Product(productId, productPrice) {
        this.productId = productId;
        this.productPrice = productPrice;
    }
    Product.prototype.getProductId = function () {
        return 'Product id is : ' + this.productId;
    };
    Product.prototype.getProductPrice = function () {
        return 'Product price is : ' + this.productPrice;
    };
    return Product;
}());
// creation of Product class object
var product = new Product(1234, 98);
var product2 = new Product(5678, 78);
// line to populate the product id details
console.log(product.getProductId());
console.log(product.getProductPrice());
console.log(product2.getProductId());
console.log(product2.getProductPrice());
