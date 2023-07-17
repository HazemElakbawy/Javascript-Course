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

function doMath(op) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;

  if (op === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (op === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (op === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (enteredNumber === 0) {
    alert("You can't divide by 0");
    return;
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  currentOperation(mathOperator, initialResult, enteredNumber);
  createObject(op, initialResult, enteredNumber, currentResult);
}

function add() {
  doMath("ADD");
}

function subtract() {
  doMath("SUBTRACT");
}

function multiply() {
  doMath("MULTIPLY");
}

function divide() {
  doMath("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
