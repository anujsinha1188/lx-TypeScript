// this try out helps us to create an offer code generator for various products:
var generateOffer = function (product) {
    var offerPrefix = product.pName.substr(0, 4).toUpperCase() + product.details.categoryId;
    product.details.availableProductIds.map(function (subProduct) {
        console.log("Offer code for " + subProduct + " : " + offerPrefix + "-" + subProduct + " ");
    });
    return product.details.availableProductIds.length;
};
var p1 = {
    pName: "Samsung", licenseNo: "LC34223",
    details: { categoryId: 2012, availableProductIds: ["101", "102", "105"] }
};
console.log("No.of Available for " + p1.pName + ": ", generateOffer(p1));
var p2 = {
    pName: "One Plus", licenseNo: "LC34224",
    details: { categoryId: 2016, availableProductIds: ["101", "102", "105"] }
};
console.log("No.of Available for " + p2.pName + ": ", generateOffer(p2));
