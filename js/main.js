$(function () {
    $('#burger-btn').click(function () {
        $('#menu').toggle(500)
    });
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        initialSlide: 1,
        prevArrow: '<img class="slick-arrow slick-arrow-left" src="img/long-arrow-left.png">',
        nextArrow: '<img class="slick-arrow slick-arrow-right" src="img/long-arrow-right.png">',
        responsive: [
            {
                breakpoint: 1151,
                settings: {
                    fade: true,
                },
            },
        ],
    });
    $('.header__slider-mini').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        fade: true,
        arrows: false,
        initialSlide: 1,
    });


    $('.header__slider').on('afterChange', function (event, slick, currentSlide) {
        switch (currentSlide) {
            case 0: $('.header__slider-mini').slick('slickGoTo', 0);
                break;
            case 1: $('.header__slider-mini').slick('slickGoTo', 1);
                break;
            case 2: $('.header__slider-mini').slick('slickGoTo', 2);
                break;
            case 3: $('.header__slider-mini').slick('slickGoTo', 3);
                break;
            case 4: $('.header__slider-mini').slick('slickGoTo', 4);
                break;
            case 5: $('.header__slider-mini').slick('slickGoTo', 5);
                break;
        }
    });


    $(function () {
        let num = $('.header__slider').find('.slick-current').index();
        $('.header__slider-number').find('.slide-number').text("0" + (num + 1));
        $(".header__slider").on('afterChange', function (event, slick, currentSlide) {
            $('.header__slider-number').find('.slide-number').text("0" + (currentSlide + 1));
            $('.header__progress').attr('value', currentSlide + 1);
        });
        let numMax = $(".header__slider").find('.slick-slide:last').index();
        $('.header__slider-number').find('.slide-number-max').text("/" + "0" + (numMax + 1));
        $('.header__progress').attr('max', numMax + 1).attr('value', num + 1);
        $('.end-progress').html("0" + (numMax + 1));
    });


    $('.maldives__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        initialSlide: 3,
        prevArrow: '<img class="slick-arrow slick-arrow-left" src="img/arrow-left.png">',
        nextArrow: '<img class="slick-arrow slick-arrow-right" src="img/arrow-right.png">',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                },
            },
        ],
    });



    $(function () {
        let mediaQuery = window.matchMedia('(min-width: 981px)');

        if (mediaQuery.matches) {
            $(function () {
                let num = $('.maldives__slider').find('.slick-current').next().index();
                $('.maldives__slider-number').find('.slide-number').text("0" + (num));
                $(".maldives__slider").on('afterChange', function (event, slick, currentSlide) {
                    $('.maldives__slider-number').find('.slide-number').text("0" + (currentSlide + 1));
                });
                let numMax = $(".maldives__slider").find('.slick-slide:last').index();
                $('.maldives__slider-number').find('.slide-number-max').text("/" + "0" + (numMax));
            });
        };
    });
    $(function () {
        let mediaQuery = window.matchMedia('(max-width: 980px)');

        if (mediaQuery.matches) {
            $(function () {
                let num = $('.maldives__slider').find('.slick-current').index();
                $('.maldives__slider-number').find('.slide-number').text("0" + (num + 1));
                $(".maldives__slider").on('afterChange', function (event, slick, currentSlide) {
                    $('.maldives__slider-number').find('.slide-number').text("0" + (currentSlide + 1));
                });
            });
        };
        if (mediaQuery.matches) {
            $('.maldives__slider').find('.slick-arrow').ready(function () {
                $('.maldives__slider').slick('slickRemove', $('.slick-slide').index(0));
                let num = $(".maldives__slider").find('.slick-slide:last').index();
                $('.maldives__slider-number').find('.slide-number-max').text("/" + "0" + (num + 1));
            });
        };
    });



    $('.obvious-choice__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slick-arrow slick-arrow-left" src="img/long-arrow-left.png">',
        nextArrow: '<img class="slick-arrow slick-arrow-right" src="img/long-arrow-right.png">',
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 3,
                    nextArrow: '<img class="slick-arrow slick-arrow-right" src="img/long-arrow-left.png">',
                },
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 2,
                    nextArrow: '<img class="slick-arrow slick-arrow-right" src="img/long-arrow-left.png">',
                },
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    nextArrow: '<img class="slick-arrow slick-arrow-right" src="img/long-arrow-left.png">',
                },
            },
        ],
    });

    $('.obvious-choice__slider').find('.slick-active:last').find('.obvious-choice__slider-item').find('img').after('<div class="bg"></div>');
    $('.obvious-choice__slider').find('.slick-arrow').on('click resize', function () {
        $('div.bg').fadeOut(600, function () {
            $(this).remove();
        })
        $('.obvious-choice__slider').find('.slick-active:last').find('.obvious-choice__slider-item').find('img').after('<div class="bg"></div>');
    });


    $('#to-top').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 700);
    });

})