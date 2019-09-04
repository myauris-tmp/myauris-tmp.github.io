$(function () {
    moveFbPagePlugin();

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
    var headerPosition = header.offset().top;
    if ($(window).width() >= 768) {
        if (headerPosition > heightHeader) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > heightHeader) {
                header.addClass('sticky').find('.header-top').children('.container').slideUp(400);
            } else {
                header.removeClass('sticky').find('.header-top').children('.container').slideDown(400);
            }
        });
    }

    $('#site-wrap').css('padding-top', heightHeader);
    $(window).resize(function () {
        moveFbPagePlugin();

        var heightHeader = header.height();
        $('#site-wrap').css('padding-top', heightHeader);
    });

    $(window).ready(function () {
        moveFbPagePlugin();

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
        onInitialized: function () {
            var firstEl = $('.owl-kols').find('.owl-item.active').eq(0);
            var text = firstEl.find('.text').data('text');
            $('.home-kols').find('.kol-text').html(text).show(400);
        },
        onChanged: function () {
            var firstEl = $('.owl-kols').find('.owl-item.active').eq(1);
            var text = firstEl.find('.text').data('text');
            $('.home-kols').find('.kol-text').html(text);
        },
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1024: {items: 3},
            1300: {items: 3}
        },
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

    $('.owl-expert').owlCarousel({
        autoplay: true,
        loop: true,
        lazyLoad: true,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        smartSpeed: 900,
        navSpeed: 900,
        margin: 20,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1024: {items: 3},
            1300: {items: 3}
        }
    });

    $('.owl-page-kols').owlCarousel({
        dots: false,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        smartSpeed: 900,
        navSpeed: 900,
        margin: 90,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 3,
                margin: 15
            },
            600: {items: 3},
            1024: {items: 3},
            1300: {items: 5}
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

    $('.wts-nav-collapse').slideUp();
    $('body').on('click', '.expand-all', function () {
        if ($('.wts-map').hasClass('expand')) {
            $('.expand-all').html('Xem tất cả');
            $('.wts-map').removeClass('expand').removeClass(function (index, className) {
                return (className.match(/(^|\s)step\S+/g) || []).join(' ');
            });
            $('.wts-c-step').removeClass('active');
            $('.wts-nav-collapse').removeClass('opened').slideUp();
            $('.wts-map').addClass('expand-only');
        } else {
            $('.expand-all').html('Đóng tất cả');
            $('.wts-map').addClass('expand');
            $('.wts-map').removeClass('expand-only');
            $('.wts-c-step').addClass('active');
            $('.wts-nav-collapse').addClass('opened').slideDown();
            $('body').on('click', '.wts-c-step', function () {
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
    }).on('click', '.wts-c-step', function () {
        var elTarget = $(this).data('target');
        var clsCustom = elTarget.replace('#', '');
        $('.wts-map').removeClass('expand').addClass('expand-only');
        var arrClass = $('.wts-map').attr('class').split(' ');
        $('.wts-map').attr('class', $.map(arrClass, function (val) {
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

    var active = $('.sidebar-menu').find('li.active') || null,
        i = 0;

    if (![null, undefined].includes(active) && active.length > 0) {
        var li = active.closest('li') || null;
        while (![null, undefined].includes(li) && li.length > 0 && i <= 50) {
            li.children('ul').slideDown(500);
            li.addClass('open').children('ul').slideDown(500);
            li = li.parents('li') || null;
            i++;
        }
    }
    $('.sidebar-menu').on('click', 'a', function (e) {
        e.preventDefault();
        var li = $(this).closest('li'),
            child = li.children('ul') || null;
        if (![null, undefined].includes(child) && child.length > 0) {
            if (li.hasClass('open')) {
                li.removeClass('open').children('ul').slideUp(500).find('li.open').removeClass('open').children('ul').slideUp(500);
            } else {
                li.closest('ul').children('li').removeClass('open').children('ul').slideUp(500);
                li.addClass('open').children('ul').slideDown(500);
            }
        } else {
            var href = $(this).attr('href') || null;
            if (href != null) window.location.href = href;
        }
        return false;
    });

    function moveFbPagePlugin() {
        var screenWidth = $(window).width();
        if (screenWidth > 768 || screenWidth < 576) {
            $('.facebook-page').appendTo('.fb-page-plugin-desktop');
        } else {
            $('.facebook-page').appendTo('.fb-page-plugin-mobile');
        }
    }
})