$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }
    });

	jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

});