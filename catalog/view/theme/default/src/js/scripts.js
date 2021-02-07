jQuery(document).ready(function($) {
    $('.hamburger').css('z-index', '999');
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('overflow');
        $('.header--nav').toggleClass('active');
        $('.language').toggleClass('active');
    });
    //Owl
     $("#reviews__slider").owlCarousel({
        items: 1,
        nav: true,
        stagePadding: 0,
        margin: 5,
        responsive:{
            990:{
                items: 1,
                nav: true,
                stagePadding: 150,
                margin: 50,
            },
            1200:{
                items: 1,
                nav: true,
                stagePadding: 300,
                margin: 50,
            },
            1400:{
                items: 1,
                nav: true,
                stagePadding: 300,
                margin: 150,
            },
            1650:{
                items: 1,
                nav: true,
                stagePadding: 500,
                margin: 220,
            }
        }
      });

     $("#related__slider").owlCarousel({
        items: 1,
        nav: false,
        stagePadding: 0,
        margin: 10,
        responsive:{
            500:{
                items: 2,
                nav: false,
                stagePadding: 60,
                margin: 20,
            },
            990:{
                items: 3,
                nav: false,
                stagePadding: 100,
                margin: 30,
            },
            1200:{
                items: 3,
                nav: false,
                stagePadding: 200,
                margin: 30,
            },
            1300:{
                items: 3,
                nav: false,
                stagePadding: 280,
                margin: 30,
            },
            1600:{
                items: 3,
                nav: false,
                stagePadding: 300,
                margin: 45,
            },
            1700:{
                items: 3,
                nav: false,
                stagePadding: 350,
                margin: 45,
            },
        }
      });

     $("#related__slider--wedding").owlCarousel({
        items: 1,
        nav: false,
        stagePadding: 0,
        margin: 10,
        responsive:{
            500:{
                items: 2,
                nav: false,
                stagePadding: 60,
                margin: 20,
            },
            990:{
                items: 2,
                nav: false,
                stagePadding: 100,
                margin: 30,
            },
            1200:{
                items: 2,
                nav: false,
                stagePadding: 200,
                margin: 30,
            },
            1300:{
                items: 2,
                nav: false,
                stagePadding: 280,
                margin: 30,
            },
            1600:{
                items: 2,
                nav: false,
                stagePadding: 300,
                margin: 45,
            },
            1700:{
                items: 2,
                nav: false,
                stagePadding: 350,
                margin: 45,
            },
        }
      });

     $('.to__top').on('click', function() {
        $('body, html').animate({scrollTop: 0}, 1500);
     });

     //Rent form checkboxes
     $('.rent__checkbox').on('click', function() {
        $(this).toggleClass('active');
     });

     //Tabs
      $(".works__content").not(":first").hide();
        $(".steps__list li").click( function(e) {
        $(".steps__list li").removeClass("current").eq($(this).index()).addClass("current");
        $(".works__content").hide().eq($(this).index()).fadeIn();
      }).eq(0).addClass("current");

    $('.video__item').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.video__popup').fadeIn();
        $('.popup__content').eq($(this).index()).css('display', 'flex');
    });
    $('.video__popup .popup__content').on('click', function() {
        e.stopPropagation();
    });
    $('.video__popup--play').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).fadeOut();
        $(this).parent().find('.video__popup--banner').fadeOut();
        $(this).parent().find('.video__iframe--popup').fadeIn();
    });

    $('body').on('click', function() {
        $('.video__popup').fadeOut();
        $('.video__popup .popup__content').fadeOut();
        $('.video__popup .video__popup--banner').fadeIn();
        $('.video__popup .video__popup--play').fadeIn();
    });

    //Block show animation
     AOS.init({
        duration: 1000,
        easing: 'ease-out-sine',
        once: true,
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth <= maxWidth;
        }
     });

    $('.play__video--item.fresco').on('click', function() {
        var UrlLink = $(this).attr('href');
        console.log(UrlLink);
        Fresco.show({
            url: UrlLink
        });
    });

    $('#first__block').on('click', function() {
            document.location.href = '#to__second';
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
    });

});