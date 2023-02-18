const images = document.querySelectorAll("img");

const imagePaths = [
  "images/peterson.png",
  "images/goggins.png",
  "images/Fridman+Huberman.png",
  "images/Elon.png",
  "images/Marshall.png",
  "images/Rogan.png"
];

const options = {
  threshold: 0,
  rootMargin: "-400px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = Array.from(images).indexOf(entry.target);
      entry.target.setAttribute("src", imagePaths[index]);
      entry.target.classList.add("fade-in");
    } else {
      entry.target.setAttribute("src", "images/Placeholder.png");
      entry.target.classList.remove("fade-in");
    }
  });
}, options);

images.forEach(image => {
  observer.observe(image);
});