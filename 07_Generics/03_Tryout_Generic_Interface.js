// declaring Gadget class implementing Generic interface Inventory of string type
var Gadget = /** @class */ (function () {
    function Gadget() {
        // assigning string array value to variable
        this.productList = ['Mobile', 'Tablet', 'Ipod'];
    }
    Gadget.prototype.addItem = function (newItem) {
        console.log('Item added');
    };
    // method to populate the product list
    Gadget.prototype.getProductList = function () {
        return this.productList;
    };
    return Gadget;
}());
// creating the reference variable of string type Inventory interface holding Gadget class object
var productInventory = new Gadget();
// logic to store the product list information into a variable
var allProducts = productInventory.getProductList();
// line to populate the products details on console
console.log('The available products are : ' + allProducts);
