const defaultResult = 0;
let currentResult = defaultResult;
let arr = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function currentOperation(operator, firstOperand, secondOperand) {
  const description = ` ${firstOperand} ${operator} ${secondOperand} `;
  outputResult(currentResult, description);
}

function createObject(op, prev, entered, res) {
  const currentObject = {
    operation: op,
    previous: prev,
    enteredNumber: entered,
    result: res,
  };
  arr.push(currentObject);
  console.log(arr);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  currentOperation("+", initialResult, enteredNumber);
  createObject("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  currentOperation("-", initialResult, enteredNumber);
  createObject("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  currentOperation("*", initialResult, enteredNumber);
  createObject("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  currentOperation("/", initialResult, enteredNumber);
  createObject("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
