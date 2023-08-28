// ! Working with Prototypes

const person = {
  name: "Hazem",
  age: 20,
};

console.log(person); // {name: "Hazem", age: 20}
console.log(person.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ,…}
console.log(person.__proto__ === Object.prototype); // * true

// ==================================================================================

// ! 1. Object.setPrototypeOf()

console.log(Object.getPrototypeOf(person)); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ,…}
console.log(Object.getPrototypeOf(person) === Object.prototype); // * true

// * Note that [ Object.getPrototypeOf() ] is more recommended than [ __proto__ ]

// ==================================================================================

// ! 2. Object.setPrototypeOf()

Object.setPrototypeOf(person, {
  greet() {
    console.log(`Hi I am ${this.name} , I am ${this.age} years old`);
  },
}); // ! This will (replace) the prototype of the object with the new one

console.log(person); // {name: "Hazem", age: 20}
console.log(Object.getPrototypeOf(person)); // * {greet: ƒ}

Object.setPrototypeOf(person, {
  ...Object.getPrototypeOf(person),
  printAge() {
    console.log(this.age);
  },
}); // ! This will (add) the new prototype to the old one

console.log(person); // {name: "Hazem", age: 20}
console.log(Object.getPrototypeOf(person)); // * {greet: ƒ, printAge: ƒ}

// ==================================================================================

// ! 3. Object.create()

const student = Object.create({
  printHelloWorld() {
    console.log("Hello World");
  },
}); // ! This will create an (empty object) with the prototype of Object.prototype

console.log(student); // ! {}
console.log(student.__proto__); // ! {printHelloWorld: ƒ, constructor: ƒ}

const anotherStudent = Object.create(
  {
    greet() {
      console.log(`Hi I am ${this.name} , I am ${this.age} years old`);
    },
  },
  {
    name: {
      value: "Hazem",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    age: {
      value: 20,
      enumerable: true,
      writable: true,
      configurable: true,
    },
  }
);

console.log(anotherStudent); // ! {name: "Hazem", age: 20}
anotherStudent.greet(); // ! Hi I am Hazem , I am 20 years old

// ==================================================================================
