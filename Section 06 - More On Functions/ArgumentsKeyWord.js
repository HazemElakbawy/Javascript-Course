function sum() {
  let totalSum = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalSum += arguments[i];
  }
  return totalSum;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 6)); // 16
// ========================================================

const sum2 = () => {
  let totalSum = 0;
  for (let i = 0; i < sum2.arguments.length; i++) {
    totalSum += sum2.arguments[i];
  }
  return totalSum;
};

console.log(sum2(1, 2, 3)); // 6
console.log(sum2(1, 2, 3, 4, 6)); // 16
