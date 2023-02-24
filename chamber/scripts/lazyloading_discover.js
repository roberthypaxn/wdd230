
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
    threshold: 0
}
const discoObserver = new IntersectionObserver
(function(shows, discoObserver){
    shows.forEach (show =>{
        console.log(show.target);
        if(!show.isIntersecting){
            return;
        } else {
            loadTheImg(show.target);
            show.target.classList.toggle("fade-in");
            discoObserver.unobserve(show.target);
        }
    })
}, options);

discoImages.forEach(discoImage => {
    discoObserver.observe(discoImage);
})