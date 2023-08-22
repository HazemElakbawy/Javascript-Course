const multiply = (a, b) => a * b;

const multiplyByTwo = multiply.bind(null, 2); // null is the context, 2 is the first argument

console.log(multiplyByTwo(4)); // 8
console.log(multiplyByTwo(5)); // 10
