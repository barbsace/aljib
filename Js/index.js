$(document).ready(function (){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000
    });

    let type = new Typed(".sub", {
        stringsElement: ".motto",
        typeSpeed: 70,
        loop: true,
        showCursor: false,
        startDelay: 1000
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:50,
        responsive:{
            600:{
                items:4
            }
        }
    });

    $("#navigation li a").click(function(e){
        e.preventDefault();

        let targetElem = $(this).attr("href");
        let targetPos = $(targetElem).offset().top;
        $("html, body").animate({scrollTop: targetPos}, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", sticky);

    function sticky(){
        let body = $("body");
        body.addClass("fixedNav");
    }

});