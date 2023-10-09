let getObject = () => {
  return {
    name: "Nguyen Van Teo",
    option: {
      age: 18,
      hometown: "Viet Nam",
    },
  };
};

let {
  name,
  option: { age, hometown },
} = getObject();
console.log("name = " + name, "age = " + age, "hometown = " + hometown);
