const image = document.querySelector(".picture");

const options = {
    root: null,
    threshold: 0,
};
const landingObserver = new IntersectionObserver
(function(entries, landingObserver) {
    entries.forEach (entry => {
        entry.target.classList.toggle("fade-in");
        console.log(entry.target);
    })
}, options);

landingObserver.observe(image);

