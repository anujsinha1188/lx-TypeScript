/// <reference path="./02_ProductUtility.ts" />
import util = Utility.ProductUtility;
var productlist: util.Product[] = [];
productlist.push(new util.Product(432, "Samsung Galaxy Note 7", 699, true, "SamsungGalaxy_Gold.jpg", '15%', 699, 650, 712, "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."));
productlist.push(new util.Product(231, "Samsung Galaxy S6 Edge", 630, true, "samsung_edge_silver.jpg", '15%', 699, 650, 712, "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."));
productlist.push(new util.Product(875, "Nokia Lumia 640XL", 224, false, "lumia_640xl.jpg", '15%', 699, 650, 712, "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."));

function getMobileDetails(productName: string, productId: number) {
    var filteredList = productlist.filter((product) => { return product.pId == productId; });
    localStorage.setItem("Product", JSON.stringify(filteredList[0]));
}
