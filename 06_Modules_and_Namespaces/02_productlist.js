var Utility;
(function (Utility) {
    var ProductUtility;
    (function (ProductUtility) {
        var Product = /** @class */ (function () {
            function Product(pId, productName, productPrice, productAvailable, imageUrl, productDiscount, gold, pinkgold, silver, productDescription) {
                this.pId = pId;
                this.productName = productName;
                this.productPrice = productPrice;
                this.productAvailable = productAvailable;
                this.imageUrl = imageUrl;
                this.productDiscount = productDiscount;
                this.gold = gold;
                this.pinkgold = pinkgold;
                this.silver = silver;
                this.productDescription = productDescription;
            }
            return Product;
        }());
        ProductUtility.Product = Product;
    })(ProductUtility = Utility.ProductUtility || (Utility.ProductUtility = {}));
})(Utility || (Utility = {}));
/// <reference path="./02_ProductUtility.ts" />
var util = Utility.ProductUtility;
var productlist = [];
productlist.push(new util.Product(432, "Samsung Galaxy Note 7", 699, true, "SamsungGalaxy_Gold.jpg", '15%', 699, 650, 712, "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."));
productlist.push(new util.Product(231, "Samsung Galaxy S6 Edge", 630, true, "samsung_edge_silver.jpg", '15%', 699, 650, 712, "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."));
productlist.push(new util.Product(875, "Nokia Lumia 640XL", 224, false, "lumia_640xl.jpg", '15%', 699, 650, 712, "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."));
function getMobileDetails(productName, productId) {
    var filteredList = productlist.filter(function (product) { return product.pId == productId; });
    localStorage.setItem("Product", JSON.stringify(filteredList[0]));
}
