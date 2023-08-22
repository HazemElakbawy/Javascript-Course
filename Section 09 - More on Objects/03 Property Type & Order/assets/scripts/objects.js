const movieList = document.getElementById("movie-list");

movieList.style.display = "block";
movieList.style["background-color"] = "red";
// movieList.style["backgroundColor"] = "blue"; // also works

/**
 * * Property Types & Property Order

 * * Property Types can be also strings, numbers and symbols.
 * * Property Order is not guaranteed in JavaScript.
 * ! except for arrays, the order is guaranteed. (ascending order)
 * * In Console :
 * ! Properties are sorted by their keys (ascending) in the drop-down list.
 * ! But when you log the object itself, the order is not guaranteed.
 */

const person = {
  name: "Hazem",
  age: 20,
  hobbies: ["Reading", "Football", "Chess"],
  1: "Hello",
  0: "World",
};

console.log(person);
