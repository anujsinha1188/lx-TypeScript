var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod() {
    return function (target, propertyKey, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.log('Arguments: ', args.join(', '));
                var result = descriptor.value.apply(target, args);
                console.log('Total Payable Amount is: ', result);
                return result;
            }
        };
    };
}
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.calculateAmountPayable = function (price, quantity) {
        return price * quantity;
    };
    __decorate([
        logMethod()
    ], Product.prototype, "calculateAmountPayable", null);
    return Product;
}());
var p = new Product();
p.calculateAmountPayable(220, 3);
// Run command
// tsc --target ES5 --experimentalDecorators 02_Demo_Method_Decorator.ts
// node 02_Demo_Method_Decorator.js
