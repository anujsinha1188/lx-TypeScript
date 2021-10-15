var product = typeof localStorage.getItem("Product") === 'string' ? JSON.parse(localStorage.getItem("Product")) : null;
document.getElementById("phoneImage").setAttribute('src', '../images/' + product.imageUrl);
document.getElementById("pName").innerHTML = product.productName;
document.getElementById("pPrice").innerHTML = product.productPrice.toString();
document.getElementById("pAvailable").innerHTML = product.productAvailable ? "Available" : "Out Of Stock";
document.getElementById("pDiscount").innerHTML = product.productDiscount;
document.getElementById("gold").innerHTML = product.gold;
document.getElementById("pinkgold").innerHTML = product.pinkgold;
document.getElementById("silver").innerHTML = product.silver;
document.getElementById("productDescription").innerHTML = product.productDescription;
function getMobileByColor(clr) {
    document.getElementById("phoneImage").setAttribute('src', '../images/' + product.imageUrl);
    document.getElementById("pPrice").innerHTML = product[clr];
}
