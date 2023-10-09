//Way 01
function display01(some) {
  console.log(some);
}

function calculate01(num1, num2) {
  return num1 + num2;
}

let result = calculate01(3, 4);
display01(result);

//Way 2
function display02(some) {
  console.log(some);
}

function calculate02(num1, num2) {
  let result = num1 + num2;
  display02(result);
}

calculate02(5, 6);
