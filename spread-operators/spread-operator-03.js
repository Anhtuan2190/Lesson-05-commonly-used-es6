let personalInfor = { id: 1, name: "Ty", age: 18 };
let learningInfo = { course: "Frontend", lesson: "ES6"};
let studentInfo = {...personalInfor, ...learningInfo, level: "Junior"};
console.log(studentInfo);

