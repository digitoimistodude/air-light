// Dependencies
const {
  dest,
  src
} = require('gulp');
const bs = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')( require('sass') );
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const config = require('../config.js');

function devstyles() {
  return src(config.styles.src)

    // Try to inject CSS first
    .pipe(bs.stream())

    // Init source maps
    .pipe(sourcemaps.init())

    // Compile SCSS asynchronously
    .pipe(sass.sync(config.styles.opts.development))

    // Run PostCSS plugins
    .pipe(postcss([autoprefixer()]))

    // Write source maps
    .pipe(sourcemaps.write())

    // Save expanded version for development and for BS to inject
    .pipe(dest(config.styles.development))
}

exports.devstyles = devstyles;
