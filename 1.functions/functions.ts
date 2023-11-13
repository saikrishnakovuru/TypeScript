const mul = (a: number, b: number): number => a * b;

function asd(a: number, b: number): number {
  return a * b;
}

const one = function (a: number, b: number): number {
  return a * b;
};

const person = {
  name: "sai",
  rollNumber: 491,
};

console.log(mul(3, 3));
console.log(asd(3, 6));
console.log(one(3, 6));

const arrowFunctionWithNoParameters = () =>
  console.log("arrowFunctionWithNoParameters");

const arrowFunctionWithOneParameter = (n: number) => n;

const functionExpressionWithOneParameter = function (n: number): number {
  return n;
};
