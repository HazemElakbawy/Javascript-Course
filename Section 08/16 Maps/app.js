const persons = new Map([
  [1, "Hazem"],
  [2, "Ali"],
  [3, "Mohammed"],
]);

console.log(persons); // * {1 => "Hazem", 2 => "Ali", 3 => "Mohammed"}

console.log(persons.get(1)); // * Hazem
console.log(persons.get(3)); // * Mohammed
console.log(persons.get("TEST")); // * undefined

// * Accessing Map Elements

console.log(persons.entries()); // * MapIterator {[1, "Hazem"], [2, "Ali"], ["lastName", "Mohammed"]}
for (const [key, value] of persons.entries()) {
  console.log(key, value);
}

console.log(persons.keys()); // * MapIterator {1, 2, "lastName"}
for (const key of persons.keys()) {
  console.log(key);
}

console.log(persons.values()); // * MapIterator {"Hazem", "Ali", "Mohammed"}
for (const value of persons.values()) {
  console.log(value);
}

// * Adding Map Elements

persons.set(4, "Ahmed");
console.log(persons); // * {1 => "Hazem", 2 => "Ali", 3 => "Mohammed", 4 => "Ahmed"}

// * Checking if an Element Exists

console.log(persons.has(1)); // * true

// * Deleting Map Elements

persons.delete(4);
console.log(persons); // * {1 => "Hazem", 2 => "Ali", 3 => "Mohammed"}

// * Clearing Maps

persons.clear();
console.log(persons); // * {}
