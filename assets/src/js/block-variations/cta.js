/**
 * CTA (Call to Action) block variation with Dude defaults
 *
 * @package air-light
 */

/* global wp */

const { __ } = wp.i18n;

const ctaVariation = {
  blockName: 'core/group',
  variation: {
    name: 'dude-cta',
    title: __('CTA', 'air-light'),
    description: __('Call to action section with heading and buttons', 'air-light'),
    isDefault: true,
    attributes: {
      align: 'wide',
      layout: { type: 'constrained' },
    },
    innerBlocks: [
      [
        'core/heading',
        {
          level: 2,
          content: __('Ready to get started?', 'air-light'),
          textAlign: 'center',
        },
      ],
      [
        'core/paragraph',
        {
          content: __(
            'Add a compelling call to action description that encourages visitors to take the next step.',
            'air-light'
          ),
          align: 'center',
        },
      ],
      [
        'core/buttons',
        { layout: { type: 'flex', justifyContent: 'center' } },
        [
          ['core/button', { text: __('Primary action', 'air-light') }],
          [
            'core/button',
            {
              text: __('Secondary action', 'air-light'),
              className: 'is-style-outline',
            },
          ],
        ],
      ],
    ],
    scope: ['inserter'],
  },
};

export default ctaVariation;
