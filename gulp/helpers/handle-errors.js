// Dependencies
const notify = require('gulp-notify');
const util = require('gulp-util');

// Better CSS error reporting
const printGulpPluginErrorBeautifully = require('@wulechuan/printer-for-errors-of-gulp-plugins');
const exampleSourceFileBasePath = '.';
const errorOfGlupPluginsPrintingConfigurations = {
  // This simply helps the logger print shorter paths
  // so that file paths looks better in narrow console windows.
  basePathToShortenPrintedFilePaths: exampleSourceFileBasePath,

  colorTheme: {
    heading: {
      lineColor: 'magenta',
    },
  },
};

// General error handling
const handleError = function (task) {
  return function (err) {
    notify.onError({
      message: task + ' failed, check the logs...',
    })(err);

    // util.log(util.colors.bgRed(task + ' error:'), util.colors.red(err));
    printGulpPluginErrorBeautifully(
      err,
      errorOfGlupPluginsPrintingConfigurations,
    );
  };
};

module.exports = { printGulpPluginErrorBeautifully, handleError };
