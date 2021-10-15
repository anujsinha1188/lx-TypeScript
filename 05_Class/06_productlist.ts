interface ProductInterface {
    pId: number;
    productName: string;
    productPrice: number;
    productAvailable: boolean;
    imageUrl: string;
    productDiscount: string;
    gold: number;
    pinkgold: number;
    silver: number;
    productDescription: string;
}
class Product implements ProductInterface {
    pId: number;
    productName: string;
    productPrice: number;
    productAvailable: boolean;
    imageUrl: string;
    productDiscount: string;
    gold: number;
    pinkgold: number;
    silver: number;
    productDescription: string;
    constructor(
        pId: number,
        productName: string,
        productPrice: number,
        productAvailable: boolean,
        imageUrl: string,
        productDiscount: string,
        gold: number,
        pinkgold: number,
        silver: number,
        productDescription: string) {
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
}
var productlist: Product[] = [];
productlist.push(new Product(432, "Samsung Galaxy Note 7", 699, true, "SamsungGalaxy_Gold.jpg", '15%', 699, 650, 712, "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."));
productlist.push(new Product(231, "Samsung Galaxy S6 Edge", 630, true, "samsung_edge_silver.jpg", '15%', 699, 650, 712, "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."));
productlist.push(new Product(875, "Nokia Lumia 640XL", 224, false, "lumia_640xl.jpg", '15%', 699, 650, 712, "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."));

function getMobileDetails(productName: string, productId: number) {
    var filteredList = productlist.filter((product) => { return product.pId == productId; });
    localStorage.setItem("Product", JSON.stringify(filteredList[0]));
}
