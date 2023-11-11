//================================================================================================
// LiteralTypes using 'enum'.
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

// console.log(combineValues(10,20,Evaluation.AsString));

//================================================================================================
// LiteralTypes using 'type'.
type Signal = "RED" | "GREEN" | "ORANGE";

const actOnSignal = function (signal: Signal): void {
  switch (signal) {
    case "RED":
      console.log("Stop the vehicle");
      break;
    case "GREEN":
      console.log("Drive the vehicle");
      break;
    case "ORANGE":
      console.log("Start the vehicle");
      break;
    default:
      console.log("none of the case matches");
  }
};

actOnSignal("RED");
