// declaring a function
function CreateCustomerID(name: string, id: number): string {
    return 'The customer id is ' + name + ' ' + id;
}

// declaring a interface with function type
interface StringGenerator {
    (chars: string, nums: number): string;
    //(chars: string): string;
}

// creating reference variable of above declared interface
let idGenerator: StringGenerator;

// assignment of function to interface reference variable
idGenerator = CreateCustomerID;

// declaring a string parameter to hold return value of function type interface
const customerId: string = idGenerator('Mr.Tom', 101);
let id2: string = idGenerator("Mr.Sam", 102);
// line to populate the Customer Details
console.log(customerId);
console.log(id2);
