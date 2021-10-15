class company {
    private _empName: string = "Jack";
    private _empDept: string = "Finacle";
    constructor(empName: string, empDept: string) {
        this._empName = empName;
        this._empDept = empDept;
    }
    display(): void {

        console.log(this._empName + " works for " + this._empDept
            + " unit");
    }
}
var emp1 = new company("Tom", "Training");
emp1.display();