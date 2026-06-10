/*--------------------------------------------------
Project:        Recore
Version:        1.0
Author:         Company Name
-----------------------------------------------------

    JS INDEX
    ================================================
    * preloader js
    * One Page Scroll
    * slick Menu js 
    * slick Nav
    * Isotope
    * Counter
    * bottom to top
    ================================================*/
(function ($) {
  "use strict";
  var $main_window = $(window);

  /*====================================
      events dropdown
    ======================================*/
  $('.navbar-nav > .nav-item > a[href="events.html"]').each(function () {
    var $eventsLink = $(this);
    var $eventsItem = $eventsLink.parent('.nav-item');

    if (!$eventsItem.children('.dropdown').length) {
      $eventsItem.append(
        '<ul class="dropdown">' +
          '<li class="nav-item"><a class="nav-link scroll" href="events.html">Annual Meeting</a></li>' +
          '<li class="nav-item"><a class="nav-link scroll" href="webinars.html">Webinars</a></li>' +
        '</ul>'
      );
    }
  });

  /*====================================
      preloader js
    ======================================*/
  $main_window.on('load', function () {
    $('#preloader').fadeOut('slow');
  });

  /*====================================
      active menu js
    ======================================*/
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.navbar-nav .nav-item').removeClass('active');
  $('.navbar-nav .nav-item a').each(function () {
    var linkPage = ($(this).attr('href') || '').split('/').pop();
    if (linkPage === currentPage) {
      $(this).closest('.nav-item').addClass('active');
      $(this).parents('.nav-item').last().addClass('active');
    }
  });

  /*====================================
                One Page Scroll
    ======================================*/

  // Select all »a« elements with a parent class »links« and add a function that is executed on click
  $('.navbar-nav .nav-item a').on('click', function (e) {
    // Define variable of the clicked »a« element (»this«) and get its href value.
    var href = $(this).attr('href');
    if (!href || href.charAt(0) !== '#') {
      return;
    }
    var $target = $(href);
    if (!$target.length) {
      return;
    }
    // Run a scroll animation to the position of the element which has the same id like the href value.
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, '300');
    // Prevent the browser from showing the attribute name of the clicked link in the address bar
    e.preventDefault();
  });
  /*====================================
              slick slider
  =====================================*/
  $('.evnt-slider').slick({
  slidesToShow: 3,
  arrow:true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1035,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.one-time').slick({
  infinite: true,
  slidesToShow: 4,
  arrow: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 1400,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


$('.eventpage-slider').slick({
  infinite: true,
  slidesToShow: 1,
  arrow: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 1400,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});



// client-Slider

$('.client-Slider').slick({
  infinite: true,
  slidesToShow: 6,
  arrow: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 1400,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


  /*====================================
      sticky menu js
    ======================================*/
  var windows = $(window);
  var sticky = $('.header-fixed');
  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 50) {
      sticky.removeClass('stick');
    } else {
      sticky.addClass('stick');
    }
  });
  /*====================================
      slick nav
  ======================================*/
  var logo_path = $('.mobile-menu').data('logo');
  $('.navbar-nav').slicknav({
    appendTo: '.mobile-menu',
    removeClasses: true,
    label: '',
    closedSymbol: '<i class="fa fa-angle-right"><i/>',
    openedSymbol: '<i class="fa fa-angle-down"><i/>',
    brand: '<img src="' + logo_path + '" class="img-fluid" alt="logo">'
  });
  

  /*------------ Wow-js -------------*/

  new WOW().init();

 /*------------ Quantity-increas&reduce -------------*/
 //===== product quantity

    $('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

/*====================================
            bottom to top
        ======================================*/  

             var btn = $('#btn-to-top');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


 

})(jQuery);


