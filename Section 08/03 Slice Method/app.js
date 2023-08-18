const numbers = [1, 2, 3, 4, 5];
const copiedNumbers = numbers;

console.log("numbers", numbers);
console.log("copiedNumbers", copiedNumbers);
console.log("=========");

// * array.slice() -> return new array (not referenced)
const anotherCopiedNumbers = numbers.slice();

numbers.push(2463);

console.log("copiedNumbers", copiedNumbers);
console.log("copiedWithSlice", anotherCopiedNumbers);

console.log("=========");

// * array.slice(index)
console.log(numbers.slice(1)); // (5) [2, 3, 4, 5, 2463]

// * array.slice(start,end)  [positive]
console.log(numbers.slice(0, 2)); // (2) [1, 2]
console.log(numbers.slice(2, 4)); // (2) [3, 4]

// * array.slice(start,end) [negative]
console.log(numbers.slice(-3, -1)); // (2) [4, 5]

// * array.slice(start,end) [start > end]
console.log(numbers.slice(2, 1)); // []

// * array.slice(start,end) positive & negative
console.log(numbers.slice(-2, 1)); // ! []  (not rounded)
console.log(numbers.slice(2, -1)); // (3) [3, 4, 5]
