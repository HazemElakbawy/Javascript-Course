const fullName = ["Hazem", "Elakbawy", 20, "Engineer", "Muslim"];

const firstName = fullName[0];
const lastName = fullName[1];

console.log(firstName, lastName); // * Hazem Elakbawy

const [anotherFirstName, anotherLastName, ...otherInformation] = fullName;

console.log(anotherFirstName, anotherLastName); // * Hazem Elakbawy
console.log(otherInformation); // * [20, 'Engineer', 'Muslim']
