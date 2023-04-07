const navigateBtn = document.querySelector(".nav_toggle");
const navigate = document.querySelector(".nav-menu");

navigateBtn.addEventListener("click", function() {
  if (navigate.classList.contains("visible")) {
    navigate.classList.remove("visible");
  } else {
    navigate.classList.add("visible");
  }
});