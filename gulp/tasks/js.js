// Dependencies
const { dest, src } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const config = require('../config.js');

// Task
function js(cb) {
  return src(config.js.main)
    .pipe(
      webpack({
        externals: {
          jquery: 'jQuery', // Available and loaded through WordPress.
        },
        mode: 'production',
        module: {
          rules: [
            {
              test: /.js$/,
              use: [
                {
                  loader: 'babel-loader',
                },
              ],
            },
          ],
        },
        output: {
          filename: 'all.js',
        },
      }),
    )
    .pipe(concat('all.js'))
    .pipe(
      uglify(config.js.uglify.opts).on('error', function (err) {
        util.log(util.colors.red('[Error]'), err.toString());
        this.emit('end');
      }),
    )
    .pipe(dest(config.js.dest))
  cb();
}

exports.js = js;
