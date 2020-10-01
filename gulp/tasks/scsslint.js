// Dependencies
const {
  src
} = require('gulp');
const stylelint = require('gulp-stylelint');
const config = require('../config.js');

// Task
function scsslint() {

  return src(config.styles.src, config.styles.exclude)

    // Print linter report
    .pipe(stylelint(config.styles.stylelint.opts));
}

exports.scsslint = scsslint;
