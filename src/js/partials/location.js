$(document).ready(function() {
	
	if ($('.location').length) {
		$("#loc-slider").unslider({
			autoplay: true,
			infinite: true,
			delay: 10000,
			arrows: false
			// arrows: {
			// 	prev: '<a class="unslider-arrow prev"></a>',
			// 	next: '<a class="unslider-arrow next"></a>',
			// }
		});
		$("#location-gallery-slider").unslider({
			autoplay: true,
			infinite: true,
			delay: 10000,
			arrows: {
				prev: '<a class="unslider-arrow prev"></a>',
				next: '<a class="unslider-arrow next"></a>',
			}
		});
		$("#location-more-slider").unslider({
			autoplay: true,
			infinite: true,
			delay: 10000,
			arrows: {
				prev: '<a class="unslider-arrow prev"></a>',
				next: '<a class="unslider-arrow next"></a>',
			}
		});
		$("#location-more-slider-mob").unslider({
			autoplay: true,
			infinite: true,
			delay: 10000,
			arrows: {
				prev: '<a class="unslider-arrow prev"></a>',
				next: '<a class="unslider-arrow next"></a>',
			}
		});
		$("#location-part-slider").unslider({
			autoplay: true,
			infinite: true,
			delay: 10000,
			arrows: {
				prev: '<a class="unslider-arrow prev"></a>',
				next: '<a class="unslider-arrow next"></a>',
			}
		});
	}

	if ($(window).width() > 1220 && $('.location').length) {
		var s = skrollr.init();
	}

	$(window).scroll(function(event) {
		// console.log($(this).scrollTop());
	});
	
});