const button = document.querySelector("button");
const inputField = document.querySelector("#favchap");
const list = document.querySelector("#list");
const noInput = document.querySelector("#noInput");
const output = document.querySelector(".output");

button.addEventListener("click", function () {
const inputValue = inputField.value;
if (!inputValue) {
noInput.textContent = "Please enter a valid favorite chapter.";
return;
}

noInput.textContent = "";
const listItem = document.createElement("li");
listItem.textContent = inputValue;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", function() {
list.removeChild(listItem);
if (list.childNodes.length === 0) {
output.style.border = "none";
}
});
listItem.appendChild(deleteButton);

list.appendChild(listItem);
output.style.border = "1.5px solid black";
output.style.width = "60%";
output.style.margin = "0 auto";
});