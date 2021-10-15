function add(num1 = 200, num2?: number) {
    if (num1) {
        return num1 + num2;
    }
    return num2;
}

console.log(add(3, 5) + add(undefined, 5));