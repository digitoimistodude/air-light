/**
 * Media & Text block variation with Dude defaults
 *
 * @package air-light
 */

/* global airLightBlockEditor, wp */

const { __ } = wp.i18n;

// Placeholder image
const placeholderImage = 'https://airwptheme.com/placeholder.png';

const mediaTextVariation = {
  blockName: 'core/media-text',
  variation: {
    name: 'dude-media-text',
    title: __('Media & Text', 'air-light'),
    description: __('Media & Text block with Dude defaults', 'air-light'),
    isDefault: true,
    attributes: {
      align: 'wide',
      mediaPosition: 'left',
      verticalAlignment: 'center',
      mediaType: 'image',
      mediaUrl: placeholderImage,
      imageFill: true,
      mediaWidth: 50,
    },
    innerBlocks: [
      [
        'core/heading',
        {
          level: 2,
          content: __('Add a descriptive heading for your content here', 'air-light'),
        },
      ],
      [
        'core/paragraph',
        {
          content: __(
            'Write a paragraph here that tells more about the topic and helps the reader understand what this section is about. You can use multiple paragraphs if needed.',
            'air-light'
          ),
        },
      ],
      [
        'core/buttons',
        {},
        [['core/button', { text: __('Call to action', 'air-light') }]],
      ],
    ],
    scope: ['inserter'],
  },
};

export default mediaTextVariation;
