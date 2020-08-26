// Dependencies
const { src } = require('gulp');
const scsslintplugin = require('gulp-scss-lint');
const config = require('../config.js');

// Task
function scsslint() {
  return src(config.styles.src, config.scsslintexcludes)

    // Print linter report
    .pipe(scsslintplugin());
}

exports.scsslint = scsslint;
