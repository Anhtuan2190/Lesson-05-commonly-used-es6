const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Wellcome to CodeGym"), 3000);
});

myPromise.then(function (value) {
  console.log(value);
});
