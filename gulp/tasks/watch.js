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
  watch(config.styles.watch, series('styles', 'scsslint')).on('error', handleError('styles'));
  watch(config.php.src, series('phpcs')).on('change', bs.reload);
  watch(config.js.watch).on('change', series('js'));
  watch(config.js.watch).on('change', bs.reload);
};

exports.watch = watchfiles;
