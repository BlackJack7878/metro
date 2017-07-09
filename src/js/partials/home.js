$(document).ready(function() {
	
	$('#main-invest-slider').unslider({
		autoplay: true,
		infinite: true,
		delay: 5000,
		arrows: false
	});

	$('#main-bank-slider').unslider({
		autoplay: false,
		infinite: true,
		delay: 5000,
		arrows: {
			//  Unslider arrows
			prev: '<a class="unslider-arrow prev"></a>',
			next: '<a class="unslider-arrow next"></a>',
		}
	});

	$()

});