$(document).ready(function() {

	$("#header-slider").unslider({
		autoplay: true,
		infinite: true,
		delay: 5000,
		arrows: false
	});

	$('.header-menu-btn').click(function(event) {
		if (!$(this).hasClass('open')) {
			$(this).addClass('open');
			$('.header-logo').addClass('open');

			if ($(window).scrollTop() > 800) {
				var logoSrc = $('.header-logo img').attr('src');
				$('.header-logo img').attr('src', logoSrc.replace('black', 'white'));
				$('.header-logo').css('background-color', '#f6f6f6');
				$('.header-menu-btn').css('background-color', 'black');
				$('.header-menu-btn-bar').css('background-color', '#c09b56');
			}

			$('.header-menu').css('display', 'block');
			$('.header-menu').css('animation', 'Left 1s ease forwards');
		}
		else {
			$(this).removeClass('open');
			$('.header-logo').removeClass('open');

			if ($(window).scrollTop() > 850) {
				var logoSrc = $('.header-logo img').attr('src');
				$('.header-logo img').attr('src', logoSrc.replace('white', 'black'));
				$('.header-logo').css('background-color', '#f6f6f6');
				$('.header-menu-btn').css('background-color', 'black');
				$('.header-menu-btn-bar').css('background-color', '#c09b56');
			}
			else {
				var logoSrc = $('.header-logo img').attr('src');
				$('.header-logo img').attr('src', logoSrc.replace('black', 'white'));
				$('.header-logo').css('background-color', 'black');
				$('.header-menu-btn').css('background-color', 'white');
				$('.header-menu-btn-bar').css('background-color', 'black');
			}

			$('.header-menu').css('animation', 'HideToLeft 1s ease forwards');
			setTimeout(function() {
				$('.header-menu').css('display', 'none');
			}, 1000);
		}
	});

	$('.header-menu-item-drop').click(function(event) {
		if (!$(this).hasClass('open')) {
			$('.header-menu-item-drop').each(function(index, el) {
				$(this).removeClass('open');				
			});
			$(this).addClass('open');
			$('.header-menu-dropdown').each(function(index, el) {
				$(this).css('display', 'none');
			});
			if ($(window).width() > 550) {
				$(this).find('.header-menu-dropdown').css('display', 'flex');
				$(this).find('.header-menu-dropdown').css('display', '-webkit-flex');
				$(this).find('.header-menu-dropdown').css('display', '-ms-flexbox');
			}
			else {
				$(this).find('.header-menu-dropdown').css('display', 'block');
			}
			$(this).find('.header-menu-dropdown').css('animation', 'Left 1s ease forwards');
		}
		else {
			$(this).removeClass('open');
			$('.header-menu-item-drop').removeClass('open')
			$('.header-menu-dropdown').each(function(index, el) {
				$(this).css('display', 'none');
			});
			$(this).find('.header-menu-dropdown').css('display', 'none');
		}
	});

	$(window).scroll(function(event) {
		var Top = $(this).scrollTop();

		if ($(this).width() > 770) {
			if ($('.main-head').length) {
				widthParam = 800;
			}
			else if ($('.blog-head').length) {
				widthParam = 300;
			}

		}
		else {
			if ($('.main-head').length) {
				widthParam = 500;
			}
			else if ($('.blog-head').length) {
				widthParam = 300;
			}
		}

		if (Top > widthParam) {
			if (!$('.header-logo').hasClass('open')) {
				var logoSrc = $('.header-logo img').attr('src');
				$('.header-logo img').attr('src', logoSrc.replace('white', 'black'));
				$('.header-logo').css('background-color', '#f6f6f6');
				$('.header-menu-btn').css('background-color', 'black');
				$('.header-menu-btn-bar').css('background-color', '#c09b56');
			}

			if ($('.header-contact-btn').css('display') != 'none') {
				$('.header-contact-us, .header-contact-search, .header-contact-client')
				.css('display', 'none');
			}
		}
		else {
			if (!$('.header-logo').hasClass('open')) {
				var logoSrc = $('.header-logo img').attr('src');
				$('.header-logo img').attr('src', logoSrc.replace('black', 'white'));
				$('.header-logo').css('background-color', 'black');
				$('.header-menu-btn').css('background-color', 'white');
				$('.header-menu-btn-bar').css('background-color', 'black');

				if ($('.header-contact-btn').css('display') != 'none') {
					$('.header-contact-us').css('display', 'block');
					$('.header-contact-search, .header-contact-client').css('display', 'flex');
				}

			}
		}

	});

	$('.header-contact-search-icon').click(function(event) {
		$('.header-search').css('display', 'block');
		$('.header-search').css('animation', 'Right 1s ease forwards');
		$('.header-contact-search, .header-contact-client').css('display', 'none');
	});
	$('.header-search-btn').click(function(event) {
		$('.header-search').css('animation', 'HideToRight 1s ease forwards');
		$('.header-search-result').css('animation', 'HideToBottom 1s ease forwards');
		$('.header-contact-search, .header-contact-client').css('display', 'flex');
		$('.header-contact-search, .header-contact-client').css('display', '-webkit-flex');
		$('.header-contact-search, .header-contact-client').css('display', '-ms-flex');
	});

	$('.header-search form').submit(function(event) {
		event.preventDefault();
		$('.header-search-result').css('display', 'block');
		$('.header-search-result').css('animation', 'Drop 1s ease forwards');
	});

	if ($(window).width() <= 600) {
		$('.footer-up-wrapper').insertAfter('.content-form');
	}

});