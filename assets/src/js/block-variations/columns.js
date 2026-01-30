/**
 * Columns block variation with Dude defaults
 *
 * @package air-light
 */

/* global wp */

const { __ } = wp.i18n;

const columnsVariation = {
  blockName: 'core/columns',
  variation: {
    name: 'dude-columns',
    title: __('Columns (3-col)', 'air-light'),
    description: __('Three equal columns with placeholder content', 'air-light'),
    attributes: {
      align: 'wide',
    },
    innerBlocks: [
      [
        'core/column',
        {},
        [
          [
            'core/heading',
            {
              level: 3,
              content: __('Column heading', 'air-light'),
            },
          ],
          [
            'core/paragraph',
            {
              content: __(
                'Add content for this column. You can include text, images, or other blocks.',
                'air-light'
              ),
            },
          ],
        ],
      ],
      [
        'core/column',
        {},
        [
          [
            'core/heading',
            {
              level: 3,
              content: __('Column heading', 'air-light'),
            },
          ],
          [
            'core/paragraph',
            {
              content: __(
                'Add content for this column. You can include text, images, or other blocks.',
                'air-light'
              ),
            },
          ],
        ],
      ],
      [
        'core/column',
        {},
        [
          [
            'core/heading',
            {
              level: 3,
              content: __('Column heading', 'air-light'),
            },
          ],
          [
            'core/paragraph',
            {
              content: __(
                'Add content for this column. You can include text, images, or other blocks.',
                'air-light'
              ),
            },
          ],
        ],
      ],
    ],
    scope: ['inserter'],
  },
};

export default columnsVariation;
