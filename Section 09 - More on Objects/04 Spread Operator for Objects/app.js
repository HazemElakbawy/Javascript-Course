const personOne = {
  name: "Hazem",
  age: 20,
  hobbies: ["reading", "football", "chess"],
};

const pesronTwo = { ...personOne };
const personThree = { ...personOne, hobbies: [...personOne.hobbies] };

console.log("PersonOne", personOne);
console.log("PersonTwo", pesronTwo);
console.log("PersonThree", personThree);

console.log("============= Adding new Property =============");
personOne.country = "Egypt";

console.log("PersonOne", personOne); // changed
console.log("PersonTwo", pesronTwo); // not changed
console.log("PersonThree", personThree); // not changed

console.log("============= Adding new Hobby =============");
personOne.hobbies.push("swimming");

console.log("PersonOne", personOne); // changed
console.log("PersonTwo", pesronTwo); // changed
console.log("PersonThree", personThree); // not changed

console.log("============= Adding new Property =============");
const personFour = Object.assign({}, personOne);
personOne.hobbies.push("video games");
console.log("PersonFour", personFour); // changed
