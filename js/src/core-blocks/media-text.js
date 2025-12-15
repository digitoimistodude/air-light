/**
 * @file media-text.js
 * @description Configure core/media-text block defaults and restrictions
 */

// Allowed blocks inside media-text content area
const ALLOWED_BLOCKS = [
  'core/heading',
  'core/paragraph',
  'core/buttons',
  'core/button',
];

// Set default attributes and restrictions for core/media-text block
wp.hooks.addFilter(
  'blocks.registerBlockType',
  'air-light/media-text-defaults',
  (settings, name) => {
    if (name !== 'core/media-text') {
      return settings;
    }

    return {
      ...settings,
      allowedBlocks: ALLOWED_BLOCKS,
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
