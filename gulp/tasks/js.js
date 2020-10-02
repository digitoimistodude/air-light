// Dependencies
const {
  dest,
  src
} = require('gulp');
const webpack = require('webpack-stream');
const config = require('../config');
const webpackConfig = require('../webpack.config');
const named  = require('vinyl-named');
const eslint = require('gulp-eslint');

// Task
function js() {
  return src(config.js.main)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(dest(config.js.dest));
}

exports.js = js;