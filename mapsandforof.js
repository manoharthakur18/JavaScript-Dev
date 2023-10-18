// var john = {
//   name: "I am John",
//   age: 26,
//   active: true,
// };
// var marry = {
//   name: "I am Marry",
//   age: 36,
//   active: true,
// };
// var doe = {
//   name: "I am Doe",
//   age: 46,
//   active: true,
// };

// let users = new Map();
// users.set("john", john);
// users.set("marry", marry);
// users.set("doe", doe);

// console.log(users.size)
// console.log(users.get('doe'))
// console.log(users.keys())
// console.log(users.values())

// for (const key of users.keys()) {
//   console.log(key);
// }
// for (const value of users.values()) {
//   console.log(value.name);
// }
// for(const [key,value] of users.entries()){
//     console.log(key,value)
// }

// users.forEach((value, key) => {
//   console.log(value, key);
// });

const arrofarr = [
  ["one", 1],
  ["tow", 2],
  ["three", 3],
];

const arrOfObj = [
  {"name": "Manohar"},
  ["tow", 2],
  ["three", 3],
];


var mapofArr = new Map(arrOfObj)
console.log(mapofArr)