enum Evaluation {
  AsNumber,
  AsString,
}

const combineValues = function (
  value1: number | string,
  value2: number | string,
  evaluation: Evaluation
): number | string {
  if (evaluation === Evaluation.AsString) {
    return value1.toString() + value2.toString();
  }
  return +value1 + +value2;
};

console.log(combineValues(10, 20, Evaluation.AsString));
