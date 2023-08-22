const numbers = [1, 2, 3, 4, 5, 6, 7, 11];

const checkPrime = (number) => {
  if (number == 1 || number % 2 == 0) return false;
  for (let i = 3; i * i <= number; i += 2) if (number % i == 0) return false;
  return true;
};

// ============================================================
const primes = [];
numbers.map((num, index) => {
  if (checkPrime(num)) primes.push({ idx: index, value: num });
});

console.log(primes); // * [ {2,3} , {4,5} , {6,7} , {7,11} ]
// ============================================================

const anotherPrimes = numbers.map((num, index) => {
  if (checkPrime(num)) return { index: index, value: num };
});

console.log(anotherPrimes);
// * [undefined, undefined, {2,3}, undefined, {4,5}, undefined, {6,7}, {7,11}]
