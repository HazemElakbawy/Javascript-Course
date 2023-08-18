const numbers = [1, 2, 3, 4, 5, 11, 12];

console.log(numbers.filter((x) => x % 2 == 0)); // [2, 4, 12]
console.log(numbers.filter((x) => x > 5)); // [11, 12]
console.log(numbers); // [1, 2, 3, 4, 5, 11, 12]

// ===================================
// arr.reduce((prevValue,currValue,currIndex,iterable) => {LOGIC},initialValue)

const reducedValue = numbers.reduce(
  (prevValue, currValue, currIndex, numbers) => {
    return prevValue + currValue;
  },
  0
);

console.log(reducedValue);
