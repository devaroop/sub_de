$(document).ready(function(){

    // fade in #back-top
    $(function () {
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 100) {
		$('#back-top').fadeIn();
	    } else {
		$('#back-top').fadeOut();
	    }
	});

	// scroll body to 0px on click
	$('#back-top a').click(function () {
	    $('body,html').animate({
		scrollTop: 0
	    }, 800);
	    return false;
	});
    });


    //open lightbox for any image in the page
    $('img').click(
        function(){
            $('#gallery_image').attr('src', this.src);
            $('#myLightbox').lightbox();
        }
    );

});

!function ($) {
    $(function(){
        $('#myCarousel').carousel()
    })
}(window.jQuery)

