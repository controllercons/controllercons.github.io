(function ($, window, document) {
	
	$(function () {
		
		var duration = 250,
			$cell = $('#icons .cell'),
			$date = $('#date'),
			$nav = $('#nav'),
			$nav_toggle = $('#nav-toggle'),
			$twitter_trigger = $('.twitter-trigger');
		
		$date.html((new Date()).getFullYear());
		
		$('a[href*="#"]:not([href="#"])').click(function () {
			
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 150
					}, 1000, function() {
						if ( $nav.is(':visible') && $nav.css('position') === 'absolute' ) {
							$nav.stop().slideUp();
						}
					});

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
			void(0);
		});
		
		$twitter_trigger.on('click', function() {
			
		});
		
		$(document).on('scroll', onScroll);
		
		onScroll();
	});
	
	function onScroll(event) {

		var scrollPos = $(document).scrollTop(),
			$header = $('#header'),
			$main_content = $('#main-content');
		
		if ( $main_content.offset().top < ( $header.offset().top + $header.outerHeight() ) ) {
			$header.addClass('filled');
		} else {
			$header.removeClass('filled');
		}
		
		$('#nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos ) {
				$('#nav a').removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}
	
}(window.jQuery, window, document));