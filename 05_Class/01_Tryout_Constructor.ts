// declaring a Product class
class Product {

    static productPrice: string;
    productId: number;
    productPrice: number;
    // constructor declaration
    constructor(productId: number, productPrice: number) {
        this.productId = productId;
        this.productPrice = productPrice;
    }
    getProductId(): string {
        return 'Product id is : ' + this.productId;
    }
    getProductPrice(): string {
        return 'Product price is : ' + this.productPrice;
    }
}

// creation of Product class object
const product: Product = new Product(1234, 98);
const product2: Product = new Product(5678, 78);

// line to populate the product id details
console.log(product.getProductId());
console.log(product.getProductPrice());
console.log(product2.getProductId());
console.log(product2.getProductPrice());

