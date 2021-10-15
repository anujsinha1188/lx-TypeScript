/// <reference path="./Namespace_demo.ts" />
var util = Utility.Payment;
var paymentAmount = util.CalculateAmount(1255, 6);
console.log("Amount to be paid: " + paymentAmount);
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximum discount allowed is: " + discount);
//# sourceMappingURL=Namespace_import.js.map