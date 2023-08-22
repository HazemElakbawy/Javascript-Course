// * =
const numbers = [1, 2, 3];
console.log(numbers);

// * Array - new Array
const anotherNumbers = Array(10, 20, 30);
// const anotherNumbers = new Array(10, 20, 30); // same
// const anotherNumbers = Array(10); // ! array of (size :10) empty values
console.log(anotherNumbers);

// * Array.of()
const yetAnotherNumbers = Array.of(100, 200, 300);
// const yetAnotherNumbers = Array.of(10); // ! array of (size :1) of value 10
console.log(yetAnotherNumbers);

// * Array.from() -> convert array-like object to array object
const footballTeams = document.querySelectorAll("li");
console.log(footballTeams); // ! array-like [Node List]

const convertedFootballTeams = Array.from(footballTeams);
console.log(convertedFootballTeams); // ! array
