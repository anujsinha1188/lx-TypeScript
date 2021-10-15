interface Product {
    pId: number;
    productName: string;
    productPrice: number;
    productAvailable: boolean;
    imageUrl: string;
    productDescription: string;
}
var productlist = [
    {
        pId: 432,
        productName: "Samsung Galaxy Note 7",
        productPrice: 699,
        productAvailable: true,
        imageUrl: "SamsungGalaxy_Gold.jpg",
        productDiscount: '15%',
        gold: 699,
        pinkgold: 650,
        silver: 712,
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
    },
    {
        pId: 231,
        productName: "Samsung Galaxy S6 Edge",
        productPrice: 630,
        productAvailable: true,
        imageUrl: "samsung_edge_silver.jpg",
        productDiscount: '15%',
        gold: 699,
        pinkgold: 650,
        silver: 712,
        productDescription: "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."
    },
    {
        pId: 875,
        productName: "Nokia Lumia 640XL",
        productPrice: 224,
        productAvailable: false,
        imageUrl: "lumia_640xl.jpg",
        productDiscount: '15%',
        gold: 699,
        pinkgold: 650,
        silver: 712,
        productDescription: "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."
    }
];
function getMobileDetails(productName, productId) {
    var filteredList = productlist.filter(function (product) { return product.pId == productId; });
    localStorage.setItem("Product", JSON.stringify(filteredList[0]));
}
