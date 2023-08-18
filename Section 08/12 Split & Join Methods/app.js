// join , split

const person = "hazem;Engineer;Muslim";
const personData = person.split(";");
console.log(personData);

// ===================================

const Name = ["Hazem", "Magdy", "Mohammed", "Elakbawy"];
const fullName = Name.join();
const anotherFullName = Name.join(" ");

console.log(fullName); // * Hazem, Magdy, Mohammed, Elakbawy
console.log(anotherFullName); // * Hazem Magdy Mohammed Elakbawy
