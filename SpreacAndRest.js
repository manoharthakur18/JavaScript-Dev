
//spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
console.log("obj2 is now ",obj2)
// obj2 is now { a: 1, b: 2, c: 3, d: 4 }

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log("array2 is now ",array2)
// array2 is now [1, 2, 3, 4, 5]


//rest operator
function sum(...numbers) {
    console.log(numbers)
    console.log("first")
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10
  