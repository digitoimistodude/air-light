module.exports = {
  ignorePatterns: ['**/js/dev/*.js', '**/js/prod/*.js', '**/node_modules/*.js', 'temp.js', 'js/src/front-end.js', '**/gulp/**/*.js', '**/gulp/*.js', 'gulpfile.js'],
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb/base',
  rules: {
    indent: ['error', 2],
  },
  env: {
    browser: true,
    jquery: true,
  },
};
