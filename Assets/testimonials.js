jQuery(document).ready(function($){
	//create the slider
	$('.testimonials-carousel-wrapper').flexslider({
		selector: ".testimonials-carousel > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: false,
		start: function(){
			$('.testimonials-carousel').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});
});
