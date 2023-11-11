// TypeAlias is used instead of union, in the below example we used union of string and number

const combine = function (
  value1: number | string,
  value2: number | string
): number | string {
  if (typeof value1 === "number" && typeof value2 === "number")
    return value1 + value2;
  return value1.toString() + value2.toString();
};

// Now lets use typeAlias

type CombinationDescriptor = number | string;

const combine = function (
  value1: CombinationDescriptor,
  value2: CombinationDescriptor
): CombinationDescriptor {
  if (typeof value1 === "number" && typeof value2 === "number")
    return value1 + value2;
  return value1.toString() + value2.toString();
};
