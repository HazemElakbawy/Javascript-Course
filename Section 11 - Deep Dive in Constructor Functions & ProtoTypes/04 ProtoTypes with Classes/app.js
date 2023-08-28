class Person {
  constructor(name) {
    this.name = name;
  }
  HelloPerson() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  HelloStudent() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const student1 = new Student("Ali", "1st Grade");

console.log(student1); // Student {name: "Ali", level: "1st Grade"} // * Child Class
console.log(student1.__proto__); //  Person {constructor: ƒ, HelloStudent: ƒ} // ! No HelloPerson() method
console.log(student1.__proto__.__proto__); // {constructor: ƒ, HelloPerson: ƒ}  // ! Has HelloPerson() method

// ====================================================================================================

const student2 = new student1.__proto__.constructor("Ahmed", "2nd Grade");
console.log(student2); // Student {name: "Ahmed", level: "2nd Grade"}

console.log(student2.__proto__); // Person {constructor: ƒ, greet: ƒ} // * Parent Class
console.log(student2.__proto__.__proto__); // {constructor: ƒ, greet: ƒ} // * GrandParent Class
console.log(student2.__proto__.__proto__.__proto__ === Object.prototype); // true

console.log(student1.__proto__ === student2.__proto__); // true // * Both are from the same Parent Class
console.log(student1.__proto__.__proto__ === student2.__proto__.__proto__); // true
