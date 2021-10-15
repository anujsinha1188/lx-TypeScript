"use strict";
exports.__esModule = true;
var _04_Demo_Default_Exports_1 = require("./04_Demo_Default_Exports");
var product = new _04_Demo_Default_Exports_1["default"]();
var details = product.getProductDetails(1001);
console.log(details);
var util = new _04_Demo_Default_Exports_1.Utility();
var price = util.CalculateAmount(1300, 4);
console.log("The price is " + price);
