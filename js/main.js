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

    // filter

    $('.sort-text').on('click', function () {
        $(this).siblings('.filter-descr').stop(true, true).slideToggle(200);
        $(this).toggleClass('active');
    });

    $('.filter-item ul .filter-btn').on('click', function () {
        let selectedText = $(this).text();
        let $filterItem = $(this).closest('.filter-item');
        let $descr = $filterItem.find('.filter-descr');

        $filterItem.find('.sortval').text(selectedText);

        $descr.stop(true, true).slideUp(200);

        $(this).parents('.filter-item').find('.sort-text').removeClass('active');
    });

    // filter tabs
    const tabBtns = document.querySelectorAll(".filter-tabbtn");
    const tabContents = document.querySelectorAll(".filter-content");

    tabBtns.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            if (this.classList.contains("active")) return;

            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            this.classList.add("active");
            tabContents[index].classList.add("active");
        });
    });

    // print
    document.querySelector(".print-btn").addEventListener("click", function () {
        window.print();
    });



    // slider - latest news
    var swiper = new Swiper(".latestnews-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1200,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
           
        },
    });




});