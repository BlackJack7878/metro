$(document).ready(function() {
	
	$("#blog-slider").unslider({
		autoplay: true,
		infinite: true,
		delay: 5000,
		arrows: false
	});

	if ($('#map').length) {
		$.getScript( 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCf8UoGGt-KmYu_KmOVv9qzI4Cijqnw_Kk', function( data, textStatus, jqxhr ) {
			MapSetup();
		});
	}

	if ($(window).width() > 1200) {
		if ($('.contact').length) {
			var s = skrollr.init();
		}
	}
	
	if ($(window).width() > 600) {
		if ($('.contact-svg').length) {
			new Vivus('svg-contact-K', {
				type: 'delayed',
				duration: 120,
				animTimingFunction: Vivus.EASE
			});
		}
	}

});

function MapSetup() {
	var map,
	map_styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}],
	map_center = {
		lat: 52.236810,
		lng: 21.000716
	},
	map_location_main = {
		lat: 52.236696,
		lng: 21.000809
	},
	map_location_2 = {
		lat: 54.379394,
		lng: 18.604945
	},
	map_location_3 = {
		lat: 50.057305,
		lng: 19.960787
	},
	map_location_4 = {
		lat: 52.406870,
		lng: 16.922127
	},
	pin = $('#map').attr('data-marker');
	pin_active = $('#map').attr('data-marker-active');

	if( $(window).width() <= 768 ) {
		map_center = map_location_main;
	}

	map = new google.maps.Map(document.getElementById('map'), {
		center: map_center,
		scrollwheel: false,
		zoom: 6,
		minZoom: 2,
		maxZoom: 16,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false,
		styles: map_styles
	});

	var marker = new google.maps.Marker({
		position: map_location_main,
		map: map,
		icon: pin_active,
		id: 'contact-loc-1'
	});

	var marker2 = new google.maps.Marker({
		position: map_location_2,
		map: map,
		icon: pin,
		id: 'contact-loc-2'
	});

	var marker3 = new google.maps.Marker({
		position: map_location_3,
		map: map,
		icon: pin,
		id: 'contact-loc-3'
	});

	var marker4 = new google.maps.Marker({
		position: map_location_4,
		map: map,
		icon: pin,
		id: 'contact-loc-4'
	});

	var center = map.getCenter();
	var markers = [marker, marker2, marker3, marker4];

	$(markers).each(function(index, el) {
		google.maps.event.addListener(this, "click", function (e) {
			$(markers).each(function(index, el) {
				this.setIcon(this.icon.replace('pin-active.', 'pin.'));
			});

			var idBlock = '#' + this.id;
			$('#contact-loc-1, #contact-loc-2, #contact-loc-3, #contact-loc-4').css('display', 'none');
			$(idBlock).css('display', 'block');

			this.setIcon(this.icon.replace('pin.', 'pin-active.'));
		});
	}); 

	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(center);
	});

	if( $('html').hasClass('touchevents') ) {
		map.setOptions({ 'draggable': false });
	}
}