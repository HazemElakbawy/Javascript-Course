// ! Different Ways to Create Objects in JavaScript

// * 1. Object Literal

const person = {
  name: "Hazem",
  age: 20,
  greet() {
    console.log(`Hi I am ${this.name} , I am ${this.age} years old`);
  },
};

console.log(person); // {name: "Hazem", age: 20, greet: ƒ}

// * 2. Constructor Function

function Person() {
  this.name = "Hazem";
  this.age = 20;
  this.greet = function () {
    console.log(`Hi I am ${this.name} , I am ${this.age} years old`);
  };
}

const p = new Person();

console.log(p); // Person {name: "Hazem", age: 20, greet: ƒ}

// ! 3. Object.create()

const human = {
  printAge() {
    console.log(this.age);
  },
};

const Max = Object.create(human, {
  name: { value: "Max" },
  age: { value: 20 },
});

console.log(Max); // {name: "Max", age: 20}
console.log(Max.__proto__); // {printAge: ƒ, constructor: ƒ}
console.log(Max.__proto__ === human); // true

// * 4. ES6 Classes

class Human {
  constructor() {
    this.name = "Max";
    this.age = 20;
  }

  printAge() {
    console.log(this.age);
  }
}

const max = new Human();

console.log(max); // Human {name: "Max", age: 20}
max.printAge(); // 20
