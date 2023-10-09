function display(some) {
  console.log(some);
}

function calculate(num1, num2, callBackFunc) {
  let sum = num1 + num2;
  callBackFunc(sum);
}

calculate(4, 5, display);


