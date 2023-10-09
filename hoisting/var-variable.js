function doSomething() {
  var a = 3;
  if (a > 2) {
    var a = 5;
    console.log(`a inner if is: ${a}`);
  }
  console.log(`a outter id is: ${a}`);
}
doSomething();
