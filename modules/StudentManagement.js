import Student, { COURSE } from "./Student.js";

function manageClass() {
  let studentA = new Student(1, "Ty");
  let studentB = new Student(2, "Teo");

  let students = new Array();
  students.push(studentA);
  students.push(studentB);
  console.log(students);
}

manageClass();
console.log(COURSE);

