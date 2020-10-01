// Dependencies
const {
  watch,
  series
} = require('gulp');
const bs = require('browser-sync').create();
const config = require('../config.js');
const {
  handleError
} = require('../helpers/handle-errors.js');

// Task
function watchfiles() {
  bs.init(config.browsersync.src, config.browsersync.opts);
  watch(config.styles.src, series('styles', 'gutenbergstyles', 'scsslint')).on('error', handleError('styles'));
  watch(config.php.src, series('phpcs')).on('change', bs.reload);
  watch(config.js.src, series('js')).on('change', bs.reload);
};

exports.watch = watchfiles;
