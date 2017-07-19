$(document).ready(function() {

	$('.footer-up').click(function(event){
		event.preventDefault();
		var target = $(this).attr('to');
		$('html, body').animate({scrollTop:$('#' + target).position().top}, 2000);
	});
	
	$('.header-menu-btn').css('animation', 'Drop 1s ease 0.3s forwards');
	$('.header-logo').css('animation', 'Drop 1s ease 0.5s forwards');
	$('.header-contact-btn').css('animation', 'Drop 1s ease 0.3s forwards');
	$('.header-contact-client').css('animation', 'Right 1s ease 1.3s forwards');
	$('.header-contact-search').css('animation', 'Right 1s ease 1.3s forwards');
	$('.header-contact-us').css('animation', 'Apear 1s ease 1.3s forwards');

	$('.main-head-text').css('animation', 'Under 2s ease 0.5s forwards');
	$('.main-head-btn').css('animation', 'Under 1s ease 1.5s forwards');

	if ($(window).width() > 900) {
		if ($('.blog-article-main').length) {
			var s = skrollr.init();
		}

		$(window).scroll(function(event) {
			var top = $(this).scrollTop();
			// Home page animations
			$('.main-head-text').css('top', (-(top * 0.06 - 0)*6) + 'px');
			$('.main-head-btn').css('top', (-(top * 0.06 - 0)*6) + 'px');

			$('.main-oferta-header').css('top', (-(top * 0.06 - 60)*3) + 'px');
			$('.main-oferta-image').css('top', (-(top * 0.06 - 70)*5) + 'px');
			$('.main-oferta-block').css('top', (-(top * 0.06 - 65)*9) + 'px');
			$('.main-oferta-O').css('top', (-(top * 0.06 - 57)*5) + 'px');

			$('.main-invest-header').css('top', (-(top * 0.06 - 60)*3) + 'px');
			$('.main-invest-column-1').css('top', (-(top * 0.06 - 60)*7) + 'px');
			$('.main-invest-column-2').css('top', (-(top * 0.06 - 60)*9) + 'px');
			$('.main-invest-column-3').css('top', (-(top * 0.06 - 60)*5) + 'px');
			$('.main-invest-N').css('top', (-(top * 0.06 - 50)*7) + 'px');

			$('.main-bank-header').css('top', (-(top * 0.06 - 155)*3) + 'px');
			$('.main-bank-image').css('top', (-(top * 0.06 - 100)*5) + 'px');
			$('.main-bank-block').css('top', (-(top * 0.06 - 155)*9) + 'px');
			$('.main-bank-btn').css('top', (-(top * 0.06 - 196)*9) + 'px');
			$('.main-bank .next').css('top', (-(top * 0.06 - 202.5)*9) + 'px');
			$('.main-bank .prev').css('top', (-(top * 0.06 - 202.5)*9) + 'px');
			$('.main-bank-B').css('top', (-(top * 0.06 - 155)*5) + 'px');

			// Blog page animations
			$('.blog-article-main .blog-article-image').css('top', (-(top * 0.06 - 25)*5) + 'px');
			$('.blog-article-main .blog-article-head').css('top', (-(top * 0.06 - 25)*2) + 'px');
			$('.blog-article-main .blog-article-date').css('top', (-(top * 0.06 - 25)*2) + 'px');
			$('.blog-article-main .blog-article-text').css('top', (-(top * 0.06 - 25)*3) + 'px');
			$('.blog-list-top-banner').css('top', (-(top * 0.06 - 25)*3) + 'px');
		});

		$('.btn-anim').waypoint(function(e, direction){
			$(this['element']).each(function(index, el) {
				$('.btn-anim-horizontal-1', this).css('animation', 'HorizontalTop 0.5s forwards');
				$('.btn-anim-vertical-2', this).css('animation', 'VerticalRight 0.5s 0.5s forwards');
				$('.btn-anim-horizontal-2', this).css('animation', 'HorizontalBottom 0.5s 1s forwards');
				$('.btn-anim-vertical-1', this).css('animation', 'VerticalLeft 0.5s 1.5s forwards');
			});
		}, {offset: '120%'});

		$('.footer').waypoint(function(e, direction){
			$(this['element']).each(function(index, el) {
				$(this).css('animation', 'UnderLittle 2s forwards');
			});
		}, {offset: '90%'});
	}

	if ($(window).width() > 600) {
		if ($('#my-svg-O').length) {
			new Vivus('my-svg-O', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('my-svg-N', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
			new Vivus('my-svg-B', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
	}

});