function doSomething() {
  let a = 3;
  if (a > 2) {
    let a = 5;
    console.log(`a inner if is: ${a}`);
  }
  console.log(`a outter id is: ${a}`);
}
doSomething();
