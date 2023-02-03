const button = document.querySelector("button");
const inputField = document.querySelector("#favchap");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
	const inputValue = inputField.value;
	const listItem = document.createElement("li");
	listItem.textContent = inputValue;
	
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function() {
	  list.removeChild(listItem);
	});
	listItem.appendChild(deleteButton);
  
	  list.appendChild(listItem);
});
