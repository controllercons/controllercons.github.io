(function ($, window, document) {
	
	$(function () {

		let currentStyle = 'ccs';

		const controllercons = {
			'atari-2600': {
				'className': 'cc-atari-2600',
				'glyph'    : '󌀀|󌄀',
				'name'     : 'Atari 2600',
				'year'     : '1977',
				'unicode'  : 'cc000',
				'hex'      : '#000000|#fe4520|#fc8a39|#87431c',
			},
			'atari-jaguar': {
				'className': 'cc-atari-jaguar',
				'glyph'    : '󌀁|󌄁',
				'name'     : 'Atari Jaguar',
				'year'     : '1993',
				'unicode'  : 'cc001',
				'hex'      : '#000000|#cc0416|#83898e',
			},
			'dreamcast': {
				'className': 'cc-dreamcast',
				'glyph'    : '󌀂|󌄂',
				'name'     : 'Sega Dreamcast',
				'year'     : '1999',
				'unicode'  : 'cc002',
				'hex'      : '#cccccc|#d3d6d4|#f4d506|#64c284|#457ad3|#df574a',
			},
			'gamecube': {
				'className': 'cc-gamecube',
				'glyph'    : '󌀃|󌄃',
				'name'     : 'Nintendo GameCube',
				'year'     : '2002',
				'unicode'  : 'cc003',
				'hex'      : '#000000|#4a5199|#e4e4e4|#f40e29|#40d0cb|#fdd121|#3750b6',
			},
			'joy-con-l': {
				'className': 'cc-joy-con-l',
				'glyph'    : '󌀄|󌄄',
				'name'     : 'Nintendo Switch (Left Joy-Con)',
				'year'     : '2017',
				'unicode'  : 'cc004',
				'hex'      : '#62dce6|#7c8286|#2b2c2e',
			},
			'joy-con-r': {
				'className': 'cc-joy-con-r',
				'glyph'    : '󌀅|󌄅',
				'name'     : 'Nintendo Switch (Right Joy-Con)',
				'year'     : '2017',
				'unicode'  : 'cc005',
				'hex'      : '#ff4137|#7c8286|#2b2c2e',
			},
			'joy-cons': {
				'className': 'cc-joy-cons',
				'glyph'    : '󌀆|󌄆',
				'name'     : 'Nintendo Switch (Joy-Cons Grip)',
				'year'     : '2017',
				'unicode'  : 'cc006',
				'hex'      : '#62dce6|#ff4137|#7c8286|#2b2c2e',
			},
			'master-system': {
				'className': 'cc-master-system',
				'glyph'    : '󌀇|󌄇',
				'name'     : 'Sega Master System',
				'year'     : '1986',
				'unicode'  : 'cc007',
				'hex'      : '#000000|#6c6d73|#be190f',
			},
			'mega-drive': {
				'className': 'cc-mega-drive',
				'glyph'    : '󌀈|󌄈',
				'name'     : 'Sega Mega Drive (Genesis)',
				'year'     : '1990',
				'unicode'  : 'cc008',
				'hex'      : '#000000|#bb141a|#4365ab',
			},
			'n64': {
				'className': 'cc-n64',
				'glyph'    : '󌀉|󌄉',
				'name'     : 'Nintendo 64 (N64)',
				'year'     : '1997',
				'unicode'  : 'cc009',
				'hex'      : '#555558|#c5c6c6|#dededd|#dd161f|#00934e|#0d4db3|#ffd501',
			},
			'nes': {
				'className': 'cc-nes',
				'glyph'    : '󌀐|󌄐',
				'name'     : 'Nintendo Entertainment System (NES)',
				'year'     : '1985',
				'unicode'  : 'cc010',
				'hex'      : '#2c2c2c|#d8d7dd|#979994|#de3a38',
			},
			'ps1': {
				'className': 'cc-ps1',
				'glyph'    : '󌀑|󌄑',
				'name'     : 'Sony PlayStation',
				'year'     : '1995',
				'unicode'  : 'cc011',
				'hex'      : '#c1c0c2|#474748|#3dcace|#e36f75|#8eb0d9|#c095bd',
			},
			'ps2': {
				'className': 'cc-ps2',
				'glyph'    : '󌀒|󌄒',
				'name'     : 'Sony PlayStation 2 (DualShock 2)',
				'year'     : '2000',
				'unicode'  : 'cc012',
				'hex'      : '#000000|#35353e|#3dcace|#e36f75|#8eb0d9|#c095bd',
			},
			'ps3': {
				'className': 'cc-ps3',
				'glyph'    : '󌀓|󌄓',
				'name'     : 'Sony PlayStation 3 (DualShock 3)',
				'year'     : '2006',
				'unicode'  : 'cc013',
				'hex'      : '#000000|#35353e|#3dcace|#e36f75|#8eb0d9|#c095bd',
			},
			'ps4': {
				'className': 'cc-ps4',
				'glyph'    : '󌀔|󌄔',
				'name'     : 'Sony PlayStation 4 (DualShock 4)',
				'year'     : '2013',
				'unicode'  : 'cc014',
				'hex'      : '#000000|#35353e|#3dcace|#e36f75|#8eb0d9|#c095bd',
			},
			'ps5': {
				'className': 'cc-ps5',
				'glyph'    : '󌀕|󌄕',
				'name'     : 'Sony PlayStation 5 (DualSense)',
				'year'     : '2020',
				'unicode'  : 'cc015',
				'hex'      : '#ecf0f9|#20242d|#9ca1a5|#35353e|#0d5af9',
			},
			'sega-saturn': {
				'className': 'cc-sega-saturn',
				'glyph'    : '󌀖|󌄖',
				'name'     : 'Sega Saturn (US/EU Model 1)',
				'year'     : '1995',
				'unicode'  : 'cc016',
				'hex'      : '#000000',
			},
			'snes': {
				'className': 'cc-snes',
				'glyph'    : '󌀗|󌄗',
				'name'     : 'Super Nintendo Entertainment System (SNES)',
				'year'     : '1992',
				'unicode'  : 'cc017',
				'hex'      : '#c8c9cd|#7d8388|#0148b4|#c0061c|#f0c640|#00945d|#c8c8e4|#7e69b8',
			},
			'stadia': {
				'className': 'cc-stadia',
				'glyph'    : '󌀘|󌄘',
				'name'     : 'Google Stadia',
				'year'     : '2019',
				'unicode'  : 'cc018',
				'hex'      : '#000000|#ffffff|#d3e9e6|#e75d38|#e0ea28|#515353',
			},
			'switch-pro': {
				'className': 'cc-switch-pro',
				'glyph'    : '󌀙|󌄙',
				'name'     : 'Nintendo Switch (Pro Controller)',
				'year'     : '2017',
				'unicode'  : 'cc019',
				'hex'      : '#000000|#00000099',
			},
			'virtual-boy': {
				'className': 'cc-virtual-boy',
				'glyph'    : '󌀠|󌄠',
				'name'     : 'Nintendo Virtual Boy',
				'year'     : '1995',
				'unicode'  : 'cc020',
				'hex'      : '#000000|#9e9da2|#d70219',
			},
			'wii': {
				'className': 'cc-wii',
				'glyph'    : '󌀤|󌄤',
				'name'     : 'Nintendo Wii (Wii Remote)',
				'year'     : '2006',
				'unicode'  : 'cc024',
				'hex'      : '#ffffff|#9e9da2|#6dcff4',
			},
			'wii-classic': {
				'className': 'cc-wii-classic',
				'glyph'    : '󌀡|󌄡',
				'name'     : 'Nintendo Wii (Classic Controller)',
				'year'     : '2006',
				'unicode'  : 'cc021',
				'hex'      : '#ffffff|#6dcff4',
			},
			'wii-u': {
				'className': 'cc-wii-u',
				'glyph'    : '󌀣|󌄣',
				'name'     : 'Nintendo Wii U',
				'year'     : '2012',
				'unicode'  : 'cc023',
				'hex'      : '#000000|#ffffff|#4da1d2|#de2129',
			},
			'wii-u-pro': {
				'className': 'cc-wii-u-pro',
				'glyph'    : '󌀢|󌄢',
				'name'     : 'Nintendo Wii U (Pro Controller)',
				'year'     : '2012',
				'unicode'  : 'cc022',
				'hex'      : '#000000|#de2129',
			},
			'xbox': {
				'className': 'cc-xbox',
				'glyph'    : '󌀩|󌄩',
				'name'     : 'Microsoft Xbox (Duke)',
				'year'     : '2002',
				'unicode'  : 'cc029',
				'hex'      : '#000000|#98c300|#ffa900|#eb1112|#789530|#006fd2|#cacaca',
			},
			'xbox-controller-s': {
				'className': 'cc-xbox-controller-s',
				'glyph'    : '󌀦|󌄦',
				'name'     : 'Microsoft Xbox (Controller S)',
				'year'     : '2002',
				'unicode'  : 'cc026',
				'hex'      : '#000000|#98c300|#ffa900|#eb1112|#789530|#006fd2|#cacaca',
			},
			'xbox-360': {
				'className': 'cc-xbox-360',
				'glyph'    : '󌀥|󌄥',
				'name'     : 'Microsoft Xbox 360',
				'year'     : '2005',
				'unicode'  : 'cc025',
				'hex'      : '#ebebe9|#ffa300|#e60000|#70a900|#0066d1|#687874',
			},
			'xbox-one': {
				'className': 'cc-xbox-one',
				'glyph'    : '󌀧|󌄧',
				'name'     : 'Microsoft Xbox One',
				'year'     : '2013',
				'unicode'  : 'cc027',
				'hex'      : '#000000|#ffffff|#f7e20f|#e33537|#7ac159|#009fdd',
			},
			'xbox-series-x': {
				'className': 'cc-xbox-series-x',
				'glyph'    : '󌀨|󌄨',
				'name'     : 'Microsoft Xbox Series X',
				'year'     : '2020',
				 'unicode' : 'cc028',
				'hex'      : '#000000|#ffffff|#f7e20f|#e33537|#7ac159|#009fdd',
			},
		};

		let randomControllercon = function (obj) {
			let keys = Object.keys(obj);
			return obj[keys[ keys.length * Math.random() << 0]];
		};

		let controllercon1 = randomControllercon(controllercons);
		let controllercon2 = randomControllercon(controllercons);

		$('.hero__icon--left').addClass(controllercon1.className);
		$('.hero__icon--right').addClass(controllercon2.className);

		$('.hero__icon').addClass('hero__icon--animate');

		$('.grid--controllercons figure').click(function() {
			let controllercon = controllercons[$(this).data('controllercon')];

			let index       = controllercon.glyph.indexOf("|");
			let glyphBefore = controllercon.glyph.substr(0, index);
			let glyphAfter  = controllercon.glyph.substr(index + 1);
			let svgPath     = currentStyle === 'ccd' ? 'duotone' : (currentStyle === 'cco' ? 'outline' : 'solid');
			let hex         = controllercon.hex.split('|');

			$('.list--hex').empty();
			$('#modal-icon').removeClass();
			$('.modal__title').text(controllercon.name);
			$('.modal__meta').text(controllercon.year);

			$('#modal-glyph').text(glyphBefore);
			$('#modal-glyph-after').text(glyphAfter);

			$('#modal-icon').addClass('dynamic-controllercon ' + currentStyle + ' ' + controllercon.className);
			$('#modal-unicode').text(controllercon.unicode);
			$('#modal-html').text('<span class="' + currentStyle + ' ' + controllercon.className + '"></span>');

			$('#modal-svg-link').attr('href', '/webfont/svg/' + svgPath + '/' + controllercon.className.replace('cc-', '') + '.svg');

			$.each(hex, function(index, value) {
				let style = value == '#ffffff' ? 'border:2px solid var(--colour-primary)' : 'background-color:' + value;
				let li    = '<li><button type="button" class="button button--text" aria-label="Copy Hex" data-balloon-pos="down" data-copy><span class="swatch" style="' + style + '"></span> <span data-copy-target>' + value + '</span></button></li>';
				let html  = $.parseHTML(li);
				$('.list--hex').append(html);
			});

			$('.modal').fadeIn();
			$('.modal__background').fadeIn();
		});

		$('.modal__button').click(function() {
			$('.modal').fadeOut();
			$('.modal__background').fadeOut();
		});

		$('.modal__background').click(function() {
			$('.modal').fadeOut();
			$('.modal__background').fadeOut();
		});
		
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				let target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 100
					}, 1000);
					return false;
				}
			}
		});

		$('.toolbar button').click(function() {
			let cssClass = $(this).data('class');

			if (cssClass) {
				currentStyle = cssClass;

				$('.toolbar__button--active').removeClass('toolbar__button--active');

				$('.dynamic-controllercon').each(function() {
					$(this).animate({
						opacity: 0,
					}, function() {
						$(this).removeClass('ccd ccs cco');
						$(this).addClass(cssClass);
						$(this).animate({
							opacity: 1,
						});
					});
				});

				let modalHtml = $('#modal-html').text();
				let newHtml   = modalHtml.replace(/ccd|ccs|cco/gi, cssClass);
				$('#modal-html').text(newHtml);

				let svgHref = $('#modal-svg-link').attr('href');

				if (svgHref) {
					let svgPath    = currentStyle === 'ccd' ? 'duotone' : (currentStyle === 'cco' ? 'outline' : 'solid');
					let newSvgHref = svgHref.replace(/duotone|outline|solid/gi, svgPath);

					$('#modal-svg-link').attr('href', newSvgHref);
				}
	
				$(this).addClass('toolbar__button--active');

				if (currentStyle === 'ccd') {
					$('.ccd-only').fadeIn();
				} else {
					$('.ccd-only').fadeOut();
				}
			}
		});

		$(document).on('click', '[data-copy]', function() {
			let $this             = $(this);
			let copyElement       = $this.find('[data-copy-target]');
			let originalAriaLabel = $this.attr('aria-label');

			copyToClipboard(copyElement);
			$this.attr('aria-label', 'Copied!');

			setTimeout(function() {
				$this.attr('aria-label', originalAriaLabel);
			}, 2500);
		});
		
		$(document).on('scroll', onScroll);
		
		onScroll();
	});
	
	function onScroll(event) {

		let scrollPosition = $(document).scrollTop();
		const $header      = $('#site-header');
		const $content     = $('#main-content');
		
		if ( $content.offset().top < ( $header.offset().top + $header.outerHeight() ) ) {
			$header.addClass('background-gradient');
		} else {
			$header.removeClass('background-gradient');
		}
		
		$('.nav--main a').each(function () {
			let currLink = $(this);
			let refElement = $(currLink.attr("href"));
			if (refElement.position().top - 100 <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition ) {
				$('.nav--main a').removeClass("active");
				currLink.addClass("active");
			} else {
				currLink.removeClass("active");
			}
		});
	}

	function copyToClipboard(element) {
		var aux = document.createElement("input");
		aux.setAttribute("value", $(element).text());
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
	}
	
}(window.jQuery, window, document));