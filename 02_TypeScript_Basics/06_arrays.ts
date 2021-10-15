let productlist = [
    {
        pId: 432,
        productName: "Samsung Galaxy Note 7",
        productPrice: 699,
        productAvailable: true,
        imageUrl: "SamsungGalaxy_Gold.jpg",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
    },
    {
        pId: 432,
        productName: "Samsung Galaxy S6 Edge",
        productPrice: 630,
        productAvailable: true,
        imageUrl: "samsung_edge_silver.jpg",
        productDescription: "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."
    },
    {
        pId: 432,
        productName: "Nokia Lumia 640XL",
        productPrice: 224,
        productAvailable: false,
        imageUrl: "lumia_640xl.jpg",
        productDescription: "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."
    }
];
for (let index = 0; index < productlist.length; index++) {
    document.getElementById("pName" + index).innerHTML = productlist[index].productName;
    document.getElementById("pPrice" + index).innerHTML = productlist[index].productPrice.toString();
    document.getElementById("pAvailable" + index).innerHTML = productlist[index].productAvailable ? "Available" : "Out Of Stock";
}