const persons = [
  { name: "Hazem", age: 20 },
  { name: "Ali", age: 22 },
  { name: "Mohammed", age: 26 },
];

const copiedPersons = [...persons];

persons.push({ name: "Ahmed", age: 18 }); // does not affect copiedPersons

console.log("Persons", persons);
console.log("CopiedPersons", copiedPersons);

persons[0].age = 21; // does affect copiedPersons

console.log("Persons", persons);
console.log("CopiedPersons", copiedPersons);

const anotherCopiedPersons = [...persons].map((person) => ({
  name: person.name,
  age: person.age,
}));

persons[0].age = 55; // does not affect anotherCopiedPersons
console.log("Persons", persons);
console.log("anotherCopiedPersons", anotherCopiedPersons);
