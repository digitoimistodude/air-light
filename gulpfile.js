/*

REQUIRED STUFF
==============
*/

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var notify      = require('gulp-notify');
var prefix      = require('gulp-autoprefixer');
var cleancss    = require('gulp-clean-css');
var uglify      = require('gulp-uglify-es').default;
var concat      = require('gulp-concat');
var util        = require('gulp-util');
var header      = require('gulp-header');
var pixrem      = require('gulp-pixrem');
var exec        = require('child_process').exec;
var rename      = require('gulp-rename');
var stylefmt    = require('gulp-stylefmt');

/*

FILE PATHS
==========
*/

var sassSrc = 'sass/**/*.{sass,scss}';
var sassFile = 'sass/base/global.scss';
var phpSrc = '**/*.php';
var cssDest = 'css';
var customjs = 'js/scripts.js';
var jsSrc = 'js/src/**/*.js';
var jsDest = 'js';

/*

ERROR HANDLING
==============
*/

var handleError = function(task) {
  return function(err) {

      notify.onError({
        message: task + ' failed, check the logs..'
      })(err);

    util.log(util.colors.bgRed(task + ' error:'), util.colors.red(err));
  };
};

/*

BROWSERSYNC
===========

Notes:
   - Add only file types you are working on - if watching the whole themeDir,
     task trigger will be out of sync because of the sourcemap-files etc.
   - Adding only part of the files will also make the task faster

*/

gulp.task('browsersync', function() {

  var files = [
    phpSrc,
    jsSrc
  ];  

  browserSync.init(files, {
    proxy: "airdev.test",
    browser: "Google Chrome",
    open: "external",
    notify: true
  });
});

/*

STYLES
======
*/

gulp.task('styles', function() {

    // Save compressed version
    gulp.src(sassFile)

    .pipe(sass({
      compass: false,
      bundleExec: true,
      sourcemap: false,
      style: 'compressed',
      debugInfo: true,
      lineNumbers: true,
      errLogToConsole: true,
      includePaths: [
        'bower_components/',
        'node_modules/',
        // require('node-bourbon').includePaths
      ],
    }))

    .on('error', handleError('styles'))
    .pipe(prefix('last 3 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
    .pipe(pixrem())
    .pipe(cleancss({
      compatibility: 'ie11',
      level: {
        1: {
          tidyAtRules: true,
          cleanupCharsets: true,
          specialComments: 0
        }
      }
    }, function(details) {
        console.log('[clean-css] Original size: ' + details.stats.originalSize + ' bytes');
        console.log('[clean-css] Minified size: ' + details.stats.minifiedSize + ' bytes');
        console.log('[clean-css] Time spent on minification: ' + details.stats.timeSpent + ' ms');
        console.log('[clean-css] Compression efficiency: ' + details.stats.efficiency * 100 + ' %');
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());


    // Save expanded version
    gulp.src(sassFile)

    .pipe(sass({
      compass: false,
      bundleExec: true,
      sourcemap: false,
      style: 'expanded',
      debugInfo: true,
      lineNumbers: true,
      errLogToConsole: true,
      includePaths: [
        'bower_components/',
        'node_modules/',
        // require('node-bourbon').includePaths
      ],
    }))

    .on('error', handleError('styles'))
    .pipe(prefix('last 3 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
    .pipe(pixrem())
    .pipe(gulp.dest(cssDest))

    // Process the expanded output with Stylefmt
    gulp.src('css/global.css')
    .pipe(stylefmt())
    .pipe(gulp.dest(cssDest))

});

/*

SCRIPTS
=======
*/

gulp.task('js', function() {

      gulp.src(
        [
          'js/src/skip-link-focus-fix.js',
          'node_modules/moveto/dist/moveTo.js',
          // 'js/src/sticky-nav.js',
          // 'node_modules/slick-carousel/slick/slick.js',
          'node_modules/what-input/dist/what-input.js',
          'js/src/navigation.js',
          'js/src/scripts.js'
        ])
        .pipe(concat('all.js'))
        .pipe(uglify({
          compress: true,
          mangle: true}).on('error', function(err) {
            util.log(util.colors.red('[Error]'), err.toString());
            this.emit('end');
          }))
        .pipe(gulp.dest(jsDest));
});

/*

WATCH
=====

*/

gulp.task('watch', ['browsersync'], () => {

  gulp.watch(sassSrc, ['styles']);
  gulp.watch(jsSrc, ['js']);

});

/*

DEFAULT
=====

*/

gulp.task('default', ['watch']);
