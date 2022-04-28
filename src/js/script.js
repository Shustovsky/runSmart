const slider = tns({
    container: '.carousel__inner',
    mode: 'carousel',
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
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



(function($) {
    $(function() {

        /* $(document).ready(function() { */
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

        /*     $('.catalog-item__link').each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            })

            $('.catalog-item__back').each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            }) */

        function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            })
        };

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');



    });
})(jQuery);