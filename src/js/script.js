const slider = tns({
    container: '.carousel__inner',
    mode: 'carousel',
    items: 1,
    autoplay: false,
    nav: false,
    controls: false,
    /* 
        controlsText: [
            '<img src="icons/left.png" alt="pre">',
            '<img src="icons/right.png" alt="next">'
        ] */
})

document.querySelector('.prev').onclick = function() {
    slider.goTo('prev');
};
document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});