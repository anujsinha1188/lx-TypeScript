// declaring a Generic Class Gadget
var Gadget = /** @class */ (function () {
    function Gadget() {
    }
    Gadget.prototype.addItems = function (newItemList) {
        this.productList = newItemList;
        console.log('Item added');
    };
    Gadget.prototype.getProductList = function () {
        return this.productList;
    };
    return Gadget;
}());
// Creation of reference variable of Gadget class with String array parameter
var product = new Gadget();
// Creation of reference variable of String array type
var productList = ['Mobile', 'Tablet', 'Ipod'];
// logic to add product list value to product object
product.addItems(productList);
// Creation of reference variable of String array to hold the return value of getProductList method
var allProducts = product.getProductList();
// line to populate the details of above declared reference variable.
console.log('The available products are ' + allProducts);
