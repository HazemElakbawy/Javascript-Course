function sum(...numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}

console.log(`Total Sum: ${sum(1, 2, 3)}`); // 6
console.log(`Total Sum: ${sum(1, 2, 3, 4)}`); // 10
// =======================================================

const multiplier = (...numbers) => {
  let totalMultiply = 1;
  for (let i = 0; i < numbers.length; i++) {
    totalMultiply *= numbers[i];
  }
  return totalMultiply;
};
console.log(`Total Multiplication: ${multiplier(1, 2, 3)}`); // 6
console.log(`Total Multiplication: ${multiplier(1, 2, 3, 4)}`); // 24
