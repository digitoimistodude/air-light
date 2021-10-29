// Dependencies
const {
  src
} = require('gulp');
const exec = require('gulp-exec');
const config = require('../config.js');

// Task
function lintstyles() {

  return src([config.styles.stylelint.src])

    // Print linter report
    .pipe(exec(`stylelint ` + config.styles.stylelint.cli.src, config.styles.stylelint.cli.options))
    .pipe(exec.reporter(config.styles.stylelint.cli.reportOptions));

}

exports.lintstyles = lintstyles;
