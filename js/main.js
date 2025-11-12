$(document).ready(function () {
    // animation init
    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        duration: 1500
    });

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // footer slider
    var swiper = new Swiper(".email-marquee", {
        slidesPerView: "auto",
        spaceBetween: 12,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    // scroll to top
    document.querySelector('.totop').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // mob menu
    $('.menubtn').click(function () {
        $('.mobmenu').addClass('show');
    })
    $('.closemenu').click(function () {
        $('.mobmenu').removeClass('show');
    })

    $('.has-animation').each(function (index) {
        $(this).delay($(this).data('delay')).queue(function () {
            $(this).addClass('animate-in');
        });
    });

    // scroll to anchor
    $(".scrolllink").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });

    // tabs
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tabcontent');

    buttons.forEach((btn, i) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            contents[i].classList.add('active');
        });
    });





});