async function display() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello C07 Class");
    }, 3000);
  });
  console.log(await myPromise);
}
display();
