$(document).ready(function() {
	
	if ($(window).width() > 1250) {
		if ($('.partner').length) {
			var s = skrollr.init();
		}
	}

	if ($(window).width() > 600) {
		if ($('.svg-quote').length) {
			new Vivus('svg-quote-1', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-quote-2', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-quote-3', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-quote-4', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-quote-5', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
	}

});