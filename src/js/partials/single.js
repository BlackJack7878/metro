$(document).ready(function() {
	
	$("#blog-slider").unslider({
		autoplay: true,
		infinite: true,
		delay: 5000,
		arrows: false
	});

	if ($(window).width() > 1220 && $('.single').length) {
		var s = skrollr.init();
	}
	
});