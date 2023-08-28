function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

console.dir(Person); // * f Person(name, age, job)

// console.log(Person.prototype); // * {constructor: ƒ}
// console.log(Person.prototype.constructor); // * f Person(name, age, job) [native code]
// console.log(Person.prototype.__proto__); // * {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ,…}

/*
 * Person.prototype is an object contains the (constructor) property and the (__proto__) property
 * constructor property is a reference to the function itself
 * (__proto__) property is a reference to Object.prototype
 */

console.log(Person.prototype.constructor === Person); // * true
console.log(Person.prototype.__proto__ === Object.prototype); // * true

Person.prototype.printAge = function () {
  console.log(this.age);
};

const p = new Person("Max", 20, "Developer");

console.log(p); // * Person {name: "Max", age: 20, job: "Developer"}
p.printAge(); // * 20

console.log(p.__proto__); // * {constructor: ƒ, printAge: ƒ}
console.log(p.prototype); // * undefined
console.log(p.__proto__ === Person.prototype); // * true
console.log(p.__proto__.__proto__ === Object.prototype); // * true
