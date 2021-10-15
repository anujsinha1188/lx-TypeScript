// declaring an interface
interface Product {
    productId: number;
    productName: string;
}

// logic to display the Product details with interface object as parameter
function getProductDetails(productobj: Product): string {
    return 'The product name is : ' + productobj.productName;
    //return 'The product name is : ' + productobj.productName + '. The product id is : ' + productobj.productId + '. The product price is : ' + productobj.productPrice;
}

// declaring a variable having interface properties
//const prodObject = { productId: 1001, productName: 'Mobile' };
//let prodObject = { productName: 'Mobile', productPrice: 10000 };
let prodObject = { productId: 1001, productName: 'Mobile', productPrice: 10000 };

// declaring variable and invoking Product details function
const productDetails: string = getProductDetails(prodObject);

// line to populate the created product on console
console.log(productDetails);