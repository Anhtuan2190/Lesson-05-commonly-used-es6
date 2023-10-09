//Calculate facto
function display(n, some) {
  console.log(`Factorial of ${n}: ${some}`);
}

function calcFactorial(n, showResult) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  showResult(n, result);
}
calcFactorial(3, display);
