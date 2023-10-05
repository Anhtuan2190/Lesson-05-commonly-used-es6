let arr01 = ["hello", true, 7];
let arr02 = [1, 2, 3, ...arr01];
let arr03 = [4, 5, 6];

console.log(arr02);

function calcSomething(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(calcSomething(1, 2, ...arr03));

function calcSomething2(x, y, ...a) {
    console.log(a);
    return (x + y) * a.length;
}
console.log(calcSomething2(1, ...arr03));
