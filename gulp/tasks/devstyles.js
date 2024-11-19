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
const mergeLonghand = require('postcss-merge-longhand');
const mergeAdjacentRules = require('postcss-merge-rules');
const minifyGradients = require('postcss-minify-gradients');
const normalizePositions = require('postcss-normalize-positions');
const normalizeUrl = require('postcss-normalize-url');
const uniqueSelectors = require('postcss-unique-selectors');
const zIndex = require('postcss-zindex');
const config = require('../config.js');

function devstyles() {
  return src(config.styles.src)
    .pipe(bs.stream())
    .pipe(sourcemaps.init())
    .pipe(sass.sync(config.styles.opts.development))
    .pipe(postcss([
      autoprefixer(),
      colormin(),
      calcFunction(),
      discardEmpty(),
      mergeLonghand(),
      mergeAdjacentRules(),
      minifyGradients(),
      normalizePositions(),
      normalizeUrl(),
      zIndex(),
      uniqueSelectors()
    ]))
    .pipe(sourcemaps.write())
    .pipe(dest(config.styles.development))
}

exports.devstyles = devstyles;
