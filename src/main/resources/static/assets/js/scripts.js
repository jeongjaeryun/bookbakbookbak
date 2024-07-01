(function ($) {
    "use strict";

    /*********************************
    /* Table of Context
    /* *******************************
    /* 
    /* Preloader
    /* Sticky Navbar
    /* Scroll Top Bar
    /* Language Dropdown
    /* Custom Dropdown
    /* Nice Select
    /* Counter Up
    /* Mobile Menu Expand
    /* Mobile Menu Flyout Menu
    /* Mobile Cart Flyout Menu
    /* Banner Slider
    /* Banner Slider v2
    /* Blog Slider
    /* Arrival Slider
    /* Category Slider
    /* Sale Slider
    /* Trending Slider
    /* Feature Product Slider
    /* Partners Slider Slider
    /* Team Slider Slider
    /* Testimonial Slider
    /* productGallerySwiper Slider
    /* productPreviewSwiper Slider
    /* Dynamic Feature Background
    /* Add/Minus Quantity
    /* Cart Button Action
    /* CountDown 
    /* Filter Remove Function 
    /* Cricle Skill Bar
    /* Image Upload 
    /* Side Bar js
    /* Progress Bar
    /* Avatar Dropdown
    /* Filter Dropdown
    /* Image Upload 
    /* Flatpickr Configuration 
    /* Date Format 
    /* Invoice Date Format 
    /* Filter Dropdown
    /* Dashboard Chat sidebar toggler
    /* Open Emoji and Attachment popup
    /* Full screen Toggle

    *********************************/

    /*********************************
    /* Preloader Start
    *********************************/
    $(window).on("load", function () {
        $("#status").fadeOut();
        $("#preloader").delay(500).fadeOut("slow");
        $("body").delay(500).css({ overflow: "visible" });
    });

    /*********************************
    /* Sticky Navbar
    *********************************/
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $(".header-sticky");

        if (scrolling >= 50) {
            $(stikey).addClass("nav-bg");
            $(".header__dashboard").addClass("shadow");
        } else {
            $(stikey).removeClass("nav-bg");
            $(".header__dashboard").removeClass("shadow");
        }
    });

    /*********************************
    /*  Scroll Top Bar
    *********************************/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".scroll-to-target").removeClass("open");
        } else {
            $(".scroll-to-target").addClass("open");
        }
    });

    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top,
                },
                500
            );
        });
    }

    /********************************
     * Avatar Dropdown
     ********************************/
    $(".avatar__dropdown .avatar__profile").on("click", function (e) {
        e.preventDefault();
        $(".avatar__dropdown .list").toggleClass("active");
    });
    $(document).on("click", function (e) {
        if ($(e.target).closest(".meta__item").length === 0 && $(e.target).closest(".avatar__dropdown .avatar__profile").length === 0) {
            $(".avatar__dropdown .list").removeClass("active");
        }
    });

    /********************************
     * Language Dropdown
     ********************************/
    $(".language__select .selected").on("click", function (e) {
        e.preventDefault();
        $(".language__select .list").toggleClass("active");
    });

    $(".language__select .list li").on("click", function (e) {
        e.preventDefault();
        $(this).parent(".list").removeClass("active");

        var outPutText = $(this).text();
        if ($(window).width() < 767) {
            var outPutText = outPutText.slice(outPutText.search("-") + 1).replace(/\s+/g, "");
        }
        $(this)
            .parents(".language__select")
            .find(".selected .selected_item")
            .html(`<div class='selected_item'><img src="${$(this).find("img").attr("src")}"><span>${outPutText}</span></div>`);
    });
    // Resize OPtion
    $(window).on("load resize", function () {
        var outPutText = $(".language__select .selected .selected_item span").text();
        if ($(window).width() < 767) {
            var outPutText = outPutText.slice(outPutText.search("-") + 1).replace(/\s+/g, "");
        }

        $(".language__select .selected .selected_item span").text(outPutText);
    });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".dropdown_c").length === 0 && $(e.target).closest(".custom__dropdown .selected").length === 0) {
            $(".custom__dropdown .list").removeClass("active");
        }
    });

    /********************************
     * Custom Dropdown
     ********************************/
    $(".custom__dropdown .selected").on("click", function (e) {
        e.preventDefault();
        $(".list").removeClass("active");
        $(this).parents(".custom__dropdown").find(".list").toggleClass("active");
    });

    /********************************
     * Custom Filter
     ********************************/
    $(".category__title").on("click", function (e) {
        e.preventDefault();
        $(this).parents(".category__filter").find(".category__dropdown").toggleClass("active");
    });

    /********************************
    /* Nice Select
    ********************************/
    if ($(".category-select").length > 0) {
        $(".category-select").niceSelect();
    }
    if ($(".brand-select").length > 0) {
        $(".brand-select").niceSelect();
    }
    if ($(".tags-select").length > 0) {
        $(".tags-select").niceSelect();
    }
    if ($(".city-select").length > 0) {
        $(".city-select").niceSelect();
    }
    if ($(".country-select").length > 0) {
        $(".country-select").niceSelect();
    }
    if ($(".province-select").length > 0) {
        $(".province-select").niceSelect();
    }
    if ($(".select-subject").length > 0) {
        $(".select-subject").niceSelect();
    }
    if ($(".shortBy-select select").length > 0) {
        $(".shortBy-select select").niceSelect();
    }
    /********************************
    /* Counter Up
    ********************************/
    if ($(".counterNumber").length > 0) {
        $(".counterNumber").counterUp({
            delay: 10,
            time: 1000,
        });
    }

    /*********************************
    /*  Mobile Menu Flyout Menu
    *********************************/
    $(".toggler__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });
    $(".closest__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".flyout__inner").length === 0 && $(e.target).closest(".toggler__btn").length === 0) {
            $(".flyoutMenu").removeClass("active");
        }
    });

    /*********************************
    /*  Mobile Menu Expand
    *********************************/
    $(".flyout-main__menu .nav__link").on("click", function (event) {
        event.preventDefault();
        // $(".has__dropdown").find(".sub__menu").slideUp();
        $(this).parent(".has__dropdown").find(".sub__menu").slideToggle();
    });

    $(".flyout-main__menu .sub__menu .nav__link").on("click", function (event) {
        event.preventDefault();
        $(this).parent(".has__dropdown").find(".sub__sub-menu").slideToggle();
    });

    /*********************************
    /*  Mobile Cart Flyout Menu
    *********************************/
    $(".header__cart .cart__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyoutCart").toggleClass("active");
    });
    $(".close__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyoutCart").toggleClass("active");
    });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".flyout__inner").length === 0 && $(e.target).closest(".header__cart .cart__btn").length === 0) {
            $(".flyoutCart").removeClass("active");
        }
    });

    /*********************************
    /*  Banner Slider
    *********************************/
    if ($(".hero__mySwiper").length > 0) {
        var Heroswiper = new Swiper(".hero__mySwiper", {
            speed: 500,
            effect: "fade",
            grabCursor: "true",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' + "  " + '<span class="' + totalClass + '"></span>';
                },
                formatFractionCurrent: function (number) {
                    return "0" + number;
                },
                formatFractionTotal: function (number) {
                    return "";
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    /*********************************
    /*  Banner Slider v2
    *********************************/
    if ($(".main__mySwiper").length > 0) {
        var Mainswiper = new Swiper(".main__mySwiper", {
            grabCursor: true,
            effect: "fade",
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 500,
            loop: "infinite",
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    /*********************************
    /*  Blog Slider
    *********************************/
    if ($(".blog__Swiper").length > 0) {
        var Mainswiper = new Swiper(".blog__Swiper", {
            grabCursor: true,
            effect: "fade",
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 500,
            loop: "infinite",
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    /*********************************
    /*  Arrival Slider
    *********************************/
    if ($(".arrival__Swiper").length > 0) {
        var Arrivalswiper = new Swiper(".arrival__Swiper", {
            // slidesPerView: 8,
            loop: false,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 5,
                },
            },
        });
    }

    /*********************************
    /*  Category Slider
    *********************************/
    if ($(".categorySwiper").length > 0) {
        var categorySwiper = new Swiper(".categorySwiper", {
            // slidesPerView: 8,
            // loop: true,
            spaceBetween: 17,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                400: {
                    slidesPerView: 3,
                },
                479: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 6,
                },
                1400: {
                    slidesPerView: 8,
                },
            },
        });
    }

    /*********************************
    /*  Sale Slider
    *********************************/
    if ($(".sale__Swiper").length > 0) {
        var Saleswiper = new Swiper(".sale__Swiper", {
            // slidesPerView: 8,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 5,
                },
            },
        });
    }

    /*********************************
    /*  Trending Slider
    *********************************/
    if ($(".trending__Swiper").length > 0) {
        var Trendingswiper = new Swiper(".trending__Swiper", {
            // slidesPerView: 8,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 5,
                },
            },
        });
    }

    /*********************************
    /*  Feature Product Slider
    *********************************/
    if ($(".feature__prod__Swiper").length > 0) {
        var Featureswiper = new Swiper(".feature__prod__Swiper", {
            slidesPerView: 3,
            // loop: true,
            spaceBetween: 30,
            grid: {
                // rows: 2,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
        });
    }

    /*********************************
    /*  Partners Slider Slider
    *********************************/
    if ($(".partnarSwiper").length > 0) {
        var partnarSwiper = new Swiper(".partnarSwiper", {
            slidesPerView: 1,
            spaceBetween: 16,
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                375: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                },
                1400: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            },
        });
    }

    /*********************************
    /*  Team Slider Slider
    *********************************/
    if ($(".teamSwiper").length > 0) {
        var teamSwiper = new Swiper(".teamSwiper", {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 16,
            navigation: {
                nextEl: ".our-team .swiper-next",
                prevEl: ".our-team .swiper-prev",
            },
            breakpoints: {
                300: {
                    slidesPerView: 1.5,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    /*********************************
    /*  Testimonial Slider
    *********************************/
    if ($(".swiperTestimonial").length > 0) {
        var testimonialThumb = new Swiper(".testimonialThumb", {
            spaceBetween: 0,
            slidesPerView: 5,
            grabCursor: true,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 5,
            centeredSlides: true,
            direction: "vertical",
        });

        var swiperTestimonial = new Swiper(".swiperTestimonial", {
            spaceBetween: 20,
            loop: true,
            loopedSlides: 5,
        });

        swiperTestimonial.controller.control = testimonialThumb;
        testimonialThumb.controller.control = swiperTestimonial;
    }

    /*********************************
    /*  productGallerySwiper Slider
    *********************************/
    if ($(".productGallerySwiper").length > 0) {
        var productGallerySwiper = new Swiper(".productGallerySwiper", {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 4,
        });
        var productGallerySwiperThumb = new Swiper(".productGallerySwiperThumb", {
            spaceBetween: 10,
            slidesPerView: 4,
            grabCursor: true,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 4,
            direction: "horizontal",
            // centeredSlides: true,
            breakpoints: {
                479: {
                    centeredSlides: false,
                    slidesPerView: 4,
                },
                767: {
                    direction: "horizontal",
                    slidesPerView: 3,
                },
                1200: {
                    centeredSlides: false,
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    direction: "vertical",
                    spaceBetween: 20,
                },
            },
        });
        productGallerySwiper.controller.control = productGallerySwiperThumb;
        productGallerySwiperThumb.controller.control = productGallerySwiper;
    }
    /*********************************
    /*  productPreviewSwiper Slider
    *********************************/
    if ($(".productPreviewSwiper").length > 0) {
        var productPreviewSwiper = new Swiper(".productPreviewSwiper", {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 4,
        });
        var productPreviewSwiperThumb = new Swiper(".productPreviewSwiperThumb", {
            spaceBetween: 10,
            slidesPerView: 4,
            grabCursor: true,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 4,
            direction: "horizontal",
            // centeredSlides: true,
            breakpoints: {
                479: {
                    centeredSlides: false,
                    slidesPerView: 4,
                },
                767: {
                    direction: "horizontal",
                    slidesPerView: 3,
                },
                1200: {
                    centeredSlides: false,
                    slidesPerView: 4,
                    spaceBetween: 12,
                },
                1440: {
                    direction: "horizontal",
                    spaceBetween: 12,
                },
            },
        });
        productPreviewSwiper.controller.control = productPreviewSwiperThumb;
        productPreviewSwiperThumb.controller.control = productPreviewSwiper;
    }

    /*********************************
    /*  Dynamic Feature Background
    *********************************/
    const feature = $(".feature__single__item, [data-bg]");
    Array.from(feature, (feature) => {
        const bgColor = $(feature).data("bg");
        $(feature).css("backgroundColor", bgColor);
    });

    /*********************************
    /* Add/Minus Quantity
    *********************************/
    $(".incressQnt").on("click", function () {
        var $qty = $(this).closest("div").find(".qnttinput");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $(".decressQnt").on("click", function () {
        var $qty = $(this).closest("div").find(".qnttinput");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        } else {
            $(this).parents(".cart__action__btn").find(".cart__quantity").css("display", "none");
        }
    });

    /*********************************
    /* Cart Button Action
    *********************************/
    $(".cart__btn .btn").on("click", function (e) {
        e.preventDefault();
        $(".qnttinput").val(1);
        $(this).parents(".cart__action__btn").find(".cart__quantity").css("display", "inline-flex");
    });

    /*********************************
    /* CountDown 
    *********************************/
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 1);
    $("#salesCountdown").countdown({
        until: austDay,
        padZeroes: true,
        labels: ["Year", "Mo", "Wk", "Days", "Hours", "Mins", "Sec"],
    });

    /*********************************
    /* Filter Remove Function 
    *********************************/
    if ($(".filtered-query").length > 0) {
        $(".filtered-query .action").on("click", function () {
            $(this).parent("li").fadeOut();
        });
        $(".filtered-query .clearAll").on("click", function () {
            $(this).parent(".filtered-query").fadeOut();
        });
    }

    /*********************************
    /* Cricle Skill Bar
    *********************************/
    var progressPie = $(".radial__progress--pie");
    if (progressPie.length) {
        progressPie.appear(function () {
            progressPie.asPieProgress({
                namespace: "pieProgress",
                classes: {
                    svg: "radial__progress--pie__svg",
                    number: "radial__progress--pie__number",
                    content: "radial__progress--pie__content",
                },
                min: 0,
                max: 100,
                speed: 50,
                barsize: "10",
                barcolor: "#EB5E28",
                trackcolor: "#FBD5CE",
                easing: "ease",
            });
            progressPie.asPieProgress("start");
        });
    }

    /*********************************
    /* Image Upload Start
    *********************************/
    function readURL2(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#imagePreview").css("background-image", "url(" + e.target.result + ")");
                $("#imagePreview").hide();
                $("#imagePreview").fadeIn(650);
            };
            reader.readAsDataURL(input.files[0]);
        }
        console.log(input);
    }
    $(".avatar-upload #imageUpload").change(function () {
        readURL2(this);
    });

    /*********************************
    /* Side Bar js
    *********************************/
    $("#toggler__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyOut-sidebar").addClass("open");
    });
    $("#toggle__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyOut-sidebar").removeClass("open");
    });

    // $(document).on("click", function (e) {
    //     if ($(e.target).closest(".header__dashboard").length === 0 && $(e.target).closest("#toggler__btn").length === 0) {
    //         $(".flyOut-sidebar").removeClass("open");
    //     }
    // });

    /*********************************
    /* Progress Bar
    *********************************/
    if ($(".profit").length > 0) {
        $(".profit").rProgressbar({
            percentage: 30,
            fillBackgroundColor: "#6FD207",
            backgroundColor: "rgba(111, 210, 7, 0.2)",
        });
    }
    if ($(".income").length > 0) {
        $(".income").rProgressbar({
            percentage: 80,
            fillBackgroundColor: "#5793EC",
            backgroundColor: "rgba(87, 147, 236, 0.2)",
        });
    }
    if ($(".expenses").length > 0) {
        $(".expenses").rProgressbar({
            percentage: 50,
            fillBackgroundColor: "#FFAA04",
            backgroundColor: "rgba(255, 170, 4, 0.2)",
        });
    }

    /********************************
     * Avatar Dropdown
     ********************************/
    $(".dropdown__btn .drop__action--btn").on("click", function (e) {
        e.preventDefault();
        $(".dropdown__btn .dropdown__list").removeClass("active");
        $(this).parents(".dropdown__btn").find(".dropdown__list").addClass("active");
    });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".dropdown__btn").length === 0 && $(e.target).closest(".dropdown__btn .drop__action--btn").length === 0) {
            $(".dropdown__btn .dropdown__list").removeClass("active");
        }
    });

    /********************************
     * Filter Dropdown
     ********************************/
    /* $(".filter__dropdown .filter__btn").on("click", function (e) {
        e.preventDefault();
        $(".filter__dropdown .dropdown__list").toggleClass("active");
    });
    $("filter__dropdown .dropdown__list li").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
    });
    $(document).on("click", function (e) {
        if ($(e.target).closest(".filter__dropdown").length === 0 && $(e.target).closest(".filter__btn").length === 0) {
            $(".filter__dropdown .dropdown__list").removeClass("active");
        }
    }); */
    document.querySelector(".filter__dropdown .filter__btn").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(".filter__dropdown .dropdown__list").classList.toggle("active");
    });

    document.querySelectorAll(".filter__dropdown .dropdown__list li").forEach(function(item) {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            this.classList.toggle("active");
        });
    });

    document.addEventListener("click", function(e) {
        if (!e.target.closest(".filter__dropdown") && !e.target.closest(".filter__btn")) {
            document.querySelector(".filter__dropdown .dropdown__list").classList.remove("active");
        }
    });


    /********************************
     * Filter Dropdown
     ********************************/
//    $(".dropdown__btn .user__list--filter").on("click", function (e) {
//        e.preventDefault();
//        // $(".dropdown__btn .dropdown__list").toggleClass("active");
//        $(this).parent(".dropdown__btn").find(".dropdown__list").addClass("active");
//    });
//
//    $(document).on("click", function (e) {
//        if ($(e.target).closest(".dropdown__btn").length === 0 && $(e.target).closest(".dropdown__btn .user__list--filter").length === 0) {
//            $(".dropdown__btn .dropdown__list").removeClass("active");
//        }
//    });
        document.querySelectorAll(".dropdown__btn .user__list--filter").forEach(function(btn) {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                // btn.closest(".dropdown__btn").querySelector(".dropdown__list").classList.toggle("active");
                btn.closest(".dropdown__btn").querySelector(".dropdown__list").classList.add("active");
            });
        });

        document.addEventListener("click", function(e) {
            if (!e.target.closest(".dropdown__btn") && !e.target.closest(".dropdown__btn .user__list--filter")) {
                document.querySelectorAll(".dropdown__btn .dropdown__list").forEach(function(list) {
                    list.classList.remove("active");
                });
            }
        });


    /*********************************
    /* Image Upload Start
    *********************************/
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // $(".upload__drag").css("background-image", "url(" + e.target.result + ")");
                $("#img").attr("src", e.target.result);
                $(".upload__drag").css("height", 320 + "px");
                $(".upload__drag .preview__img").removeClass("d-none").css("display", "block ");
                $(".upload__drag").hide();
                $(".upload__drag").fadeIn(650);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#close").on("click", function () {
        $(".preview__img").hide();
    });
    $("#imageUploads").change(function () {
        readURL(this);
    });

    /*********************************
    /* Flatpickr Conviguration Start
    *********************************/
    if ($("#check-in").length > 0) {
        $("#check-in").flatpickr({
            enableTime: false,
            disableMobile: true,
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: "today",
            time_24hr: true,
            locale: "id",
            inline: false,
        });
    }

    /*********************************
    /* Flatpickr Conviguration Start
    *********************************/
    if ($("#check-out").length > 0) {
        $("#check-out").flatpickr({
            enableTime: false,
            disableMobile: true,
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: "today",
            time_24hr: true,
            locale: "id",
            inline: false,
        });
    }

    /*********************************
    /* Date Format Start
    *********************************/
    if ($("#date").length > 0) {
        $("#date").flatpickr({
            enableTime: false,
            disableMobile: true,
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: "today",
            time_24hr: true,
            locale: "id",
            inline: false,
        });
    }
    /*********************************
    /* Invoice Date Format Start
    *********************************/
    if ($("#current-date").length > 0) {
        $("#current-date").flatpickr({
            enableTime: false,
            disableMobile: true,
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: "today",
            time_24hr: true,
            locale: "id",
            inline: false,
        });
    }
    /*********************************
    /* Invoice Date Format Start
    *********************************/
    if ($("#due-date").length > 0) {
        $("#due-date").flatpickr({
            enableTime: false,
            disableMobile: true,
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: "today",
            time_24hr: true,
            locale: "id",
            inline: false,
        });
    }

    /********************************
     * Filter Dropdown
     ********************************/
    $(".nav__dropdown > a").on("click", function (e) {
        e.preventDefault();
        $(".nav__dropdown .sub__menu").slideToggle(400);
    });

    /*********************************
    /*  Dashboard Chat sidebar toggler
    *********************************/
    if ($(".chat__sidebar__toggler").length > 0) {
        $(".chat__sidebar__toggler").on("click", function () {
            $(".chat__sidebar").toggleClass("close");
        });
    }
    if ($(".chat__dropdown__title").length > 0) {
        $(".chat__dropdown__title").on("click", function () {
            $(this).next(".chat__dropdown__body").slideToggle(400);
            $(this).hasClass("up") ? $(this).removeClass("up") : $(this).addClass("up");
        });
    }
    if ($("#conversation__toggler").length > 0) {
        $("#conversation__toggler").on("click", function () {
            if ($(".conversation__body__info").hasClass("close")) {
                $(".conversation__body__info").removeClass("close");
                $(".dropdown__btn .dropdown__list").removeClass("active");
                $(this).children("span").first().text("Hide Info");
            } else {
                $(".conversation__body__info").addClass("close");
                $(".dropdown__btn .dropdown__list").removeClass("active");
                $(this).children("span").first().text("Expand Info");
            }
        });
    }
    $(window).on("resize load", function () {
        if ($(window).width() > 1440) {
            $(".conversation__body__info").removeClass("close");
        } else {
            $(".conversation__body__info").addClass("close");
        }
        if ($(window).width() > 1200) {
            $(".chat__sidebar").removeClass("close");
        } else {
            $(".chat__sidebar").addClass("close");
        }
    });

    /*********************************
    /* Open Emoji and Attachment popup
    *********************************/
    if ($(".chat__compose__emoji").length) {
        var emojiArr = `👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👣 👂 🦻 👃 🧠 🦷 🦴 👀 👁 👅 👄 💋 🩸`;

        emojiArr = emojiArr.split(" ");
        emojiArr.forEach((emoji) => {
            var abs = $(".chat__compose__emoji").html();
            $(".chat__compose__emoji").html(abs.concat(`<button>${emoji}</button>`));
        });
        $(".chat__compose__emoji button").on("click", function (e) {
            e.preventDefault();
            var composeOldVal = $("#newMsg").val();
            $("#newMsg").val(composeOldVal.concat($(this).text()));
        });
    }

    if ($(".chat__compose").length) {
        $(".addEmoji").click(function () {
            $(".chat__compose__emoji").slideToggle(250);
            $(".chat__compose__attachment").slideUp(250);
        });
        $(".addAttachment").click(function () {
            $(".chat__compose__emoji").slideUp(250);
            $(".chat__compose__attachment").slideToggle(250);
        });
    }

    /*********************************
    /* Full screen Toggle
    *********************************/
    $(document).on("click", ".fullscreen-button", function toggleFullScreen() {
        $("html").addClass("fullscreen-button");
        if (
            (document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
            (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
            (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
            (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)
        ) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            $("html").removeClass("fullscreen-button");
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        // $(".fa-solid").toggleClass(" fa-expand fa-minimize");
    });

    $(".full-screen-link i").on("click", function () {
        $(".fa-solid").toggleClass(" fa-expand fa-compress");
    });
})(jQuery);
