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
const size = require('gulp-size');
const config = require('../config.js');

function prodstyles() {
  return src(config.styles.src)

    // Compile first time to CSS to be able to parse CSS files
    .pipe(sass(config.styles.opts.development))

    // Production settings
    .pipe(sass.sync(config.styles.opts.production))

    // Run PostCSS plugins
    .pipe(postcss([autoprefixer(), calcFunction(), colormin(), cssnano(config.cssnano)]))

    // Output production CSS size
    .pipe(size(config.size))

    // Save the final version for production
    .pipe(dest(config.styles.production));
}

exports.prodstyles = prodstyles;
