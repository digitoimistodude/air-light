const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
  ...defaultConfig,
  entry: {
    'latest-articles': './blocks/latest-articles/index.js',
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name]/index.js'
  },
};
