const person = { personName: "Ali Ahmed", age: 25 };

const { personName, age } = person;

console.log(personName); // Ali Ahmed
console.log(age); // 25

// * Using Rest Operator to get the remaining properties
const detailedPerson = {
  detailedPersonName: "Fahad Ali",
  age: 25,
  address: { city: "Karachi", country: "Pakistan" },
};

const { detailedPersonName, ...otherProperties } = detailedPerson;

console.log(detailedPersonName); // Ali Ahmed
console.log(otherProperties); // { age: 25, address: { city: 'Karachi', country: 'Pakistan' } }
