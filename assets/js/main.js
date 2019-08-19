$(function () {
    // Image lazy load
    lozad(".lozad", {
        rootMargin: "300px 0px",
        loaded: function (el) {
            el.classList.add("is-loaded");
        }
    }).observe();
    lozad(".lazy-load-bg", {}).observe();

    // Slideshow
    $('.slider-show').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoHeight: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        lazyLoad: true,
        smartSpeed : 900,
        navSpeed : 900,
    });

    $('.owl-slide').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        dots: true,
        nav: false,
        autoplay: false,
        loop: true,
        lazyLoad: true,
        dotData: true,
        dotsData: true,
        smartSpeed : 900,
        navSpeed : 900,
    });

    $('.owl-kols').owlCarousel({
        dots: false,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        smartSpeed : 900,
        navSpeed : 900,
        margin: 30,
        autoplayHoverPause: true,
        responsive:{
            0:{items:1},
            600:{items:2},
            1024:{items:3},
            1300:{items:3}
        },
        onInitialized: function () {
            var firstEl = $('.owl-kols').find('.owl-item.active').eq(0);
            var text = firstEl.find('.text').data('text');
            $('.home-kols').find('.kol-text').html(text).show(400);
        },
        onChanged: function () {
            var firstEl = $('.owl-kols').find('.owl-item.active').eq(1);
            var text = firstEl.find('.text').data('text');
            $('.home-kols').find('.kol-text').html(text);
        }
    });

    $('.testimonial-text').hide();
    $('.owl-customers').owlCarousel({
        dots: false,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        smartSpeed : 900,
        navSpeed : 900,
        margin: 30,
        autoplayHoverPause: true,
        center: true,
        responsive:{
            0:{items:1},
            600:{items:2},
            1024:{items:3},
            1300:{items:4}
        },
        onInitialized: function () {
            var el = $('.owl-item.center');
            var text = el.find('.text').data('text');
            $('.home-customers').find('.testimonial-text').html(text).show(400);
        },
        onChanged: function () {
            var el = $('.owl-item.center');
            var text = el.next('.owl-item').find('.text').data('text');
            $('.home-customers').find('.testimonial-text').html(text).show(400);
        }
    });

    $('.owl-news').owlCarousel({
        dots: false,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        smartSpeed : 900,
        navSpeed : 900,
        responsive:{
            0:{items:1},
            600:{items:2},
            1024:{items:3},
            1300:{items:3}
        }
    });
})