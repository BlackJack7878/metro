$(document).ready(function() {
	if ($(window).width() > 1200) {
		if ($('.oferta').length) {
			var s = skrollr.init();
		}
	}
	
	if ($(window).width() > 600) {
		if ($('.oferta-svg').length) {
			new Vivus('svg-contact-P-1', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-contact-P-2', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-contact-O', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-contact-K', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
	}
});