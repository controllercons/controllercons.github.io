let mix = require('laravel-mix');

mix.js('src/js/script.js', 'dist/js');

mix.sass('src/scss/style.scss', 'dist/css', {
	sassOptions: {
		outputStyle: 'expanded'
	}
}).options({
	processCssUrls: false,
	postCss: [
		require('postcss-custom-properties')
	]
});