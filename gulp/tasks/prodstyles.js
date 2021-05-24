// Dependencies
const {
  dest,
  src
} = require('gulp');
const Fiber = require('fibers');
const sass = require('gulp-dart-sass');

// Using node-sass in production because we don't care how much it takes (from 200ms to 2s)
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleancss = require('gulp-clean-css');
const config = require('../config.js');

function prodstyles() {
  return src(config.styles.src)

    // Compile first time to CSS to be able to parse CSS files
    .pipe(sass(config.styles.opts.development))

    // Run PostCSS plugins
    .pipe(postcss([autoprefixer()]))

    // Production settings
    .pipe(sass(config.styles.opts.production))

    // Compress and minify CSS files
    .pipe(cleancss(config.cleancss.opts,
      function (details) {
        console.log('[clean-css] Original: ' + details.stats.originalSize / 1000 + ' kB');
        console.log('[clean-css] Minified: ' + details.stats.minifiedSize / 1000 + ' kB');
        console.log('[clean-css] Compression time: ' + details.stats.timeSpent + ' ms');
        console.log('[clean-css] Compression rate: ' + details.stats.efficiency * 100 + ' %');
      }), )

    // Save the final version for production
    .pipe(dest(config.styles.production));
}

exports.prodstyles = prodstyles;
