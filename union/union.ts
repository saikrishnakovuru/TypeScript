// a type that represents a value that can be of more than one type is an union

//in this example lets use a common function to compine numbers and string

const combine = function (
  value1: number | string,
  value2: number | string
): number | string {
  if (typeof value1 === "number" && typeof value2 === "number")
    return value1 + value2;
  return value1.toString() + value2.toString();
};

console.log(combine(20, 20));
console.log(combine("panda", " babai"));
