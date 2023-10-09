let getObject = () => {
  return {
    name: "Nguyen Van Teo",
    age: 18,
    hometown: "Viet Nam",
  };
};

let { name, age, hometown } = getObject();
console.log("name = " + name, "age = " + age, "hometown = " + hometown);
