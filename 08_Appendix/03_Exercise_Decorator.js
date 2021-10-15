var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class Decorator
function logClass(constructor) {
    var newconstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.name = args[0];
        this.surname = args[1];
    };
    return newconstructor;
}
var Person = /** @class */ (function () {
    function Person(name, surname) {
    }
    Person = __decorate([
        logClass
    ], Person);
    return Person;
}());
// Method Decorator
function get() {
    return function (target, propertyKey, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var result = 100;
                if (args[0] > 10) {
                    result = 1000;
                }
                return result;
            }
        };
    };
}
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    Product2.prototype.getProductPrice = function (productId) {
        return 100;
    };
    __decorate([
        get()
    ], Product2.prototype, "getProductPrice", null);
    return Product2;
}());
var personOne = new Person("A", "One");
console.log('Name is ' + personOne.name + ' ' + personOne.surname);
var productOne = new Product2();
console.log('Product price : ' + productOne.getProductPrice(10));
// Run command
// tsc --target ES5 --experimentalDecorators .\03_Exercise_Decorator.ts
// node .\03_Exercise_Decorator.js
