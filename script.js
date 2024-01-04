$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll_up_btn').addClass("show");
        }
        else {
            $('.scroll_up_btn').removeClass("show");
        }
    });
    //slide up script

    $('.scroll_up_btn').click(function () {
        $('html').animate({ scrollTop: 0 });

    });

    








    $('.menu_btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");

    });
    $('.carousel').owlCarousel({
        margin: 30,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                item: 1,
                nav: false
            },
            600: {
                item: 2,
                nav: false
            },
            1000: {
                item: 3,
                nav: false
            },
        }


    });
});

var typed = new Typed(".typing", {
    strings: ["Coder.", "Security Professional.", "Web Developer.", "Gamer."],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
});


