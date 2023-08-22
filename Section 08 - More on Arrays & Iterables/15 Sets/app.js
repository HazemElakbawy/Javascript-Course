// * Creating Sets
const IDS = new Set([1, 2, 3, 1, 2, 3]);

console.log(IDS); // * {1, 2, 3}

// * Accessing Set Elements
for (const id of IDS) {
  console.log(id); // * 1 2 3
}

for (const id of IDS.values()) {
  console.log(id); // * 1 2 3
}

for (const entry of IDS.entries()) {
  console.log(entry, "||", entry[0]); // * [1, 1] 1
}

// * Adding Set Elements
IDS.add(1000);
console.log(IDS); // * {1, 2, 3, 1000}

// * Checking if an Element Exists

console.log(IDS.has(1)); // * true
console.log(IDS.has(14)); // * false

// * Deleting Set Elements

IDS.delete(1000);
IDS.delete(999999); // * does not affect the set
console.log(IDS); // * {1, 2, 3}

// * Clearing Sets

IDS.clear();
console.log(IDS); // * {}
