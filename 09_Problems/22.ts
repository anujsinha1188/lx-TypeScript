class A {
    printData<T>(data: T): T {
        if (data == "Barry Allen")
            alert("Data Received");
        return data;
    }
}
let obj = new A();
let data: string = obj.printData<string>('Barry Allen');