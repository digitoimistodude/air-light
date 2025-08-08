module.exports = {
  root: true,
  ignorePatterns: ['**/js/dev/*.js', '**/js/prod/*.js', '**/node_modules/*.js', '**/gulp/**/*.js', '**/gulp/*.js', 'gulpfile.js'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@wordpress/babel-preset-default']
    }
  },
  rules: {
    indent: ['error', 2],
  },
  env: {
    browser: true,
    jquery: true,
    es6: true,
  },
};
