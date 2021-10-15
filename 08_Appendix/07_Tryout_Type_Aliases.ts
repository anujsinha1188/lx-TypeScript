// this try out helps us to create an offer code generator for various products:

type Name = string;
type Id = string | number;
type ProductCatelog = { categoryId: number, availableProductIds: [string, string, string] }
type Product = { pName: Name, licenseNo: Id, details: ProductCatelog }

type ProductOfferGenerator = (product: Product) => number;

let generateOffer: ProductOfferGenerator = (product: Product): number => {

    const offerPrefix = product.pName.substr(0, 4).toUpperCase() + product.details.categoryId;
    product.details.availableProductIds.map(
        (subProduct) => {
            console.log(`Offer code for ${subProduct} : ${offerPrefix}-${subProduct} `)
        }
    )
    return product.details.availableProductIds.length;
}

let p1: Product = {
    pName: "Samsung", licenseNo: "LC34223",
    details: { categoryId: 2012, availableProductIds: ["101", "102", "105"] }
}

console.log("No.of Available for " + p1.pName + ": ", generateOffer(p1));

let p2: Product = {
    pName: "One Plus", licenseNo: "LC34224",
    details: { categoryId: 2016, availableProductIds: ["101", "102", "105"] }
}

console.log("No.of Available for " + p2.pName + ": ", generateOffer(p2));
