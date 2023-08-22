const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

list.classList.add("make-blue");
list.classList.add("make-large");

listItems[0].classList.add("make-italic");
listItems[2].classList.add("make-italic");

// ====================================================================

list.className = "make-red";
list.className += " make-large";
list.className += " make-italic";
