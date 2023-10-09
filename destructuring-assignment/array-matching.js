let list = [1, 2, 3];
let [a, b] = list;
console.log("a = " + a, " b = " + b);

[b, a] = [a, b];
console.log("a = " + a, " b = " + b);
