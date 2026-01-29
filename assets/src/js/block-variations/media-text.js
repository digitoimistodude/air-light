/**
 * Media & Text block variation with Dude defaults
 *
 * @package air-light
 */

/* global airLightBlockEditor */

// Placeholder image from theme assets (works across all environments)
const placeholderImage = `${airLightBlockEditor.themeUrl}/assets/dist/img/placeholder.jpg`;

const mediaTextVariation = {
  blockName: 'core/media-text',
  variation: {
    name: 'dude-media-text',
    title: 'Media & Text (Dude)',
    description: 'Media & Text block with Dude defaults',
    isDefault: true,
    attributes: {
      align: 'wide',
      mediaPosition: 'left',
      verticalAlignment: 'center',
      mediaType: 'image',
      mediaUrl: placeholderImage,
      imageFill: true,
    },
    innerBlocks: [
      [
        'core/heading',
        {
          level: 2,
          content: 'Add your heading here',
        },
      ],
      [
        'core/paragraph',
        {
          content:
            'Add a short description that explains your content. This text will help visitors understand what this section is about.',
        },
      ],
      ['core/buttons', {}, [['core/button', { text: 'Call to action' }]]],
    ],
    scope: ['inserter'],
  },
};

export default mediaTextVariation;
