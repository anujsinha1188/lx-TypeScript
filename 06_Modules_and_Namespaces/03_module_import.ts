import { Utility as mainUtility, Category, productName, MaxDiscountAllowed } from "./03_Demo_Modules";
const util = new mainUtility();
const price = util.CalculateAmount(1350, 4);
const discount = MaxDiscountAllowed(2);
console.log(`Maximum discount allowed is: ${discount}`);
console.log(`Amount to be paid: ${price}`);
console.log(`ProductName is: ${productName}`);
