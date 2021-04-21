// Dependencies
const {
  src
} = require('gulp');
const stylelint = require('gulp-stylelint');
const config = require('../config.js');

// Task
function lintstyles() {

  return src([config.styles.stylelint.src])

    // Print linter report
    .pipe(stylelint(config.styles.stylelint.opts));
}

exports.lintstyles = lintstyles;
