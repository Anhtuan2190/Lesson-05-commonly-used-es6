//ES5
let student = {
  name: "Teo",
  age: 18,
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

console.log(student.getName());
console.log(student.getAge());

//ES6
let student02 = {
  name: "Teo",
  age: 18,
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  },
};

console.log(student02.getName());
console.log(student02.getAge());
