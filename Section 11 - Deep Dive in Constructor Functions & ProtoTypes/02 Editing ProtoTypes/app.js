function Person() {
  this.name = "Hazem";
  this.age = 20;
  this.greet = function () {
    console.log(`Hi I am ${this.name} , I am ${this.age} years old`);
  };
}

const p = new Person();

console.log(p); // Person {name: "Hazem", age: 20, greet: ƒ}

console.log(p.toString()); // [object Object] // ! Inherited from Object.prototype
console.log(p.tooo); // undefined // ! Not inherited from Object.prototype

/* 
  ! Inheritance in JavaScript is done through the prototype chain
  * (1) the engine will look for the property in the object itself
  * (2) if not found, it will look for it in the prototype (constructor.prototype)
  * (3) if not found, it will look for it in the prototype of the prototype (constructor.prototype.prototype)
  * (4) and so on until it reaches the end of the prototype chain (Object.prototype)
  * (5) if not found, it will return (undefined)
*/

// =========================================================================================

function sayHello() {
  return "Hello";
}

console.dir(sayHello); // f sayHello() // ! Inherited from Function.prototype
console.log(sayHello.prototype); // {constructor: ƒ} // ! Inherited from Object.prototype
console.log(sayHello.__proto__); // ƒ () { [native code] } // ! Inherited from Function.prototype.prototype

console.log(sayHello.prototype.__proto__ === sayHello.prototype); // true

// =========================================================================================

/* 
  ! Functions in javascript have a (prototype) property and an (__proto__) property
  * (prototype) property only exists in (functions)
  * (prototype) property is used to create the prototype of the objects created from this function
  * (__proto__) property is used to create the prototype chain of the function itself
  * prototype of the function === the prototype of the objects created from this function
*/

function Human() {
  this.name = "Max";
  this.age = 20;
}

// Human.prototype = {
//   // * this will override the default prototype of the function
//   printAge() {
//     console.log(this.age);
//   },
// };

Human.prototype.printAge = function () {
  // * this will not override the default prototype of the function
  console.log(this.age);
};

const Max = new Human();

console.log(Max); // Human {name: "Max", age: 20}
Max.printAge(); // 20
