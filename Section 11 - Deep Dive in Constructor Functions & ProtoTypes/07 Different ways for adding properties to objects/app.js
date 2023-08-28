// ! Different Ways to Add Properties to Objects in JavaScript

// * 1. Dot Notation

const person = {
  name: "Hazem",
  age: 20,
};

person.country = "Egypt";

console.log(person); // {name: "Hazem", age: 20, country: "Egypt"}

// =====================================================================

// * 2. Bracket Notation

const person2 = {
  name: "Hazem",
  age: 20,
};

person2["country"] = "Egypt";

console.log(person2); // {name: "Hazem", age: 20, country: "Egypt"}

// =====================================================================

// ! 3. Object.defineProperty()

const person3 = {
  name: "Hazem",
  age: 20,
};

Object.defineProperty(person3, "country", {
  value: "Egypt",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person3); // {name: "Hazem", age: 20, country: "Egypt"}

// =====================================================================

// ! 4. Object.defineProperties()

const person4 = {
  name: "Hazem",
  age: 20,
};

Object.defineProperties(person4, {
  country: {
    value: "Egypt",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  city: {
    value: "Cairo",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(person4); // {name: "Hazem", age: 20, country: "Egypt", city: "Cairo"}

// =====================================================================

// ! 5. Object.assign()

const person5 = {
  name: "Hazem",
  age: 20,
};

Object.assign(person5, {
  country: "Egypt",
  city: "Cairo",
});

console.log(person5); // {name: "Hazem", age: 20, country: "Egypt", city: "Cairo"}

// =====================================================================

// * 6. Spread Operator

const person6 = {
  name: "Hazem",
  age: 20,
};

const person7 = {
  ...person6,
  country: "Egypt",
  city: "Cairo",
};

console.log(person7); // {name: "Hazem", age: 20, country: "Egypt", city: "Cairo"}

// =====================================================================

// ! 7. Object.create()

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
