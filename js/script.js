$(window).scroll(function() {
	if ($(this).scrollTop() > 70){  
    	$('.page-header').addClass("page-header-fixed");
  	}
  	else{
    	$('.page-header').removeClass("page-header-fixed");
  	}
});

$(document).ready(function() {
	$('.main-menu a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(el).offset().top}, 500);
		$('.main-menu').removeClass('opened');
		$('.main-menu-toggle').removeClass('close-toggle');
		return false;
	});

	$('.main-menu-toggle').click(function(){
		$('.main-menu').toggleClass('opened');
		$(this).toggleClass('close-toggle');
		return false;
	});

	$('.works-element').viewportChecker({classToAdd: 'works-element-visible'});
	$('.download-link').viewportChecker({classToAdd: 'download-link-animated'});

	var sliderTimer = setInterval(nextSlide,1000);

	$('.reviews').hover(function(){
			clearInterval(sliderTimer)
		},
		function(){
			sliderTimer = setInterval(nextSlide,1000)
	});

	$('.paginator-item').click(function(){
		var n = $('.paginator-item').index(this)
		nextSlide(n);
	});
});

function nextSlide(n) {
	var currentSlide;
	if(arguments.length){
		currentSlide = n;
	} else {
		currentSlide = parseInt($('.reviews').attr('data-current'));
		currentSlide++;
		if(currentSlide >= $('.reviews').children().length - 1){
		currentSlide = 0;
	}
	}

	var slides = $('.review-item'),
	    buttons = $('.paginator-item');

	$('.review-active').removeClass('review-active');
	$('.paginator-active').removeClass('paginator-active');

	$(slides[currentSlide]).addClass('review-active');
	$(buttons[currentSlide]).addClass('paginator-active');

	$('#reviews').attr('data-current',currentSlide);
}