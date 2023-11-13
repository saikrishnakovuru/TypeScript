const arr1: number[] = [4, 5, 6];
const arr2: number[] = [1, 2, ...arr1];

const mem: string = "sai";

console.log(...arr2);
console.log(...mem);

// here are the few implementations we used spread operator for

// 1. it helps to copy the array
// 2. it helps to merge the array.

// ** understand the spread in a simple way that it explans(or)spreads the array or string.

//=========================================================================================

const restaurent = {
  ingrediants: ["kaaram", "uppu", "pepper", "pasupu"],
};

const orderPasta = (...ing: string[]): void => {
  console.log(
    `preparing pasta with ${ing[0]}, ${ing[1]}, ${ing[2]}, ${ing[3]}`
  );
};

// 3. here we saw the use of spread to pass arguments.
orderPasta(...restaurent.ingrediants);
// in the above step we are passing arguments to orderPasta with `Spread operator`.
//understand what spread operator does like, it spreads the values one by one, so the function should also be able to take the values one by one.
// `Rest operator` takes teh values one by one so we used rest operator in orderPasta to accept arguments.

//=========================================================================================
