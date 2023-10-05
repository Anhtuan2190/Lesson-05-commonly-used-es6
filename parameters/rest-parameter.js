//... khai báo tham số vô hạn
function sum(...params) {
  let sum = 0;
  for (let param of params) sum += param;
  return sum;
}

let result1 = sum(1, 2, 3, 4, 5);
console.log(result);


