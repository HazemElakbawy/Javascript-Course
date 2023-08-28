function Person() {
  this.name = "Hazem";
  this.age = 20;
  this.greet = function () {
    console.log(`Hi I am ${this.name} , I am ${this.age} years old`);
  };
}

const personOne = Person(); // * Function

console.log(personOne); // undefined
personOne.greet(); // Uncaught TypeError: Cannot read property 'greet' of undefined

const personTwo = new Person(); // * Constructor function
console.log(personTwo); // Person {name: "Hazem", age: 20, greet: ƒ}
personTwo.greet(); // Hi I am Hazem , I am 20 years old

/*
  ! new keyword:-
    * Creates a new empty object {}
    * Sets the value of this to be the new empty object
    * Add all the properties and methods to the new object
    * Returns the new object
*/

// * Classes is just a syntactic sugar for constructor functions
