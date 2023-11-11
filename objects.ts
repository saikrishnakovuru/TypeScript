type User = {
  rollnumber: number;
  name: string;
  [key: string]: any;
};

const user: User = {
  rollnumber: 1,
  name: "sai",
};

const user1: User = {} as User;
user1.name = "panda";
user1.rollnumber = 91;
console.log(user1);

user.age = 25;

console.log(user);
