module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
        terserOptions: {
          // ecma: 6,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
          safari10: false,
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }).apply(compiler);
    },
  ]
  },
  externals: {
    jquery: 'jQuery' // Available and loaded through WordPress.
  },
  mode: 'production',
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
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
