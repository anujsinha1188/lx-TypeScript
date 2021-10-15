"use strict";
exports.__esModule = true;
var _03_Demo_Modules_1 = require("./03_Demo_Modules");
var util = new _03_Demo_Modules_1.Utility();
var price = util.CalculateAmount(1350, 4);
var discount = _03_Demo_Modules_1.MaxDiscountAllowed(2);
console.log("Maximum discount allowed is: " + discount);
console.log("Amount to be paid: " + price);
console.log("ProductName is: " + _03_Demo_Modules_1.productName);
