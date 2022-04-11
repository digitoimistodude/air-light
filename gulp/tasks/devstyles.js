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
const calcFunction = require('postcss-calc');
const colormin = require('postcss-colormin');
const discardEmpty = require('postcss-discard-empty');
const discardUnused = require('postcss-discard-unused');
const mergeLonghand = require('postcss-merge-longhand');
const mergeAdjacentRules = require('postcss-merge-rules');
const minifyFontValues = require('postcss-minify-font-values');
const minifyGradients = require('postcss-minify-gradients');
const normalizePositions = require('postcss-normalize-positions');
const normalizeUrl = require('postcss-normalize-url');
const uniqueSelectors = require('postcss-unique-selectors');
const zIndex = require('postcss-zindex');
const config = require('../config.js');

function devstyles() {
  return src(config.styles.src)

    // Try to inject CSS first
    .pipe(bs.stream())

    // Init source maps
    .pipe(sourcemaps.init())

    // Compile SCSS synchronously
    .pipe(sass.sync(config.styles.opts.development))

    // Run PostCSS plugins
    .pipe(postcss([
      autoprefixer(),
      colormin(),
      calcFunction(),
      discardEmpty(),
      discardUnused(),
      mergeLonghand(),
      mergeAdjacentRules(),
      minifyFontValues(),
      minifyGradients(),
      normalizePositions(),
      normalizeUrl(),
      zIndex(),
      uniqueSelectors()
    ]))

    // Write source maps
    .pipe(sourcemaps.write())

    // Save expanded version for development and for BS to inject
    .pipe(dest(config.styles.development))
}

exports.devstyles = devstyles;
