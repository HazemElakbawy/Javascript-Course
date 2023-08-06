function calculator(operation, a, b) {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }

  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      return "Operation not supported";
  }
}

console.log(calculator("add", 2, 3)); // 5
console.log(calculator("subtract", 2, 3)); // -1
console.log(calculator("multiply", 2, 3)); // 6
console.log(calculator("divide", 2, 3)); // 0.6666666666666666
