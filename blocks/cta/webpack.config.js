const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

// Custom importer for Sass that resolves paths
const customSassImporter = (url) => {
  // If the import starts with 'sass/', resolve it to the sass directory
  if (url.startsWith('sass/')) {
    const resolvedPath = path.resolve(__dirname, '../../', url);
    return { file: resolvedPath };
  }
  // Otherwise, let Sass handle it normally
  return null;
};

module.exports = {
  ...defaultConfig,
  resolve: {
    ...defaultConfig.resolve,
    alias: {
      ...defaultConfig.resolve.alias,
      '../../fonts': path.resolve(__dirname, '../../fonts'),
    },
  },
  module: {
    ...defaultConfig.module,
    rules: defaultConfig.module.rules.map((rule) => {
      if (rule.test && rule.test.toString().includes('scss')) {
        rule.use = rule.use.map((loader) => {
          if (typeof loader === 'string' && loader.includes('sass-loader')) {
            return {
              loader: loader,
              options: {
                sassOptions: {
                  importer: customSassImporter,
                },
              },
            };
          }
          if (typeof loader === 'object' && loader.loader && loader.loader.includes('sass-loader')) {
            return {
              ...loader,
              options: {
                ...loader.options,
                sassOptions: {
                  ...(loader.options?.sassOptions || {}),
                  importer: customSassImporter,
                },
              },
            };
          }
          return loader;
        });
      }
      return rule;
    }),
  },
};