

type StudentDetailGenerator = (studentId: number, ...studentName: string[]) => string;

let studentDetailGenerator: StudentDetailGenerator = (studentId: number, ...studentName: string[]): string => {
    return studentName.join(',') + ',' + studentId.toString();
}

console.log("Student Details are : " + studentDetailGenerator(1001, 'Tom Charles', 'Harry Potter'));