type User = {
  rollnumber: number;
  name: string;
  [key: string]: any; // this is ued to add any property into the object dynamically.
};

const user: User = {
  rollnumber: 1,
  name: "sai",
};
user.age = 25; // we added a property age to the user.
// console.log(user);

const user1: User = {} as User;
user1.name = "panda";
user1.rollnumber = 91;
// console.log(user1);

//=======================================================================================

//let's use a Person type and compare the age with another Person.

type Person = {
  name: string;
  age: number;
};

const compareAge = function (p1: Person, p2: Person): void {
  if (p1.age > p2.age) console.log(p1.name + "is aged person than" + p2.name);
  else console.log(p2.name + " is an aged person than " + p1.name);
  console.log(
    p1.name + "'s age is " + p1.age + " and " + p2.name + "'s age is " + p2.age
  );
};

const p1: Person = { name: "babai", age: 27 };
const p2: Person = { name: "reddy", age: 30 };

compareAge(p1, p2);

//=======================================================================================

//this the direct way of representing objects, called object literal.
const Sebichive ={
  billing: 10,
  name: 'filter'
}