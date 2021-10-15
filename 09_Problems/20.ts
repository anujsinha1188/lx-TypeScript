class product {
    prodId: number = 10;
    prodName: string = pen;
}

namespace a {
    export let obj = new product()
}

obj.prodName = "Coffee Mug";
