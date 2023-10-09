function display(text) {
  console.log(text);
}

let myPromise = new Promise(function (resolve, reject) {
  let x = 0;
  if (x === 0) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

myPromise.then(
  function (value) {
    display(value);
  },
  function (error) {
    display(error);
  }
);
