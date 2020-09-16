$(document).ready(function () {
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

	jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
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

});