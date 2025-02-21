(function ($) {
    "use strict";

    //Header Search Form
    if ($(".search-trigger").length) {
        $(".search-trigger").on("click", function () {
            $("body").addClass("search-active");
        });
        $(".close-search, .search-back-drop").on("click", function () {
            $("body").removeClass("search-active");
        });
    }

    // Offcanvas menu
    $(".menu-trigger").on("click", function () {
        $(".extra-info,.offcanvas-overlay").addClass("active");
        return false;
    });
    $(".menu-close,.offcanvas-overlay").on("click", function () {
        $(".extra-info,.offcanvas-overlay").removeClass("active");
    });

    // data-backround

    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    // Metis Menu

    $("#mobile-menu").metisMenu();

    $("#hamburger").on("click", function () {
        $(".mobile-nav").addClass("show");
        $(".overlay").addClass("active");
    });

    $(".close-nav").on("click", function () {
        $(".mobile-nav").removeClass("show");
        $(".overlay").removeClass("active");
    });

    $(".overlay").on("click", function () {
        $(".mobile-nav").removeClass("show");
        $(".overlay").removeClass("active");
    });

    // Sticky Header Js

    var windowOn = $(window);

    windowOn.on("scroll", function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 400) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });


    //jQuery Animation
    new WOW().init();


    //Counter Up

    $(".counter-number span").counterUp({
        delay: 10,
        time: 1000,
    });


    // Hero Area Slider

    $(".homepage-slides").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        smartSpeed: 2000,
        slideSpeed: 600,
        mouseDrag: false,
        navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            },
            600: {
                items: 1,
                nav: false,
                dots: false,
            },
            768: {
                items: 1,
            },
            1100: {
                items: 1,
            },
        },
    });


    // Feature Slider

    $(".feature_item").slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    });

      // Funfacts Slider

  $(".funfacts_item").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });

    // Project Slider

    $(".project-slider").owlCarousel({
        items: 1,
        margin: 30,
        dots: false,
        nav: true,
        loop: false,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        responsive: {
            575: {
                items: 1,
                nav: false,
                dots: false,
            },

            767: {
                items: 2,
                nav: true,
                dots: false,
            },

            990: {
                items: 3,
                dots: true,
            },
            1200: {
                items: 2,
                dots: true,
            },
        },
    });


    // Testimonial Slider

    $(".testimonial-wrapper").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 3000,
        slideSpeed: 300,
        margin: 30,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
    });

    // Client Slider

    $(".client-wrap").owlCarousel({
        loop: true,
        items: 5,
        dots: true,
        nav: false,
        smartSpeed: 500,
        autoHeight: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 30,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false,
            },
            600: {
                items: 2,
                nav: false,
                dots: false,
            },
            768: {
                items: 3,
                nav: false,
                dots: false,
            },
            1100: {
                items: 5,
                nav: false,
                dots: true,
            },
        },
    });

    // Testimonial Carousel

    $(".testimonial-carousel").owlCarousel({
        items: 1,
        margin: 50,
        dots: true,
        nav: false,
        loop: true,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        responsive: {
            575: {
                items: 1,
                nav: false,
                dots: false,
            },

            767: {
                items: 2,
                nav: false,
                dots: false,
            },

            990: {
                items: 3,
                loop: true,
            },
            1200: {
                items: 3,
                dots: true,
                loop: true,
            },
        },
    });

    // Blog Carousel

    $(".blog-carousel").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: false,
        margin: 40,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        responsive: {
            1200: {
                items: 3,
                nav: true,
                dots: false,
            },

            990: {
                items: 2,
                nav: true,
                dots: false,
            },

            767: {
                items: 2,
                nav: true,
                dots: false,
            },

            575: {
                items: 2,
                nav: true,
                dots: false,
            },

            0: {
                items: 1,
                nav: true,
                dots: false,
            },
        },
    });


    // Contact Form

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        var $action = $(this).prop("action");
        var $data = $(this).serialize();
        var $this = $(this);

        $this.prevAll(".alert").remove();

        $.post(
            $action,
            $data,
            function (data) {
                if (data.response == "error") {
                    $this.before(
                        '<div class="alert alert-danger">' + data.message + "</div>"
                    );
                }

                if (data.response == "success") {
                    $this.before(
                        '<div class="alert alert-success">' + data.message + "</div>"
                    );
                    $this.find("input, textarea").val("");
                }
            },
            "json"
        );
    });

    // Preloader
    function handlePreloader() {
        if ($(".preloader").length) {
            $(".preloader").delay(400).fadeOut(500);
        }
    }

    $(window).on("load", function () {
        handlePreloader();
    });

    // Mouse Custom Cursor
    function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
                        ($(this).is("a", "button") &&
                            $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    itCursor();
})(window.jQuery);
