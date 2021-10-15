class a {

    fun(str: string): string {
        return str + " from a";
    }

}

class b extends a {
    fun(str: string): string {
        super.fun(str);
        return str + " from b";
    }
}

let obj = new b();
let disp: string = obj.fun("Hello");
console.log(disp);