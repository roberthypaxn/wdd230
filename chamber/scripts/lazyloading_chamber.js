
const discoImages = document.querySelectorAll("[data-src]");

function loadTheImg(img){
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-200px"
}
const discoObserver = new IntersectionObserver
(function(shows, discoObserver){
    shows.forEach (show =>{
        if(!show.isIntersecting){
            return;
        } else {
            console.log(show.target);
            loadTheImg(show.target);
            show.target.classList.toggle("fade-in");
            discoObserver.unobserve(show.target);
        }
    })
}, options);

discoImages.forEach(discoImage => {
    discoObserver.observe(discoImage);
})