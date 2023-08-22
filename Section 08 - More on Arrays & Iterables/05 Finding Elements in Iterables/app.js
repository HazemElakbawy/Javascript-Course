const arr = [10, 1, 3, 52, 1, 20, 3];
console.log(arr);

// * indexOf()
console.log("value :1 -->", arr.indexOf(1));
console.log("value :3 -->", arr.indexOf(3));

// * lastIndexOf()
console.log("value :1 -->", arr.lastIndexOf(1));
console.log("value :3 -->", arr.lastIndexOf(3));

// * find()

const personData = [
  { name: "Hazem", age: 20 },
  { name: "Ali", age: 19 },
  { name: "Hazem", age: 22 },
];

console.log(
  personData.find((person) => {
    return person.name === "Hazem" && person.age === 22;
  })
);

const numbers = [1, 3, 5, 20, 4, 7];
console.log(numbers.find((number) => number % 2 == 0)); // value :20

// * findIndex()
console.log(numbers.findIndex((number) => number > 3)); // index :2
