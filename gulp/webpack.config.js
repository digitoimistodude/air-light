module.exports = {
  externals: {
    jquery: 'jQuery', // Available and loaded through WordPress.
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                    corejs: '3.3',
                    targets: 'ie 11, >0.25%, not dead',
                    forceAllTransforms: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
