// declaring a Generic Class Gadget
class Gadget<T> {

    productList: Array<T>;
    addItems(newItemList: Array<T>): void {
        this.productList = newItemList;
        console.log('Item added');
    }

    getProductList(): Array<T> {
        return this.productList;
    }

}

// Creation of reference variable of Gadget class with String array parameter
const product = new Gadget<string>();

// Creation of reference variable of String array type
const productList: Array<string> = ['Mobile', 'Tablet', 'Ipod'];

// logic to add product list value to product object
product.addItems(productList);

// Creation of reference variable of String array to hold the return value of getProductList method
const allProducts: Array<string> = product.getProductList();

// line to populate the details of above declared reference variable.
console.log('The available products are ' + allProducts);
