/**
 * @file media-text.js
 * @description Configure core/media-text block defaults
 */

// Set default attributes for core/media-text block
wp.hooks.addFilter(
  'blocks.registerBlockType',
  'air-light/media-text-defaults',
  (settings, name) => {
    if (name !== 'core/media-text') {
      return settings;
    }

    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        isStackedOnMobile: {
          ...settings.attributes.isStackedOnMobile,
          default: true,
        },
      },
    };
  }
);
