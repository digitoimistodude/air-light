// Dependencies
const { src } = require('gulp');
const phpcsplugin = require('gulp-phpcs');
const config = require('../config.js');

// Task
function phpcs(cb) {
  return src(config.phpcs.src)

    // Validate files using PHP Code Sniffer
    .pipe(phpcsplugin(config.phpcs.opts))

    // Log all problems that was found
    .pipe(phpcsplugin.reporter('log'));
  cb();
}

exports.phpcs = phpcs;
