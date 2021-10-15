class company {
    static empId: number = 753800;
    private _eta: boolean;
    constructor() {
        this.empId++;
        this._eta = false;
    }
    display(dept: boolean): boolean {
        this._eta = dept;
        return this._eta;
    }
}
var emp1 = new company();
emp1.display(false);
alert(emp1);
let emp2 = new company();
alert(emp2.empId);