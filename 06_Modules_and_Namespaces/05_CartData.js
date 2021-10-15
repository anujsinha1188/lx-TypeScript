var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
var product = typeof localStorage.getItem("Product") === 'string' ? JSON.parse(localStorage.getItem("Product")) : null;
var quantity = 1;
var totalPrice = product.productPrice * (100 - product.productDiscount) / 100;
var foundItem = false;
var selectedItem = null;
selectedItem = typeof localStorage.getItem('selectedItem') == 'string' ? JSON.parse(localStorage.getItem('selectedItem')) : null;
if (!selectedItem) {
    selectedItem = [];
}
else {
    for (var index = 0; index < selectedItem.length; index++) {
        if (selectedItem[index].productId == product.productId) {
            selectedItem[index].quantity = selectedItem[index].quantity + 1;
            selectedItem[index].totalPrice = totalPrice * selectedItem[index].quantity;
            foundItem = true;
        }
    }
}
if (!foundItem) {
    selectedItem.push({
        productId: product.productId,
        productName: product.productName,
        price: product.productPrice,
        quantity: quantity,
        totalPrice: totalPrice
    });
}
document.getElementById("pName").innerHTML = product.productName;
document.getElementById("pQuantity").innerHTML = quantity.toString();
document.getElementById("pPrice").innerHTML = product.productPrice;
document.getElementById("pTotalPrice").innerHTML = totalPrice.toString();
