$(document).ready(function() {
	if ($(window).width() > 1240) {
		if ($('.firma').length) {
			var s = skrollr.init();
		}
	}

	$('.firma-logo').waypoint(function(e, direction){
		$(this['element']).each(function(index, el) {
			$(this).css('animation', 'Apear 2s forwards');
		});
	}, {offset: '90%'});

	$('.firma-image-person').click(function(event) {
		var target = '#' + $(this).attr('target');
		$(target).css('display', 'block');
	});

	$('.firma-person-mob-close').click(function(event) {
		$(this).closest('.firma-person-mob').css('display', 'none');
	});
	
	if ($(window).width() > 600) {
		if ($('.firma-svg-z').length) {
			new Vivus('svg-firma-Z', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('svg-firma-M', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
	}
});