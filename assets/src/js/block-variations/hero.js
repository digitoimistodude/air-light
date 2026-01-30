/**
 * Hero block variation with Dude defaults
 *
 * @package air-light
 */

/* global wp */

const { __ } = wp.i18n;

// Placeholder image
const placeholderImage = 'https://airwptheme.com/placeholder.png';

const heroVariation = {
  blockName: 'core/cover',
  variation: {
    name: 'dude-hero',
    title: __('Hero', 'air-light'),
    description: __('Full-width hero section with background image', 'air-light'),
    isDefault: true,
    attributes: {
      align: 'full',
      url: placeholderImage,
      dimRatio: 50,
      minHeight: 600,
      minHeightUnit: 'px',
      contentPosition: 'center center',
      isDark: true,
    },
    innerBlocks: [
      [
        'core/heading',
        {
          level: 1,
          content: __('Add your hero heading here', 'air-light'),
          textAlign: 'center',
        },
      ],
      [
        'core/paragraph',
        {
          content: __(
            'This is the hero section. Add a compelling description that captures attention and communicates your main message.',
            'air-light'
          ),
          align: 'center',
        },
      ],
      [
        'core/buttons',
        { layout: { type: 'flex', justifyContent: 'center' } },
        [['core/button', { text: __('Get started', 'air-light') }]],
      ],
    ],
    scope: ['inserter'],
  },
};

export default heroVariation;
