/**
 * * Property Types & Property Order

 * * Property Types can be also strings, numbers and symbols.
 * * Property Order is not guaranteed in JavaScript.
 * ! except for arrays, the order is guaranteed. (ascending order)
 * * In Console :
 * ! Properties are sorted by their keys (ascending) in the drop-down list.
 * ! But when you log the object itself, the order is not guaranteed.
 */

const person = {
  name: "Hazem",
  age: 20,
  hobbies: ["Reading", "Football", "Chess"],
  1: "Hello",
  0: "World",
  1.4: "Hi",
};

// ! Property of type number must be positive value
console.log(person);
console.log(person[0]);
// console.log(person["0"]); // also works
console.log(person[1]);
// console.log(person["1"]); // also works
console.log(person[1.4]);
// console.log(person["1.4"]); // also works
