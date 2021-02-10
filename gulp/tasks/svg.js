const {
  dest,
  src
} = require('gulp');

const config = require('../config');
const {
  handleError
} = require('../helpers/handle-errors.js');

const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const named = require('vinyl-named');
const svgSpriteOptions = {
  mode: {
    defs: true,
  },
}

function svg() {
  return src(config.svg.src)
  	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
    }))
    .pipe(svgSprite(svgSpriteOptions))
    .pipe(named())
		.pipe(dest(config.svg.dest));
}

exports.svg = svg;