// * Checking Existence of a Property in an Object

const person = { name: "John", age: 20 };

console.log("name" in person); // true
console.log("age" in person); // true
console.log("city" in person); // false

console.log(person); // { name: 'John', age: 20 }

// * Checking if a Property is Undefined (not recommended)
console.log(person.name !== undefined); // true
console.log(person.age !== undefined); // true
console.log(person.city !== undefined); // ! false, does not create a new property

console.log(person); // ! { name: 'John', age: 20 }
