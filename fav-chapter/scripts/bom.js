const button = document.querySelector("button");
const inputField = document.querySelector("#favchap");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
	const inputValue = inputField.value;
	const listItem = document.createElement("li");
	listItem.textContent = inputValue;
	list.appendChild(listItem);
});
