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
var access      = require('gulp-accessibility');

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

ACCESSIBILITY
=============
*/

gulp.task('a11y', function() {

  // Use https://github.com/digitoimistodude/gulp-sitemap-generator
  // Go to http://airdev.test/?show_sitemap to get list and paste here
  //var files = ["http:\/\/airdev.test\/2013\/01\/07\/sticky\/","http:\/\/airdev.test\/2012\/01\/07\/template-sticky\/","http:\/\/airdev.test\/test-english-front-page\/","http:\/\/airdev.test\/2016\/08\/12\/uusi-podcast\/","http:\/\/airdev.test\/about\/page-with-a-title-so-long-you-havent-seen-a-title-this-long-before\/","http:\/\/airdev.test\/kauppa\/","http:\/\/airdev.test\/ostoskori\/","http:\/\/airdev.test\/kassa\/","http:\/\/airdev.test\/oma-tili\/","http:\/\/airdev.test\/2015\/12\/06\/moikka-maailma\/","http:\/\/airdev.test\/about-2\/","http:\/\/airdev.test\/about\/page-markup-and-formatting\/","http:\/\/airdev.test\/about\/page-image-alignment\/","http:\/\/airdev.test\/2013\/03\/15\/twitter-embeds\/","http:\/\/airdev.test\/2013\/03\/15\/featured-image-vertical\/","http:\/\/airdev.test\/2013\/03\/15\/featured-image-horizontal\/","http:\/\/airdev.test\/2013\/03\/15\/nested-and-mixed-lists\/","http:\/\/airdev.test\/2013\/03\/15\/more-tag\/","http:\/\/airdev.test\/2013\/03\/15\/excerpt\/","http:\/\/airdev.test\/2013\/01\/11\/markup-and-formatting\/","http:\/\/airdev.test\/2013\/01\/11\/markup-html-tags-and-formatting\/","http:\/\/airdev.test\/2013\/01\/10\/image-alignment\/","http:\/\/airdev.test\/2013\/01\/10\/markup-image-alignment\/","http:\/\/airdev.test\/2013\/01\/09\/text-alignment\/","http:\/\/airdev.test\/2013\/01\/09\/markup-text-alignment\/","http:\/\/airdev.test\/2013\/01\/08\/paginated\/","http:\/\/airdev.test\/2013\/01\/06\/no-content\/","http:\/\/airdev.test\/2013\/01\/05\/non-breaking-text\/","http:\/\/airdev.test\/2013\/01\/05\/title-with-special-characters-2\/","http:\/\/airdev.test\/2013\/01\/05\/title-with-special-characters\/","http:\/\/airdev.test\/2013\/01\/05\/title-with-markup\/","http:\/\/airdev.test\/2013\/01\/05\/markup-title-with-markup\/","http:\/\/airdev.test\/2013\/01\/05\/no-title\/","http:\/\/airdev.test\/2013\/01\/04\/password-protected\/","http:\/\/airdev.test\/2013\/01\/03\/comments\/","http:\/\/airdev.test\/2013\/01\/02\/comments-disabled\/","http:\/\/airdev.test\/2013\/01\/01\/pingbacks-an-trackbacks\/","http:\/\/airdev.test\/2012\/12\/11\/post-format-standard-2\/","http:\/\/airdev.test\/2012\/12\/10\/post-format-gallery-2\/","http:\/\/airdev.test\/2012\/12\/09\/post-format-aside-2\/","http:\/\/airdev.test\/2012\/12\/08\/post-format-chat-2\/","http:\/\/airdev.test\/2012\/12\/07\/post-format-link-2\/","http:\/\/airdev.test\/2012\/12\/06\/post-format-image-caption-2\/","http:\/\/airdev.test\/2012\/12\/05\/post-format-image-2\/","http:\/\/airdev.test\/2012\/12\/04\/post-format-quote-2\/","http:\/\/airdev.test\/2012\/12\/03\/post-format-status-2\/","http:\/\/airdev.test\/2012\/12\/02\/post-format-video-videopress-2\/","http:\/\/airdev.test\/2012\/12\/02\/post-format-video\/","http:\/\/airdev.test\/2012\/12\/01\/post-format-audio-2\/","http:\/\/airdev.test\/2012\/11\/02\/many-categories\/","http:\/\/airdev.test\/2012\/11\/01\/many-tags\/","http:\/\/airdev.test\/2012\/03\/15\/template-featured-image-vertical\/","http:\/\/airdev.test\/2012\/03\/15\/template-featured-image-horizontal\/","http:\/\/airdev.test\/2012\/03\/15\/template-more-tag\/","http:\/\/airdev.test\/2012\/03\/15\/template-excerpt-defined\/","http:\/\/airdev.test\/2012\/03\/14\/template-excerpt-generated\/","http:\/\/airdev.test\/2012\/01\/08\/template-paginated\/","http:\/\/airdev.test\/2012\/01\/04\/template-password-protected\/","http:\/\/airdev.test\/2012\/01\/03\/template-comments\/","http:\/\/airdev.test\/2012\/01\/02\/template-comments-disabled\/","http:\/\/airdev.test\/2012\/01\/01\/template-pingbacks-an-trackbacks\/","http:\/\/airdev.test\/level-1\/level-2\/level-3b\/","http:\/\/airdev.test\/level-1\/level-2\/level-3a\/","http:\/\/airdev.test\/level-1\/level-2b\/","http:\/\/airdev.test\/level-1\/level-2a\/","http:\/\/airdev.test\/page-b\/","http:\/\/airdev.test\/page-a\/","http:\/\/airdev.test\/blog\/","http:\/\/airdev.test\/","http:\/\/airdev.test\/2011\/03\/15\/media-twitter-embeds\/","http:\/\/airdev.test\/2010\/10\/05\/post-format-standard\/","http:\/\/airdev.test\/2010\/09\/10\/post-format-gallery\/","http:\/\/airdev.test\/2010\/09\/09\/post-format-gallery-tiled\/","http:\/\/airdev.test\/2010\/08\/08\/post-format-image\/","http:\/\/airdev.test\/2010\/08\/07\/post-format-image-caption\/","http:\/\/airdev.test\/2010\/08\/06\/post-format-image-linked\/","http:\/\/airdev.test\/about\/clearing-floats\/","http:\/\/airdev.test\/about\/","http:\/\/airdev.test\/2010\/07\/02\/post-format-audio\/","http:\/\/airdev.test\/2010\/06\/03\/post-format-video-wordpresstv\/","http:\/\/airdev.test\/2010\/06\/02\/post-format-video-videopress\/","http:\/\/airdev.test\/2010\/06\/02\/post-format-video-youtube\/","http:\/\/airdev.test\/2010\/05\/09\/post-format-aside\/","http:\/\/airdev.test\/2010\/04\/04\/post-format-status\/","http:\/\/airdev.test\/2010\/03\/07\/post-format-link\/","http:\/\/airdev.test\/2010\/02\/05\/post-format-quote\/","http:\/\/airdev.test\/2010\/01\/08\/post-format-chat\/","http:\/\/airdev.test\/2009\/10\/05\/title-should-not-overflow-the-content-area\/","http:\/\/airdev.test\/2009\/09\/05\/edge-case-no-title\/","http:\/\/airdev.test\/2009\/08\/06\/edge-case-no-content\/","http:\/\/airdev.test\/2009\/07\/02\/edge-case-many-categories\/","http:\/\/airdev.test\/2009\/06\/01\/edge-case-many-tags\/","http:\/\/airdev.test\/2009\/05\/15\/edge-case-nested-and-mixed-lists\/","http:\/\/airdev.test\/level-1\/","http:\/\/airdev.test\/level-1\/level-2\/","http:\/\/airdev.test\/level-1\/level-2\/level-3\/","http:\/\/airdev.test\/about\/page-with-comments-disabled\/","http:\/\/airdev.test\/about\/page-with-comments\/","http:\/\/airdev.test\/lorem-ipsum\/"]

  // Coming soon, see: https://github.com/yargalot/gulp-accessibility/issues/21

  return gulp.src(files)
    .pipe(access({ 
      accessibilityLevel: 'WCAG2AA',
      browser: true,
      reportType: 'json',
      reportLevels: {
        notice: false,
        warning: false,
        error: true
      }
    }))
    .on('error', console.log)
});


/*

STYLES
======
*/

gulp.task('styles', function() {

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
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());

});

/*

SCRIPTS
=======
*/

gulp.task('js', function() {

      gulp.src(
        [
          'js/src/skip-link-focus-fix.js',
          'node_modules/smartmenus/dist/jquery.smartmenus.js',
          'node_modules/moveto/dist/moveTo.js',
          // 'js/src/sticky-nav.js',
          // 'node_modules/slick-carousel/slick/slick.js',
          'node_modules/what-input/dist/what-input.js',
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

  gulp.watch(phpSrc, ['a11y'], browserSync ? browserSync.reload : {});
  gulp.watch(sassSrc, ['styles']);
  gulp.watch(jsSrc, ['js']);

});

/*

DEFAULT
=====

*/

gulp.task('default', ['watch']);
