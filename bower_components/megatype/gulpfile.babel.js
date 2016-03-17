import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import connect from 'connect';
import serveStatic from 'serve-static';
import http from 'http';

const $ = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*']
});

var paths = {
    styles: 'megatype.scss',
    tests: './test'
};

// =======================================================================
// Tests
// =======================================================================

let httpServer;

gulp.task('test:styles', () => {
    return gulp
        .src(paths.tests + '/fixtures/test.scss')
        .pipe(
            $.sass({
                outputStyle: 'expanded',
                precision: 6,
                includePaths: [
                    './node_modules/susy/sass'
                ]
            })
            .on('error', $.sass.logError)
        )
        .pipe($.postcss([
            require('autoprefixer')({browsers: ['last 3 versions', '> 5%', 'IE >= 9']})
        ]))
        .pipe($.groupCssMediaQueries())
        .pipe(gulp.dest(paths.tests + '/fixtures'))
        .pipe($.size());
});

gulp.task('test:serve', (done) => {
    let app = connect().use(serveStatic('test/fixtures'));
    httpServer = http.createServer(app).listen(8000, done);
});

gulp.task('test:e2e', ['test:styles', 'test:serve'], () => {
    return gulp.src(
        'wdio' +
        (process.env.NODE_ENV === 'test' ? '-sauce' : '') +
        '.conf.js'
    ).pipe($.webdriver()).on('error', () => {
        process.exit(1);
    });
});

gulp.task('test', ['test:e2e'], () => {
    httpServer.close();
});

// =======================================================================
// Styles: compiles sass, autoprefixes, and combines media queries
// =======================================================================
gulp.task('styles', () => {
    return gulp.src(paths.styles)
        .pipe($.sass({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: [
                './node_modules',
                './bower_components'
            ]
        })
        .on('error', $.sass.logError))
        .pipe($.postcss([
            require('autoprefixer')({browsers: ['last 3 versions', '> 5%', 'IE >= 9']})
        ]))
        .pipe($.groupCssMediaQueries())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});


// =======================================================================
// Build task: builds all files and minifies into 'dist'
// =======================================================================
gulp.task('build', ['styles',], () => {});


// =======================================================================
// Default build
// =======================================================================
gulp.task('default', ['build'], () => {});
// alias
gulp.task('dist', ['build'], () => {});


// =======================================================================
// Development watch task.  Does not build anything initially
// =======================================================================
gulp.task('watch', (done) => {
    // watch the source files, and build relevant files
    gulp.watch([
        './**/*.scss'],
        ['styles']
    );
});


// =======================================================================
// Cleans built files
// =======================================================================
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));