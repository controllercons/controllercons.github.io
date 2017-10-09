(function ($, window, document) {
	
	$(function () {
		
		var duration = 250,
			$cell = $( '#icons .cell' );
		
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 150
					}, 1000);
					return false;
				}
			}
		});
		
		$cell.on( 'click', function() {
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

	});
	
}(window.jQuery, window, document));