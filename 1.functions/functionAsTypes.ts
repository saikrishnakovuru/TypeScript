//FunctionAsTypes using let or const.
let operations: (num1: number, num2: number) => number;

const addi = (operations = (num1, num2) => num1 + num2);
const subs = (operations = (num1, num2) => num1 - num2);

console.log(addi(10, 20));
console.log(subs(10, 20));

//================================================================================================
//FunctionAsTypes using type
type Operations = (num1: number, num2: number) => number;

const addition: Operations = (num1, num2) => num1 + num2;
const substraction: Operations = (num1, num2) => num1 - num2;

console.log(addition(10, 20));
console.log(substraction(10, 20));
