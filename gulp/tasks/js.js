// Hide deprecation warnings
process.env.NODE_PENDING_DEPRECATION = 0;

// Dependencies
const {
  dest,
  src
} = require('gulp');
const webpack = require('webpack-stream');
const config = require('../config');
const {
  handleError
} = require('../helpers/handle-errors.js');
const webpackConfigProduction = require('../webpack.config.prod.js');
const webpackConfigDevelopment = require('../webpack.config.dev.js');
const named = require('vinyl-named');
const eslint = require('gulp-eslint');

// Task
function js(done) {
  const lintedJs = src(config.js.src)
  .pipe(eslint())
  .pipe(eslint.format());

  const production = lintedJs
    .pipe(named())
    .pipe(webpack(webpackConfigProduction))
    .on('error', handleError())
    .pipe(dest(config.js.production));

  const development = lintedJs
    .pipe(named())
    .pipe(webpack(webpackConfigDevelopment))
    .on('error', handleError())
    .pipe(dest(config.js.development));

    done();
}

exports.js = js;
