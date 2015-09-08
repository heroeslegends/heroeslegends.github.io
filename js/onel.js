$(document).ready(function() {
    
    // Make the down arrow actually scroll when clicked.
    $(".scroll-arrow").click(function() {
        var newTop = $(window).height() - $(".title-nav-wrapper").height();
        $("body,html").animate({ scrollTop: newTop}, 800);
    });


});

