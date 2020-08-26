// Export tasks
exports.js = require('./gulp/tasks/js.js').js;
exports.phpcs = require('./gulp/tasks/phpcs.js').phpcs;
exports.scsslint = require('./gulp/tasks/scsslint.js').scsslint;
exports.styles = require('./gulp/tasks/styles.js').styles;
exports.watch = require('./gulp/tasks/watch.js').watch;
exports.default = require('./gulp/tasks/watch.js').watch;
