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

        //modal

        $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modall__close').on('click', function() {
            $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
        });

        $('.button_mini').each(function(i) {
            $(this).on('click', function() {
                $('#order .modall__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            })
        });


        function validateForms(form) {
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста введите своё имя",
                        minlength: jQuery.validator.format("введите {0} символа!")
                    },
                    phone: "Пожалуйста введите свой номер телефона",
                    email: {
                        required: "Пожалуйста введите свой почтовый адрес",
                        email: "неправельно введён адрес почты"
                    }
                }
            });
        }
        validateForms('#consultation-form');
        validateForms('#order form');
        validateForms('#consultation form');

        $('input[name=phone]').mask("+7 (999) 999-99-99");

        $('form').submit(function(e) {
            e.preventDefault();
            /*  if (!$(this).valid()) {
                 return;
             } */
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');
                $('form').trigger('reset');
            });
            return false;
        });

        //плавная прокрутка smooth scroll and pageup

        $(window).scroll(function() {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });
        /*  $("a[href=#up]").click(function() {
             const _href = $(this).attr("href");
             $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
             return false;
         }); */

        new WOW().init();

    });
})(jQuery);