$(document).ready(function() {
	if ($(window).width() > 1240) {
		if ($('.zespol').length) {
			var s = skrollr.init();
		}
	}

	$('.firma-image-person, .zespol-person').click(function(event) {
		var target = '#' + $(this).attr('target');
		$(target).css('display', 'block');
	});

	$('.firma-person-mob-close').click(function(event) {
		$(this).closest('.firma-person-mob').css('display', 'none');
	});
	
	if ($(window).width() > 600) {
		if ($('.zespol-svg-z').length) {
			new Vivus('svg-firma-Z', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-zespol-R', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-zespol-Z', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
	}

});