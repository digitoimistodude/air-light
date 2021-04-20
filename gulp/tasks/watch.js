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
  watch(config.styles.watch, series('devstyles')).on('error', handleError('styles'));
  watch(config.styles.watch, series('prodstyles', 'lintstyles')).on('error', handleError('styles'));
  watch(config.php.watch, series('phpcs')).on('change', bs.reload);
  watch(config.js.watch).on('change', series('js'), bs.reload);
};

exports.watch = watchfiles;
