const arr = [1, 2, 3, 4, 5];

const evens = [];
const odds = [];

arr.forEach((number, index) => {
  number & 1 ? odds.push(number) : evens.push(number);
  if (number == 3) return;
});

// * works as well
// arr.forEach((number, index) => {
//   arr[index] & 1 ? odds.push(arr[index]) : evens.push(arr[index]);
//   if (arr[index] == 3) return;
// });

console.log(evens);
console.log(odds);
