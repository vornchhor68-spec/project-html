// ID card for Student exercise 8
const student_Id = 101;
let studentName = "Chhorvorn";
let student_Score = 90;
let isPassed = true;
const subject = ["Mathematics", "Computer Science", "Physics", "Computer Fundamentales"];
console.log(student_Id, studentName, student_Score, isPassed, subject);

// Function identifyType exercise 9
function identifyType(data) {
    if (data === null) {
        return "null";
    } else if (Array.isArray(data)) {
        return "array";
    } else {
        return typeof data;
    }
}