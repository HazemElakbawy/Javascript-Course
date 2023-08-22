const person = {
  name: "Hazem",
  age: 20,
  hobbies: ["Reading", "Football", "Chess"],
};

console.log(person);

// * Adding / Overwriting Properties
person.isAdmin = true; // if found -> overwritten , OtherWise -> created
console.log("Adding", person);

// * Deleting Properties
delete person.age; // delete the property
console.log("delete", person);

person.age = 20;
person.age = undefined; // not recommended (doesn't delete the property)
console.log("undefined", person);
