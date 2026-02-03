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
// TODO: Fetch by ID in the real theme, add example as a code comment

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
      style: {
        spacing: {
          padding: {
            top: 'var:preset|spacing|30',
            bottom: 'var:preset|spacing|30',
          },
          margin: {
            top: 'var:preset|spacing|none',
            bottom: 'var:preset|spacing|none',
          },
        },
      },
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

// Hide some controls by targeting the ToolsPanelItem that contains them.
// WordPress doesn't provide a native way to disable these controls in variations,
// so we inject CSS to hide them from the block inspector when media-text is selected.
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
  // Add global styles for controls that should always be hidden
  const globalStyle = document.createElement('style');
  globalStyle.id = 'air-light-media-text-global';
  globalStyle.textContent = `
    /* Hide resizable box handle on the block itself */
    .wp-block-media-text .components-resizable-box__handle {
      display: none !important;
    }

    /* Hide alignment controls for media-text block */
    .wp-block-media-text.is-selected .block-editor-block-toolbar .block-editor-block-alignment-control {
      display: none !important;
    }
  `;
  document.head.appendChild(globalStyle);

  // Add conditional styles that are toggled when media-text is selected
  const conditionalStyle = document.createElement('style');
  conditionalStyle.id = 'air-light-media-text-conditional';
  document.head.appendChild(conditionalStyle);

  // Function to hide/show sidebar controls based on selected block
  function toggleMediaTextControls() {
    const selectedBlock = wp.data
      .select('core/block-editor')
      .getSelectedBlock();
    const isMediaText =
      selectedBlock && selectedBlock.name === 'core/media-text';

    if (isMediaText) {
      conditionalStyle.textContent = `
        /* Hide typography panel for media-text block only */
        .typography-block-support-panel {
          display: none !important;
        }

        /* Hide gradient controls */
        .color-block-support-panel .components-circular-option-picker__swatches,
        .color-block-support-panel button[aria-label*="Gradient"],
        .color-block-support-panel button[aria-label*="gradient"],
        .color-block-support-panel .components-tab-panel__tabs button[id$="-gradient"] {
          display: none !important;
        }
      `;

      // Hide media width control by finding label with specific text
      setTimeout(() => {
        const labels = document.querySelectorAll(
          '.components-base-control__label'
        );
        labels.forEach((label) => {
          if (
            label.textContent === 'Median leveys' ||
            label.textContent === 'Media width'
          ) {
            const toolsPanelItem = label.closest(
              '.components-tools-panel-item'
            );
            if (toolsPanelItem) {
              toolsPanelItem.style.display = 'none';
            }
          }
        });
      }, 100);
    } else {
      conditionalStyle.textContent = '';
    }
  }

  // Listen for block selection changes
  wp.data.subscribe(toggleMediaTextControls);
});

export default mediaTextVariation;
