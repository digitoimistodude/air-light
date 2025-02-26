
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
