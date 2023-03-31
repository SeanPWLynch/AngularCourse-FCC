"use strict";
//Optional Param
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 2, 2));
//Default param
const sub = (num1, num2, num3 = 10) => num1 - num2;
console.log(sub(4, 2));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(8, 8));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a = a + b, 0);
}
console.log(add2(5, 5, ...[1, 2, 3, 4, 5]));
console.log(add2(5, 5));
