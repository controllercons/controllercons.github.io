const body = document.querySelector('body')

let currentStyle = 'solid'
const styles = {
	'duotone': 'ccd',
	'outline': 'cco',
	'solid'  : 'ccs',
}

const controllercons = {
	'atari-2600': {
		'className': 'cc-atari-2600',
		'glyph'    : '󌀀|󌄀',
		'name'     : 'Atari 2600',
		'year'     : '1977',
		'unicode'  : 'cc000',
		// 'hex'      : '#000000|#fe4520|#fc8a39|#87431c',
	},
	'atari-jaguar': {
		'className': 'cc-atari-jaguar',
		'glyph'    : '󌀁|󌄁',
		'name'     : 'Atari Jaguar',
		'year'     : '1993',
		'unicode'  : 'cc001',
		// 'hex'      : '#000000|#cc0416|#83898e',
	},
	'dreamcast': {
		'className': 'cc-dreamcast',
		'glyph'    : '󌀂|󌄂',
		'name'     : 'Sega Dreamcast',
		'year'     : '1999',
		'unicode'  : 'cc002',
		// 'hex'      : '#cccccc|#d3d6d4|#f4d506|#64c284|#457ad3|#df574a',
	},
	'gamecube': {
		'className': 'cc-gamecube',
		'glyph'    : '󌀃|󌄃',
		'name'     : 'Nintendo GameCube',
		'year'     : '2002',
		'unicode'  : 'cc003',
		// 'hex'      : '#000000|#4a5199|#e4e4e4|#f40e29|#40d0cb|#fdd121|#3750b6',
	},
	'joy-con-l': {
		'className': 'cc-joy-con-l',
		'glyph'    : '󌀄|󌄄',
		'name'     : 'Nintendo Switch (Left Joy-Con)',
		'year'     : '2017',
		'unicode'  : 'cc004',
		// 'hex'      : '#62dce6|#7c8286|#2b2c2e',
	},
	'joy-con-r': {
		'className': 'cc-joy-con-r',
		'glyph'    : '󌀅|󌄅',
		'name'     : 'Nintendo Switch (Right Joy-Con)',
		'year'     : '2017',
		'unicode'  : 'cc005',
		// 'hex'      : '#ff4137|#7c8286|#2b2c2e',
	},
	'joy-cons': {
		'className': 'cc-joy-cons',
		'glyph'    : '󌀆|󌄆',
		'name'     : 'Nintendo Switch (Joy-Cons Grip)',
		'year'     : '2017',
		'unicode'  : 'cc006',
		// 'hex'      : '#62dce6|#ff4137|#7c8286|#2b2c2e',
	},
	'master-system': {
		'className': 'cc-master-system',
		'glyph'    : '󌀇|󌄇',
		'name'     : 'Sega Master System',
		'year'     : '1986',
		'unicode'  : 'cc007',
		// 'hex'      : '#000000|#6c6d73|#be190f',
	},
	'mega-drive': {
		'className': 'cc-mega-drive',
		'glyph'    : '󌀈|󌄈',
		'name'     : 'Sega Mega Drive (Genesis)',
		'year'     : '1990',
		'unicode'  : 'cc008',
		// 'hex'      : '#000000|#bb141a|#4365ab',
	},
	'n64': {
		'className': 'cc-n64',
		'glyph'    : '󌀉|󌄉',
		'name'     : 'Nintendo 64 (N64)',
		'year'     : '1997',
		'unicode'  : 'cc009',
		// 'hex'      : '#555558|#c5c6c6|#dededd|#dd161f|#00934e|#0d4db3|#ffd501',
	},
	'nes': {
		'className': 'cc-nes',
		'glyph'    : '󌀐|󌄐',
		'name'     : 'Nintendo Entertainment System (NES)',
		'year'     : '1985',
		'unicode'  : 'cc010',
		// 'hex'      : '#2c2c2c|#d8d7dd|#979994|#de3a38',
	},
	'ps1': {
		'className': 'cc-ps1',
		'glyph'    : '󌀑|󌄑',
		'name'     : 'Sony PlayStation',
		'year'     : '1995',
		'unicode'  : 'cc011',
		// 'hex'      : '#c1c0c2|#474748|#3dcace|#e36f75|#8eb0d9|#c095bd',
	},
	'ps2': {
		'className': 'cc-ps2',
		'glyph'    : '󌀒|󌄒',
		'name'     : 'Sony PlayStation 2 (DualShock 2)',
		'year'     : '2000',
		'unicode'  : 'cc012',
		// 'hex'      : '#000000|#35353e|#3dcace|#e36f75|#8eb0d9|#c095bd',
	},
	'ps3': {
		'className': 'cc-ps3',
		'glyph'    : '󌀓|󌄓',
		'name'     : 'Sony PlayStation 3 (DualShock 3)',
		'year'     : '2006',
		'unicode'  : 'cc013',
		// 'hex'      : '#000000|#35353e|#3dcace|#e36f75|#8eb0d9|#c095bd',
	},
	'ps4': {
		'className': 'cc-ps4',
		'glyph'    : '󌀔|󌄔',
		'name'     : 'Sony PlayStation 4 (DualShock 4)',
		'year'     : '2013',
		'unicode'  : 'cc014',
		// 'hex'      : '#000000|#35353e|#3dcace|#e36f75|#8eb0d9|#c095bd',
	},
	'ps5': {
		'className': 'cc-ps5',
		'glyph'    : '󌀕|󌄕',
		'name'     : 'Sony PlayStation 5 (DualSense)',
		'year'     : '2020',
		'unicode'  : 'cc015',
		// 'hex'      : '#ecf0f9|#20242d|#9ca1a5|#35353e|#0d5af9',
	},
	'sega-saturn': {
		'className': 'cc-sega-saturn',
		'glyph'    : '󌀖|󌄖',
		'name'     : 'Sega Saturn (US/EU Model 1)',
		'year'     : '1995',
		'unicode'  : 'cc016',
		// 'hex'      : '#000000',
	},
	'snes': {
		'className': 'cc-snes',
		'glyph'    : '󌀗|󌄗',
		'name'     : 'Super Nintendo Entertainment System (SNES)',
		'year'     : '1992',
		'unicode'  : 'cc017',
		// 'hex'      : '#c8c9cd|#7d8388|#0148b4|#c0061c|#f0c640|#00945d|#c8c8e4|#7e69b8',
	},
	'stadia': {
		'className': 'cc-stadia',
		'glyph'    : '󌀘|󌄘',
		'name'     : 'Google Stadia',
		'year'     : '2019',
		'unicode'  : 'cc018',
		// 'hex'      : '#000000|#ffffff|#d3e9e6|#e75d38|#e0ea28|#515353',
	},
	'switch-pro': {
		'className': 'cc-switch-pro',
		'glyph'    : '󌀙|󌄙',
		'name'     : 'Nintendo Switch (Pro Controller)',
		'year'     : '2017',
		'unicode'  : 'cc019',
		// 'hex'      : '#000000|#00000099',
	},
	'virtual-boy': {
		'className': 'cc-virtual-boy',
		'glyph'    : '󌀠|󌄠',
		'name'     : 'Nintendo Virtual Boy',
		'year'     : '1995',
		'unicode'  : 'cc020',
		// 'hex'      : '#000000|#9e9da2|#d70219',
	},
	'wii': {
		'className': 'cc-wii',
		'glyph'    : '󌀤|󌄤',
		'name'     : 'Nintendo Wii (Wii Remote)',
		'year'     : '2006',
		'unicode'  : 'cc024',
		// 'hex'      : '#ffffff|#9e9da2|#6dcff4',
	},
	'wii-classic': {
		'className': 'cc-wii-classic',
		'glyph'    : '󌀡|󌄡',
		'name'     : 'Nintendo Wii (Classic Controller)',
		'year'     : '2006',
		'unicode'  : 'cc021',
		// 'hex'      : '#ffffff|#6dcff4',
	},
	'wii-u': {
		'className': 'cc-wii-u',
		'glyph'    : '󌀣|󌄣',
		'name'     : 'Nintendo Wii U',
		'year'     : '2012',
		'unicode'  : 'cc023',
		// 'hex'      : '#000000|#ffffff|#4da1d2|#de2129',
	},
	'wii-u-pro': {
		'className': 'cc-wii-u-pro',
		'glyph'    : '󌀢|󌄢',
		'name'     : 'Nintendo Wii U (Pro Controller)',
		'year'     : '2012',
		'unicode'  : 'cc022',
		// 'hex'      : '#000000|#de2129',
	},
	'xbox': {
		'className': 'cc-xbox',
		'glyph'    : '󌀩|󌄩',
		'name'     : 'Microsoft Xbox (Duke)',
		'year'     : '2002',
		'unicode'  : 'cc029',
		// 'hex'      : '#000000|#98c300|#ffa900|#eb1112|#789530|#006fd2|#cacaca',
	},
	'xbox-s': {
		'className': 'cc-xbox-s',
		'glyph'    : '󌀦|󌄦',
		'name'     : 'Microsoft Xbox (Controller S)',
		'year'     : '2002',
		'unicode'  : 'cc026',
		// 'hex'      : '#000000|#98c300|#ffa900|#eb1112|#789530|#006fd2|#cacaca',
	},
	'xbox-360': {
		'className': 'cc-xbox-360',
		'glyph'    : '󌀥|󌄥',
		'name'     : 'Microsoft Xbox 360',
		'year'     : '2005',
		'unicode'  : 'cc025',
		// 'hex'      : '#ebebe9|#ffa300|#e60000|#70a900|#0066d1|#687874',
	},
	'xbox-one': {
		'className': 'cc-xbox-one',
		'glyph'    : '󌀧|󌄧',
		'name'     : 'Microsoft Xbox One',
		'year'     : '2013',
		'unicode'  : 'cc027',
		// 'hex'      : '#000000|#ffffff|#f7e20f|#e33537|#7ac159|#009fdd',
	},
	'xbox-series-x': {
		'className': 'cc-xbox-series-x',
		'glyph'    : '󌀨|󌄨',
		'name'     : 'Microsoft Xbox Series X|S',
		'year'     : '2020',
		 'unicode' : 'cc028',
		// 'hex'      : '#000000|#ffffff|#f7e20f|#e33537|#7ac159|#009fdd',
	},
}

document.querySelectorAll('button[data-controllercon]').forEach(item => {
	item.addEventListener('click', event => {
		openModal()

		const button        = event.currentTarget
		const controller    = button.dataset.controllercon
		const controllercon = controllercons[controller]
		const svg           = button.querySelector('.controllercon--' + currentStyle).cloneNode(true);

		let index        = controllercon.glyph.indexOf('|');
		let glyphBefore  = controllercon.glyph.substr(0, index)
		let glyphAfter   = controllercon.glyph.substr(index + 1)
		let style        = styles[currentStyle]

		document.querySelector('#modal-icon').appendChild(svg)

		document.querySelector('.modal__title').innerHTML = controllercon.name + ' <span class="u:color--tint-dark u:font-size--sm">' + controllercon.year + '</span>';

		document.querySelector('#modal-glyph').innerHTML = glyphBefore
		document.querySelector('#modal-glyph').classList = style
		document.querySelector('#modal-glyph-after').innerHTML = glyphAfter

		document.querySelector('#modal-unicode').innerHTML = controllercon.unicode

		document.querySelector('#modal-html').innerHTML = htmlEntities('<span class="' + style + ' ' + controllercon.className + '"></span>')

		document.querySelector('#modal-svg-link').setAttribute('href', '/versions/2.1/svg/' + currentStyle + '/' + controllercon.className.replace('cc-', '') + '.svg').setAttribute('download', controllercon.className.replace('cc-', '') + '.svg')
	})
})

document.querySelectorAll('[data-copy]').forEach(item => {
	item.addEventListener('click', event => {
		const element   = event.currentTarget
		const ariaLabel = element.ariaLabel
		const toCopy    = element.querySelector('[data-copy-target]')

		copyToClipboard(toCopy)

		element.ariaLabel = 'Copied!';

		setTimeout(() => {
			element.ariaLabel = ariaLabel
		}, 2500)
	})
})

document.querySelectorAll('[name="icon_style"]').forEach(item => {
	item.addEventListener('change', event => {
		currentStyle = event.currentTarget.value
		body.classList = currentStyle
	})
})

const modalOverlay = document.querySelector('.modal__overlay')
const modalButton  = document.querySelector('.modal__close')
const modal        = document.querySelector('.modal')

const openModal = () => {
	modal.classList.add('modal--open')
	modalOverlay.classList.add('modal__overlay--active')

	setTimeout(() => {
		modalOverlay.addEventListener('click', closeModal)
	}, 200)
}

const closeModal = () => {
	modal.classList.remove('modal--open')
	modalOverlay.classList.remove('modal__overlay--active')
	modalOverlay.removeEventListener('click', closeModal)
	document.querySelector('#modal-icon').innerHTML = ''
}
modalButton.addEventListener('click', closeModal)

const appHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('load resize', appHeight)
appHeight()

function copyToClipboard(element) {
	var aux = document.createElement("input");
	aux.setAttribute("value", element.textContent);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const expandButton = document.querySelector('.expand .button')

expandButton.addEventListener('click', () => {
	document.querySelector('.expand').classList.toggle('expand--open')
})

for (let i = 0; i < 11; i++) {
	let div        = document.createElement('div');
	let icon       = document.createElement('span');
	let random     = Math.floor(Math.random() * 3);
	let style      = styles[Object.keys(styles)[random]];
	random         = Math.floor(Math.random() * 30);
	let controller = controllercons[Object.keys(controllercons)[random]];

	icon.classList.add(style);
	icon.classList.add(controller.className);

	div.classList.add('hero-grid__cell');
	div.appendChild(icon);
	div.setAttribute('data-scroll-animation', 'true');
	div.style.transitionDelay = Math.random() + 's';

	document.querySelector('.hero-grid').prepend(div);
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate')
		} else {
			entry.target.classList.remove('animate')
		}
	})
});
const scrollAnimation = document.querySelectorAll('[data-scroll-animation]')
scrollAnimation.forEach((item) => observer.observe(item))

const stickyNav = document.querySelector('.grid--content nav')
if (stickyNav.offsetHeight > window.innerHeight) {
	stickyNav.style.position = 'static';
}

const nav       = document.querySelector('.nav')
const navLink   = document.querySelectorAll('.nav-list__link')
const navToggle = document.querySelector('.button--nav-toggle')
navLink.forEach(item => {
	item.addEventListener('click', toggleNav)
})
navToggle.addEventListener('click', toggleNav)

function toggleNav() {
	if (nav.classList.contains('nav--open')) {
		navToggle.classList.remove('is-open')
		navToggle.setAttribute('aria-label', 'Open navigation')
		nav.classList.remove('nav--open')
	} else {
		navToggle.classList.add('is-open')
		navToggle.setAttribute('aria-label', 'Close navigation')
		nav.classList.add('nav--open')
	}
}