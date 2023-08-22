const numbers = [1, 5, 4, 3];
console.log(numbers);

// * Push Method - optional (return New Length)
const newLength = numbers.push(2);
console.log("PUSH", numbers, `Length: ${newLength}`);

// * Pop Method - optional (return popped Element)
const poppedElement = numbers.pop(2);
console.log("POP", numbers, `Removed Element: ${poppedElement}`);

// * Unshift Method -> Add elements at beginning (Shift All Elements RIGHT)
// * optional (return New Length)
numbers.unshift("Unshift");
console.log("Unshift", numbers, `Length: ${newLength}`);

// * Shift Method -> Remove First Element (Shift All Elements LEFT)
// * optional (return popped Element)
numbers.shift();
console.log("Shift", numbers, `Removed Element: ${poppedElement}`);

// * Splice Method -> Add , Remove , Replace
// * Splice(index) -> remove all elements from index to end
// * Splice(index,len) -> remove (len) elements from index
// * Splice(index,len,Content) -> replace (len) elements from (index) with (Content)
// * Splice(index,0) -> replace (len) elements from (index) with (Content)

// numbers.splice(0); // []

numbers.splice(0, 0, "Test"); // (5) ['TEST', 1, 5, 4, 3]
console.log(numbers);

numbers.splice(2, 0, "AnotherTest"); // (5) [1, 'TEST', 5, 4, 3]
console.log(numbers);
