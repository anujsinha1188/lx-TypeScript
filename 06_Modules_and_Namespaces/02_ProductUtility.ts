namespace Utility {
    export namespace ProductUtility {
        export class Product {
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
    }
}