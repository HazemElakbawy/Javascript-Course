const liveList = document.getElementsByTagName("li"); // live NodeList
const staticList = document.querySelectorAll("li"); //  static NodeList
const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "item 05 (createElement + append)";
ul.append(newLi);

console.log(liveList);
console.log(staticList);
