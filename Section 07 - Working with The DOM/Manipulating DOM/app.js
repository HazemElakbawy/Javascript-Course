const ul = document.querySelector("ul");

// ul.innerHTML = "<li>Item 01 (reset)</li>";
// ul.innerHTML = ul.innerHTML + "<li>Item 03 (rerendered)</li>";

ul.insertAdjacentHTML("beforeend", "<li>Item 04 (adjacent)</li>");

const newLi = document.createElement("li");
newLi.textContent = "item 05 (createElement + append)";
// ul.appendChild(newLi);
// ul.append(newLi);
// ul.append("random text", " other text", newLi);
// ul.prepend(newLi); // insertBefore

// ul.lastElementChild.before(newLi);
// ul.lastElementChild.after(newLi);
// ul.replaceChild(newLi, ul.firstElementChild);

const newLi2 = newLi.cloneNode(false); // false = shallow copy , true = deep copy
newLi2.textContent = "item 06 (cloneNode)";
ul.append(newLi, newLi2);
