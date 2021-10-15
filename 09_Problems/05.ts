function fun(str: string): string {
    return 42 + " " + str;
}
function fun(num: number): string {
    return "hello! " + num;
}

let d: string = "hello!";
var disp: string = fun(d);
console.log(disp);