module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {},
            mangle: true,
            module: false,
            format: {
              comments: false,
            },
          },
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
            ['@babel/preset-env', {
              modules: false,
              useBuiltIns: 'usage',
              corejs: 3,
              targets: {
                esmodules: true
              }
            }]
          ]
        }
      }]
    }]
  }
};
