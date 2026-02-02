/**
 * Media & Text block variation with Dude defaults
 *
 * Features:
 * - Image works as cover (object-fit: cover)
 * - Media width control hidden
 * - Adjustable padding (No padding, M padding, L padding)
 *
 * @package air-light
 */

/* global airLightBlockEditor, wp */

// Internationalization utilities
// @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
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
      className: 'is-style-has-m-padding',
    },
    innerBlocks: [
      [
        'core/heading',
        {
          level: 2,
          content: __(
            'Add a descriptive heading for your content here',
            'air-light'
          ),
        },
      ],
      [
        'core/paragraph',
        {
          content: __(
            'This is the media-text "Text part". You can write a paragraph here that tells more about the topic and helps the reader understand what this section is about. You can use multiple paragraphs if needed.',
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

// Hide media width control by targeting the ToolsPanelItem that contains it
// WordPress doesn't provide a native way to disable this control in variations,
// so we inject CSS to hide it from the block inspector.
//
// Implementation details from WordPress Gutenberg source code:
// - The control is a RangeControl component wrapped in a ToolsPanelItem
// - Located in InspectorControls of the MediaTextEdit component
// - Label: "Media width"
//
// @link https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/media-text/edit.js
// @link https://developer.wordpress.org/block-editor/reference-guides/components/tools-panel-item/
// @link https://developer.wordpress.org/block-editor/reference-guides/components/range-control/
wp.domReady(() => {
  const style = document.createElement('style');
  style.id = 'air-light-hide-media-width';
  style.textContent = `
    /* Hide the ToolsPanelItem containing the media width RangeControl */
    /* Target by the grid item that contains a RangeControl as its child */
    .components-tools-panel-item:has(.components-range-control__wrapper) {
      display: none !important;
    }

    /* Fallback: hide any RangeControl in media-text inspector */
    .block-editor-block-inspector__card + div .components-range-control__wrapper {
      display: none !important;
    }

    /* Hide resizable box handle on the block itself */
    .wp-block-media-text .components-resizable-box__handle {
      display: none !important;
    }

    /* Hide alignment controls for media-text block */
    .wp-block-media-text.is-selected .block-editor-block-toolbar .block-editor-block-alignment-control {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
});

export default mediaTextVariation;
