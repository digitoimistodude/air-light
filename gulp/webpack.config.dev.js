
module.exports = {
  externals: {
    jquery: 'jQuery' // Available and loaded through WordPress.
  },
  mode: 'development',
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: [
            ['airbnb', {
              targets: {
                chrome: 50,
                ie: 11,
                firefox: 45
              }
            }]
          ]
        }
      }]
    }]
  }
};
