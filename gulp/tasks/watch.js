/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-04-22 08:06:03
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-11-23 09:52:24
 */
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

// Watch task
function watchFiles(done) {

  // Init BrowserSync
  bs.init(config.browsersync.src, config.browsersync.opts);

  // Console info
  function consoleInfo(path) {
    console.log(`\x1b[37m[\x1b[35mfileinfo\x1b[37m] \x1b[37mFile \x1b[34m${path} \x1b[37mwas changed.\x1b[0m`);
  }

  // Styles in development environment
  const devstyles = watch(config.styles.watch.development, series('devstyles')).on('error', handleError());
  devstyles.on('change', function(path) { consoleInfo(path); });

  // Styles in production environment
  const prodstyles = watch(config.styles.watch.production, series('prodstyles'));
  prodstyles.on('change', function(path) { consoleInfo(path); });

  // JavaScript
  const javascript = watch(config.js.watch, series('js'));
  javascript.on('change', function(path) { consoleInfo(path); });

  // PHP
  const php = watch(config.php.watch, series('phpcs'), bs.reload);
  php.on('change', function(path) { consoleInfo(path); });

  // Lint styles
  watch(config.styles.watch.development, series('lintstyles'));

  // Finish task
  done();
};

exports.watch = watchFiles;
