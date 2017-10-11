(function ($, window, document) {
	
	$(function () {
		
		var duration = 250,
			$cell = $( '#icons .cell' ),
			$header = $('#header'),
			$main_content = $('#main-content'),
			$nav = $('#nav'),
			$nav_toggle = $('#nav-toggle');
		
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 150
					}, 1000);
					if ( $nav.is(':visible') && $nav.css('position') === 'absolute' ) {
						$nav.stop().slideUp();
					}
					return false;
				}
			}
		});
		
		$nav_toggle.on('click', function() {
			if ( $nav.is(':visible') ) {
				$nav.stop().slideUp();
			} else {
				$nav.stop().slideDown();
			}
		});
		
		$cell.on('click', function() {
			var $original = $(this).find('[data-original]'),
				$outlined = $(this).find('[data-outlined]');
			
			if ( $original.is(':visible') ) {
				$original.fadeOut(duration, function() {
					$outlined.fadeIn(duration);
				});
			} else {
				$outlined.fadeOut(duration, function() {
					$original.fadeIn(duration);
				});
			}
		});
		
		$(window).scroll(function () {
			if ( $main_content.offset().top < ( $header.offset().top + $header.outerHeight() ) ) {
				$header.addClass('filled');
			} else {
				$header.removeClass('filled');
			}
		});

	});
	
}(window.jQuery, window, document));