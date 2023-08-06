/* GetElementById */
const headingVar = document.getElementById("primaryHeading"); // Get the element with id primaryHeading
headingVar.textContent = "Hello Hazem";

/* GetElementByClassName */
const ulVar = document.getElementsByClassName("ul-class");
const firstLiVar = document.getElementsByClassName("FirstLi"); // Get Collection of all li elements with class FirstLi
firstLiVar[0].textContent = "First Item";

/* GetElementByTagName */
const liVar = document.getElementsByTagName("li"); // Get a Collection of all li elements
liVar[1].textContent = "Second Item";

/* QuerySelector */
const headerVar = document.querySelector("#primaryHeading"); // Get the element with id primaryHeading
headerVar.textContent = "Hello Again Hazem!";

const liVar2 = document.querySelector(".FirstLi"); // Get the first element with class FirstLi
liVar2.textContent = "First Item Again!!";

/* QuerySelectorAll */
const liVar3 = document.querySelectorAll(".item"); // Get a Collection of all elements with class item
liVar3[1].textContent = "Third Item";
