// declaring a Generic Array named orderDetails
function orderDetails(arg) {
    console.log(arg.length);
    return arg;
}
// creating a variable to hold a number array
var orderid = [101, 102, 103, 104];
//let orderid:Array<string>=[101,102,103,104];
// creating a variable to hold a string array
var ordername = ['footwear', 'dress', 'cds', 'toys'];
// creating a variable to hold result of orderDetails function with a number array as parameter
var idList = orderDetails(orderid);
// line to populate the result of line no 14
console.log(idList);
// creating a variable to hold result of orderDetails function with a string array as parameter
var nameList = orderDetails(ordername);
// line to populate the result of line no 20
console.log(nameList);
var orderBoolean = [true, false, true, true];
console.log(orderDetails(orderBoolean));
