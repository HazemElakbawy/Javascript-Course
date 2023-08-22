const arr = [1, 20, 3, 55, 0, 11, 500, 250, 100];
let sortedArr = [];

// * Lexicographically Order
sortedArr = [...arr].sort();
console.log(sortedArr); // [0, 1, 100, 11, 20, 250, 3, 500, 55]

// * Ascending Order
sortedArr = [...arr].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
console.log(sortedArr); // [0, 1, 3, 11, 20, 55, 100, 250, 500];

// * Ascending Order (simpler)
sortedArr = [...arr].sort((a, b) => a - b);
console.log(sortedArr); // [0, 1, 3, 11, 20, 55, 100, 250, 500];

// * Descending Order
sortedArr = [...arr].sort((a, b) => b - a);

console.log(sortedArr); // [500, 250, 100, 55, 20, 11, 3, 1, 0];

// =======================
const numbers = [1, 2, 3, 5];
console.log("======");
console.log(numbers);
console.log(numbers.reverse());
