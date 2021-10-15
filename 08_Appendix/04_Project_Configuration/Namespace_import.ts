/// <reference path="./Namespace_demo.ts" />
import util = Utility.Payment;
const paymentAmount = util.CalculateAmount(1255, 6);
console.log(`Amount to be paid: ${paymentAmount}`);
const discount = Utility.MaxDiscountAllowed(6);
console.log(`Maximum discount allowed is: ${discount}`);
