async function fetchData() {
  try {
    const response = await fetch('../JSON/data.json');
    const data = await response.json();
    console.table(data.partners);
    displayPartners(data.partners);
  } catch (error) {
    console.error(error);
  }
}
const displayPartners = (partners) => {
  const main = document.querySelector(".mainly")
  partners.forEach(partner => {
    let articles = document.querySelector(".parteners-grid")
    main.appendChild(articles);
    let box = document.createElement("section");
    articles.appendChild(box);
    box.classList.add("partner-box");

    let img = document.createElement("img");
    img.setAttribute('src', partner.image);
    box.appendChild(img);
    img.classList.add("pics");

    let location = document.createElement("p");
    location.textContent = partner.address;
    box.appendChild(location);
    location.classList.add("blak-txt");

    let phoneNum = document.createElement("p");
    phoneNum.textContent = partner.phone;
    box.appendChild(phoneNum);
    phoneNum.classList.add("blak-txt")

    let webSite = document.createElement("a");
    webSite.textContent = partner.url;
    box.appendChild(webSite);
    webSite.setAttribute("href", partner.url)
    webSite.classList.add("a-txt")
  });
}
fetchData();

/***********************************************************************/

const gridbutton = document.querySelector("#tabulated");
const listbutton = document.querySelector("#listed");
const display = document.querySelector(".parteners-grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("tabulated");
	display.classList.remove("listed");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("listed");
	display.classList.remove("tabulated");
  display.classList.remove("parteners-grid")
}
