function add(num1, num2) {
    if (num1 === void 0) { num1 = 200; }
    if (num1) {
        return num1 + num2;
    }
    return num2;
}
console.log(add(3, 5) + add(undefined, 5));
