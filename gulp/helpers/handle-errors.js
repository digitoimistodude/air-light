// Dependencies
const notify = require('gulp-notify');
const color  = require('ansi-colors');

// General error handling
const handleError = function (task) {
  return function (err) {
    // TODO: We need to hide default console output "Error in plugin "gulp-dart-sass""
    // https://github.com/gulpjs/gulp/discussions/2577

    if (typeof err !== 'undefined') {
      // [log] Uncomment to show the full error object
      //console.log(err);

      // ----------------------------------------------
      // Normalize error responses
      var report = ['\n'];
      var notifyMessage = '';

      if (err.plugin == 'gulp-eslint') {
        report.push(color.magenta('Plugin: ') + err.plugin     + '\n');
        report.push(color.magenta('File:   ') + err.fileName   + '\n');
        report.push(color.magenta('Line:   ') + err.lineNumber + '\n');
        report.push(color.magenta('Note:   ') + err.message    + '\n');
        notifyMessage = 'JS linter found errors.';
      }

      if (err.plugin === 'gulp-dart-sass') {
        report.push(color.magenta('Plugin: ') + err.plugin          + '\n');
        report.push(color.magenta('File:   ') + err.relativePath    + '\n');
        report.push(color.magenta('Line:   ') + err.line            + '\n');
        report.push(color.magenta('Column: ') + err.column          + '\n');
        report.push(color.magenta('Note:   ') + err.messageOriginal + '\n');
        notifyMessage = err.relativePath + '\n' + err.line + ':' + err.column;
      }

      if (err.plugin == 'gulp-stylelint') {
        notifyMessage = 'CSS linter found errors.';
      }

      if (err.plugin === 'gulp-uglify') {
        report.push(color.magenta('Plugin: ') + err.plugin         + '\n');
        report.push(color.magenta('Path:   ') + err.fileName       + '\n');
        report.push(color.magenta('File:   ') + err.cause.filename + '\n');
        report.push(color.magenta('Line:   ') + err.cause.line     + '\n');
        report.push(color.magenta('Column: ') + err.cause.col      + '\n');
        report.push(color.magenta('Note:   ') + err.cause.message  + '\n');
        notifyMessage = err.cause.filename + '\n' + err.cause.line + ':' + err.cause.col;
      }

      // ----------------------------------------------
      // Show error in console
      console.error(report.join(''));

      // ----------------------------------------------
      // Fire Mac/Windows notification for error
      notify({
        title:   'Gulp task failed — see console',
        message: notifyMessage,
        sound:   'Sosumi' // Sound for Mac. See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
      }).write(err);
  }
  };
};

module.exports = {
  handleError
};
