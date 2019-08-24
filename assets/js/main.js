$(function () {
    // Image lazy load
    lozad(".lozad", {
        rootMargin: "300px 0px",
        loaded: function (el) {
            el.classList.add("is-loaded");
        }
    }).observe();
    lozad(".lazy-load-bg", {}).observe();

    // Menu mobile
    $('#nav-mobile').mmenu({
        extensions: ["fx-menu-slide", "border-offset", "shadow-page", "position-right", "pagedim-black"],
        navbar: {title: ''},
        navbars: [{
            content: [
                '<img src="assets/img/logo.png" style="margin:0 auto" />',
            ],
        }]
    });

    // Sticky menu
    var header = $('#header');
    var heightHeader = header.height();
    $('#site-wrap').css('padding-top', heightHeader);
    $(window).resize(function () {
        var heightHeader = header.height();
        $('#site-wrap').css('padding-top', heightHeader);
    });

    $(window).ready(function () {
        var heightHeader = header.height();
        $('#site-wrap').css('padding-top', heightHeader);
    });

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
        smartSpeed: 900,
        navSpeed: 900,
    });

    $('.owl-slide').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        dotData: true,
        dotsData: true,
        smartSpeed: 900,
        navSpeed: 900,
    });

    $('.owl-kols').owlCarousel({
        dots: false,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        smartSpeed: 900,
        navSpeed: 900,
        margin: 30,
        autoplayHoverPause: true,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1024: {items: 3},
            1300: {items: 3}
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
        smartSpeed: 900,
        navSpeed: 900,
        margin: 30,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1024: {items: 3},
            1300: {items: 4}
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
        smartSpeed: 900,
        navSpeed: 900,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1024: {items: 3},
            1300: {items: 3}
        }
    });

    $('.wts-nav-collapse').slideUp();
    $('body').on('click', '.expand-all', function(){
        if ($('.wts-map').hasClass('expand')) {
            $('.wts-map').removeClass('expand').removeClass(function (index, className) {
                return (className.match (/(^|\s)step\S+/g) || []).join(' ');
            });
            $('.wts-c-step').removeClass('active');
            $('.wts-nav-collapse').removeClass('opened').slideUp();
            $('.wts-map').addClass('expand-only');
        } else {
            $('.wts-map').addClass('expand');
            $('.wts-map').removeClass('expand-only');
            $('.wts-c-step').addClass('active');
            $('.wts-nav-collapse').addClass('opened').slideDown();
            $('body').on('click', '.wts-c-step', function() {
                var elTarget = $(this).data('target');
                $('.wts-c-step').removeClass('active');
                $(this).addClass('active');
                if ($(elTarget).hasClass('opened')) {
                    $('.wts-nav-collapse').not(elTarget).removeClass('opened').slideUp();
                } else {
                    $('.wts-nav-collapse').removeClass('opened').slideUp();
                    $(elTarget).addClass('opened').slideDown();
                }
            });
        }
    }).on('click', '.wts-c-step', function() {
        var elTarget = $(this).data('target');
        var clsCustom = elTarget.replace('#', '');
        $('.wts-map').removeClass('expand').addClass('expand-only');
        var arrClass = $('.wts-map').attr('class').split(' ');
        $('.wts-map').attr('class', $.map(arrClass, function(val) {
            return val.includes('step') !== false ? null : val;
        }).join(' ')).addClass(clsCustom);
        $('.wts-c-step').removeClass('active');
        $('.wts-c-step').removeClass('active');
        $(this).addClass('active');

        if ($(elTarget).hasClass('opened')) {

        } else {
            $('.wts-nav-collapse').removeClass('opened').slideUp();
            $(elTarget).addClass('opened').slideDown();
        }
    });
})