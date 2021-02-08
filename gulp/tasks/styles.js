// Dependencies
const {
  dest,
  src
} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cleancss = require('gulp-clean-css');
const config = require('../config.js');
const {
  handleError
} = require('../helpers/handle-errors.js');
const bs = require('browser-sync');
const notify = require('gulp-notify');
const mqpacker = require('mqpacker');

function styles(done) {
  return src(config.styles.main, config.styles.exclude)
    .pipe(sass(config.styles.opts.development))

    // Run PostCSS plugins
    .pipe(postcss([autoprefixer(), mqpacker()]))

    // Save expanded version for development
    .pipe(dest(config.styles.dest))

    // Production settings
    .pipe(sass(config.styles.opts.production))

    .pipe(cleancss(config.cleancss.opts,
      function (details) {
        console.log('[clean-css] Original: ' + details.stats.originalSize / 1000 + ' kB');
        console.log('[clean-css] Minified: ' + details.stats.minifiedSize / 1000 + ' kB');
        console.log('[clean-css] Compression time: ' + details.stats.timeSpent + ' ms');
        console.log('[clean-css] Compression rate: ' + details.stats.efficiency * 100 + ' %');
      }), )

    // Save minified version for production
    .pipe(rename(config.rename.min))
    .pipe(dest(config.styles.dest))

    // Inject changes to browser
    .pipe(bs.stream());

  done();
}

function gutenbergstyles(done) {

  return src(config.styles.gutenberg)
    .pipe(sass(config.styles.opts.development))

    // Production settings
    .pipe(sass(config.styles.opts.production))
    .pipe(postcss([autoprefixer()]))

    .pipe(cleancss(config.cleancss.opts,
      function (details) {
        console.log('[clean-css] Original: ' + details.stats.originalSize / 1000 + ' kB');
        console.log('[clean-css] Minified: ' + details.stats.minifiedSize / 1000 + ' kB');
        console.log('[clean-css] Compression time: ' + details.stats.timeSpent + ' ms', );
        console.log('[clean-css] Compression rate: ' + details.stats.efficiency * 100 + ' %', );
      }), )

    // Save minified version for production
    .pipe(rename(config.rename.min))
    .pipe(dest(config.styles.dest))

    // Inject changes to browser
    .pipe(bs.stream());

  done();
}

exports.styles = styles;
exports.gutenbergstyles = gutenbergstyles;
