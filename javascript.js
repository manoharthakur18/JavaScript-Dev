// if (true) {
//   var king = "shayam";
//   if (true) {
//     var king = "Ram";
//     //let king = "Ram"
//     console.log(king);
//   }
// }
// console.log("Hello" + king);

// const arr = ["Ram", "Shayam", "Ghanshayam", "Bharat"];

// console.log(arr.shift())
// console.log(arr)

// arr.unshift("Sonam")
// console.log(arr)

// console.log("deleted element: " + arr.pop());
// console.log(arr);

// arr.push("Lakshman");
// console.log(arr);

// arr.splice(2, 1, "placed");
// console.log(arr);

// const sayNamaste = () => console.log("Namaste");
// arr.forEach(sayNamaste);
// arr.forEach((name, index) => console.log(`${index} Namaste ${name}`));

// let myTodos = {
//   day: "Monday",
//   meetings: 0,
//   meetingDone: 0,
//   addMeetings: function () {   // we cannot use arrow funtion here
//     console.log(this.day);
//   },
// };
// myTodos.addMeetings()

// console.log(2 === 2.0);

// let myVar = {};
// let myVar2 = {};

// console.log(myVar === myVar2);

const persons = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
  {
    firstName: "Raman",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
  {
    firstName: "Pavan",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
];

// const index = persons.findIndex((person, index) => {
//   console.log(person, index);
//   return person.firstName == "Raman";
// });

// console.log(index);

const findPerson = (allPersons, firstName) => {
  const index = allPersons.findIndex((person, index) => {
    return person.firstName.toLowerCase() === firstName.toLowerCase();
  });
  return allPersons[index];
};

console.log(findPerson(persons, "Pavan"));

//This is for Redux
// const func = () => ({ key: "value" });
