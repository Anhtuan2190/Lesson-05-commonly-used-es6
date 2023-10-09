async function display() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("hello C07 class");
  });
  console.log(await myPromise);
}
display();
