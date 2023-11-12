// here we are using union of object and string
type Usr = { name: string } | string;
let u2 = {} as Usr;
u2 = "asd";
// u2.name = "asd" --> we are unable to do this step because Usr is not just of type Object.
console.log(u2);

let u1: Usr;
u1 = { name: "sai" };

console.log(u1);
u1 = 'Michael';
console.log(u1);
