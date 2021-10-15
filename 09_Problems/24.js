var company = /** @class */ (function () {
    function company(empName, empDept) {
        this._empName = "Jack";
        this._empDept = "Finacle";
        this._empName = empName;
        this._empDept = empDept;
    }
    company.prototype.display = function () {
        console.log(this._empName + " works for " + this._empDept
            + " unit");
    };
    return company;
}());
var emp1 = new company("Tom", "Training");
emp1.display();
