// Dependencies
const {
  dest,
  src
} = require('gulp');
const sass = require('gulp-sass')( require('sass') );
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
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
const size = require('gulp-size');
const config = require('../config.js');

function prodstyles() {
  return src(config.styles.src)

    // Compile first time to CSS to be able to parse CSS files
    .pipe(sass(config.styles.opts.development))

    // Compile SCSS synchronously
    .pipe(sass.sync(config.styles.opts.production))

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
      uniqueSelectors(),
      zIndex(),
      cssnano(config.cssnano)
    ]))

    // Output production CSS size
    .pipe(size(config.size))

    // Save the final version for production
    .pipe(dest(config.styles.production));
}

exports.prodstyles = prodstyles;
