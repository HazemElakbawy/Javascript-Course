// * WeakMap
const persons = new WeakMap();
let person = { name: "Hazem", age: 20 };
persons.set(person, "Extra Information");
console.log(persons);

person = null;
console.log(persons); // will be deleted automatically by garbage collector

// * WeakSet
const personData = new WeakSet();
person = { name: "Hazem", age: 20 };
personData.add(person);
console.log(personData);

person = null;
console.log(personData); // will be deleted automatically by garbage collector
