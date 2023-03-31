//Optional Param
function add(num1: number, num2: number, num3?:number) {
  return num3 ? num1 + num2 + num3 : num1+num2 ;
}

console.log(add(2, 2,2));

//Default param
const sub = (num1: number, num2: number, num3=10): number => num1 - num2;

console.log(sub(4, 2));


const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(mult(8, 8));

//Rest param
function add2(num1: number, num2: number, ...num3 : number[]) {
    return num1 + num2 + num3.reduce((a,b) => a = a + b , 0);
  }

  console.log(add2(5,5, ...[1,2,3,4,5]))
  console.log(add2(5,5))