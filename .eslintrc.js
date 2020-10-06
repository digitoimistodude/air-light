module.exports = {
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
