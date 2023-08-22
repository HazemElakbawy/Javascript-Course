const arr = [1, 2, 3, 4];

// * arr.includes() -> return (boolean)
console.log(arr.includes(3));

// * arr.indexOf() -> return (index) if found otherwise (-1)
console.log(arr.indexOf(3) !== -1);

// * arr.find() -> return (element) if found otherwise (undefined)
console.log(arr.find((num) => num == 3) !== undefined);

// * arr.findIndex() -> return (index of element) if found otherwise (-1)
console.log(arr.findIndex((num) => num == 3) !== -1);
