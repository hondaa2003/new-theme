const mix = require('laravel-mix');

mix
  .setPublicPath('src/assets')
  .sass('resources/sass/theme.scss', 'styles/theme.css')
  .js('resources/js/theme.js', 'js/theme.js')
  .options({
    processCssUrls: false,
    postCss: [require('autoprefixer')]
  });
