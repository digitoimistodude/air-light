/*

REQUIRED STUFF
==============
*/

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var browsersync  = require('browser-sync').create();
var notify       = require('gulp-notify');
var prefix       = require('gulp-autoprefixer');
var cleancss     = require('gulp-clean-css');
var uglify       = require('gulp-uglify-es').default;
var concat       = require('gulp-concat');
var util         = require('gulp-util');
var header       = require('gulp-header');
var pixrem       = require('gulp-pixrem');
var exec         = require('child_process').exec;
var rename       = require('gulp-rename');
var stylefmt     = require('gulp-stylefmt');
var debug        = require('gulp-debug');
var scsslint     = require('gulp-scss-lint');
var cache        = require('gulp-cached');
var phpcs        = require('gulp-phpcs');
var validatehtml = require('gulp-w3c-html-validation');

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

browsersync
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

  browsersync.init(files, {
    proxy: "airdev.test",
    browser: "Google Chrome",
    open: false,
    notify: true,
    reloadDelay: 1000
  });
});

/*

STYLES
======
*/

var helpers = function( file ) {
    var currentdirectory = process.cwd() + '/';
    var modifiedfile = file.path.replace( currentdirectory, '' );
    var filename = modifiedfile.replace(/^.*[\\\/]/, '')
    var correctdir = modifiedfile.replace( filename, '' );

    gulp.src(modifiedfile)
        // Run current file through stylefmt
        .pipe(stylefmt({ configFile: '.stylelintrc' }))

        // Overwrite
        .pipe(gulp.dest(correctdir))
};

gulp.task('scss-lint', function() {
  gulp.src([sassSrc, '!sass/navigation/_burger.scss', '!sass/base/_normalize.scss'])
    .pipe(scsslint());
});

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
        //console.log('[clean-css] Original size: ' + details.stats.originalSize + ' bytes');
        //console.log('[clean-css] Minified size: ' + details.stats.minifiedSize + ' bytes');
        console.log('[clean-css] Time spent on minification: ' + details.stats.timeSpent + ' ms');
        console.log('[clean-css] Compression efficiency: ' + details.stats.efficiency * 100 + ' %');
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(cssDest))
    .pipe(browsersync.stream());


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

    // Process the expanded output with Stylefmt
    .pipe(stylefmt({ configFile: './.stylelintrc' }))
    .pipe(gulp.dest(cssDest))
    .pipe(browsersync.stream());

});

/*

PHPCS
======
*/

gulp.task('phpcs', function() {

  gulp.src(phpSrc)

    // Validate files using PHP Code Sniffer
    .pipe(phpcs({
      bin: '/usr/local/bin/phpcs',
      standard: './phpcs.xml',
      warningSeverity: 0
    }))

    // Log all problems that was found
    .pipe(phpcs.reporter('log'));
});

/*

VALIDATE HTML
=============
*/

gulp.task('validatehtml', function() {
  return gulp.src([phpSrc, '!functions.php', '!node_modules/**/*', '!inc/**/*'])
    .pipe(validatehtml({
        generateReport: false,
        useTimeStamp: false,
        errorTemplate: null,
        reportpath: false,
        doctype: 'HTML5',
        relaxerror: [/XML processing/g,
        /role is unnecessary for element/g,
        /Text not allowed in element “ol” in this context/g,
        /Text not allowed in element “ul” in this context/g,
        /Stray end tag/g,
        /Stray start tag/g,
        /Stray doctype/g,
        /Unsupported character encoding name/g,
        /CSS:/g,
        /Try escaping it as/g,
        /Attribute “<\?php”/g,
        /Attribute “post_/g,
        /An ID must not contain whitespace/g,
        /Attribute “\?” not allowed on element/g,
        /Attribute “\$/g,
        /Bad value “%s”/g,
        /Bad value “<\?php/g,
        /Bad value “post/g,
        /Attribute “if”/g,
        /Attribute “\(”/g,
        /Attribute “\)”/g,
        /Attribute “:”/g,
        /Saw “<” when expecting an attribute name/g,
        /Article lacks heading/g,
        /Element “head” is missing a required instance of child element/g,
        /Start tag seen without seeing a doctype first/g,
        /Illegal character in path segment/g,
        /is not serializable as XML/g,
        /End tag seen without seeing a doctype first/g,
        /Non-space characters found without seeing a doctype first/g,
        /End of file seen without seeing a doctype first/g,
        /Consider adding a “lang” attribute to the “html”/g,
        /"End tag for  “body” seen/g,
        /The character encoding was not declared/g,
        /Empty heading./g,
        /Cannot recover after last error/g,
        /The document is not mappable to XML/g]
    }))
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

// Run the JS task followed by a reload
gulp.task('js-watch', ['js'], browsersync.reload);
gulp.task('watch', ['browsersync'], function() {

  gulp.watch(sassSrc, ['styles', 'scss-lint']).on( 'change', helpers );
  gulp.watch(phpSrc, ['phpcs', 'validatehtml']);
  gulp.watch(jsSrc, ['js-watch']);

});

/*

DEFAULT
=====

*/

gulp.task('default', ['watch']);
