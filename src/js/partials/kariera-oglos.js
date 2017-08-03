$(document).ready(function() {
	
	if ($(window).width() > 1250) {
		if ($('.kariera').length) {
			var s = skrollr.init();
		}
	}

	if ($(window).width() > 600) {
		if ($('#svg-kariera-I').length) {
			new Vivus('svg-kariera-I', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
		if ($('#svg-kariera-A').length) {
			new Vivus('svg-kariera-A', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
	}

});