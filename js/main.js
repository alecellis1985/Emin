(function () {
	new WOW().init();

	$('.dropdown').hover(
		function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		},
		function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		}
	);

	$('.dropdown-menu').hover(
		function () {
			$(this).stop(true, true);
		},
		function () {
			$(this).stop(true, true).delay(200).fadeOut();
		}
	);

	$('.imgStats').hover(
		function () {
			$(this).find('.text').stop(true, true).delay(200).fadeIn();
		},
		function () {
			$(this).find('.text').stop(true, true).delay(200).fadeOut();
		}
	);
	$('.dropdown.display a').trigger('mouseover');

	$('.dropdown.display a').on('click', function (event) {
		$('.dropdown.display').css('height', '50px');
		event.stopPropagation();
		$('.dropdown.display a').trigger('mouseover');
	})

	$('.dropdown a').on('click', function (event) {
		$('.dropdown').css('height', '50px');
		event.stopPropagation();
		$('.dropdown.display a').trigger('mouseover');
	})

})();