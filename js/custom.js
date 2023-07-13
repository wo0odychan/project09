$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._mv').each(function () {
            if (sct + $(window).innerHeight() - 100 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });


    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    });


    $('.main_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
    });
})