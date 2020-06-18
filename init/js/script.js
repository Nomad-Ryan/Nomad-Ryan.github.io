$(function () {

    /**
     * ui script initialize
     */

    portfolio.init();

})


const portfolio = {
    init: function () {
        portfolio.getScroll();
    },

    getScroll: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            console.log("sct", scrollTop);
            const offsetTopWorks = $('.works').offset().top;

            if(scrollTop > 400) {
                $("html").addClass("show-bio");
            } else {
                $("html").removeClass("show-bio");
            }

            if(scrollTop > offsetTopWorks - 150) {
                $('#header').fadeIn();
            } else {
                $('#header').fadeOut();
            }
        })
    }
}