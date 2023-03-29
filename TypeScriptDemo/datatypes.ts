let fname : string;

fname = "Sean";

let newname = fname.toUpperCase();

console.log(newname);


let age: number;
age=32;

let ageString = "32"

let inferAge = parseInt(ageString);

console.log(inferAge);

let isValid: boolean;

isValid = false;

console.log(isValid);

let empList : string[];

empList = ["Matthew","Mark","John"];

console.log(empList);

let numList : Array<number>;

numList = [1,2,3,4,5];

let filterResult = numList.filter(num => num > 2);

console.log(numList);
console.log(filterResult);


let sum = numList.reduce((acc,num) => acc+num);

console.log(sum);

enum Colour {
    Red,
    Green,
    Blue
}

let testRed = Colour.Red;
let testGreen = Colour.Green;
let testBlue = Colour.Blue;

console.log(testRed);
console.log(testGreen);
console.log(testBlue);