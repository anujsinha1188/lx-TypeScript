// declaring a function
function CreateCustomerID(name, id) {
    return 'The customer id is ' + name + ' ' + id;
}
// creating reference variable of above declared interface
var idGenerator;
// assignment of function to interface reference variable
idGenerator = CreateCustomerID;
// declaring a string parameter to hold return value of function type interface
var customerId = idGenerator('Mr.Tom', 101);
var id2 = idGenerator("Mr.Sam", 102);
// line to populate the Customer Details
console.log(customerId);
console.log(id2);
