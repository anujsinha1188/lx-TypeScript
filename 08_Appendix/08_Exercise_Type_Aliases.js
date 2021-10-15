var studentDetailGenerator = function (studentId) {
    var studentName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        studentName[_i - 1] = arguments[_i];
    }
    return studentName.join(',') + ',' + studentId.toString();
};
console.log("Student Details are : " + studentDetailGenerator(1001, 'Tom Charles', 'Harry Potter'));
