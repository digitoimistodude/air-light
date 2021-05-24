// Dependencies
const {
  dest,
  src
} = require('gulp');
const Fiber = require('fibers');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-dart-sass');

// Using dart-sass in development because want to have CSS injected at once (from 50ms to 500ms)
sass.compiler = require('sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const config = require('../config.js');

function devstyles() {
  return src(config.styles.src)

    // Init source maps
    .pipe(sourcemaps.init())

    // Compile SCSS asynchronously
    .pipe(sass({
      includePaths: config.styles.opts.development.includePaths,
      fiber: Fiber
    }))

    // Run PostCSS plugins
    .pipe(postcss([autoprefixer()]))

    // Write source maps
    .pipe(sourcemaps.write())

    // Save expanded version for development and for BS to inject
    .pipe(dest(config.styles.development))
}

exports.devstyles = devstyles;
