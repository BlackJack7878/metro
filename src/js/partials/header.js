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
			$('.header-menu-item-drop').removeClass('open');
			$(this).addClass('open');
			$('.header-menu-dropdown').each(function(index, el) {
				$(this).css('display', 'none');
			});
			$(this).find('.header-menu-dropdown').css('display', 'flex');
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
			widthParam = 800;
		}
		else {
			widthParam = 500;
		}

		if (Top > widthParam) {
			if (!$('.header-logo').hasClass('open')) {
				var logoSrc = $('.header-logo img').attr('src');
				$('.header-logo img').attr('src', logoSrc.replace('white', 'black'));
				$('.header-logo').css('background-color', '#f6f6f6');
				$('.header-menu-btn').css('background-color', 'black');
				$('.header-menu-btn-bar').css('background-color', '#c09b56');
			}

			if (widthParam === 800) {
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
				
				if (widthParam === 800) {
					$('.header-contact-us').css('display', 'block');
					$('.header-contact-search, .header-contact-client').css('display', 'flex');
				}

			}
		}

	});

	$('.header-contact-search-icon').click(function(event) {
		$('.header-search').css('display', 'block');
		$('.header-search').css('animation', 'Drop 1s ease forwards');
	});
	$('.header-search-btn').click(function(event) {
		$('.header-search').css('animation', 'HideToTop 1s ease forwards');
		$('.header-search-result').css('animation', 'HideToBottom 1s ease forwards');
		setTimeout(function(){
			$('.header-search').css('display', 'none');
			$('.header-search-result').css('display', 'none');
		}, 1000);
	});

	$('.header-search form').submit(function(event) {
		event.preventDefault();
		$('.header-search-result').css('display', 'block');
		$('.header-search-result').css('animation', 'Drop 1s ease forwards');
	});

});