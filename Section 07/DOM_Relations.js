// ! Parent - Child Relationships

const ul = document.querySelector("ul");
const liList = ul.children; // returns HTMLCollection of li elements
const liList2 = ul.childNodes; // returns NodeList of all child nodes
const ul2 = liList[0].parentElement; // returns ul element
const ul3 = liList[0].parentNode; // returns ul element

/*
 * difference between parentElement and parentNode
 * parentElement returns null if the parent node is not an element node
 * parentNode returns the parent node regardless of the node type
 * e.g. if the parent node is a text node, parentNode returns the parent node
 */

console.log("===== Parent - Child Relationships =====");
console.log(ul2);
console.log(ul3);
console.log(liList);
console.log(liList2);

// ! First and Last Child

const ul4 = document.querySelector("ul");

const firstLiElement = ul4.firstElementChild; // returns the first child element
const firstLiNode = ul4.firstChild; // returns the first child node

const lastLiElement = ul4.lastElementChild; // returns the last child element
const lastLiNode = ul4.lastChild; // returns the last child node

console.log("===== Ancestors and Descendants =====");
console.log(firstLiElement);
console.log(firstLiNode);
console.log(lastLiElement);
console.log(lastLiNode);

// ! Sibling Relationships

const firstLi = document.querySelector("li");
const secondLi = firstLi.nextElementSibling; // returns the next sibling element
const secondLi2 = firstLi.nextSibling.nextSibling; // returns the next sibling node
const firstLi2 = secondLi.previousElementSibling; // returns the previous sibling element
const firstLi3 = secondLi.previousSibling.previousSibling; // returns the previous sibling node

console.log("===== Siblings =====");
console.log(firstLi);
console.log(firstLi2);
console.log(firstLi3);
console.log(secondLi);
console.log(secondLi2);

// ! Ancestors and Descendants

const html3 = ul4.closest("html"); // returns the closest ancestor element that matches the selector
