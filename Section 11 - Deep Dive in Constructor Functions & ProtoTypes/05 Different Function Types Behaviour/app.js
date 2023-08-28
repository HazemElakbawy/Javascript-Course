// ==================================================================================

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  printName() {
    console.log(this.name);
  }
}

const p = new Person("Max", 20, "Developer");

console.log(p); // * Person {name: "Max", age: 20, job: "Developer"}

/*
 * Note that printName() method is not in the object itself
 * It is in __proto__ of the object
 */

console.log(p.__proto__); // * {constructor: ƒ, printName: ƒ}

// ==================================================================================

class AnotherPerson {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  printName = function () {
    console.log(this.name);
  };
}

const ap = new AnotherPerson("Max", 20, "Developer");

console.log(ap); // * AnotherPerson {name: "Max", age: 20, job: "Developer", printName: ƒ}

/*
 * Note that printName() method is (in the object) itself
 * It is not in __proto__ of the object
 */

console.log(ap.__proto__); // * {constructor: ƒ}

// ==================================================================================

class yetAnotherPerson {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  printName = () => {
    console.log(this.name);
  };
}

const yap = new yetAnotherPerson("Max", 20, "Developer");

console.log(yap); // * yetAnotherPerson {name: "Max", age: 20, job: "Developer", printName: ƒ}

/*
 * Note that printName() method is (in the object) itself
 * It is not in __proto__ of the object
 * printName() method is an arrow function
 */

console.log(yap.__proto__); // * {constructor: ƒ}
