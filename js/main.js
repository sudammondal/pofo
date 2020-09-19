$(document).ready(function () {
  //header js//
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header2").addClass("fixedMenu");
        } else {
            $(".header2").removeClass("fixedMenu");
        }
    });
    
  // counting ja //
	jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

  // down icon js //
    $('.dawn_icon a[href^="#"').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body, section').stop().animate({
          scrollTop: target.offset().top
        }, 2000);
      }
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $(".dawn_icon").addClass("dawn_iconFixd");
      }
      else {
        $(".dawn_icon").removeClass("dawn_iconFixd");
      }
    });

  // up icon js //
    $('.up_icon a[href^="#"').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 2000);
      }
    });

    $(window).scroll(function () {
		if ($(window).scrollTop() > 70) {
			$(".up_icon").addClass("up_iconFixd");
		}
		else {
			$(".up_icon").removeClass("up_iconFixd");
		}
    });

    // slider js// 
    $('.main_slieda_ttstmonials').slick({
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          }
        ]
    });

});