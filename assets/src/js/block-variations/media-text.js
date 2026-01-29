/**
 * Media & Text block variation with Dude defaults
 *
 * @package air-light
 */

/* global airLightBlockEditor */

// Placeholder image
const placeholderImage = 'https://airwptheme.com/placeholder.png';

const mediaTextVariation = {
  blockName: 'core/media-text',
  variation: {
    name: 'dude-media-text',
    title: 'Media ja teksti / Media & Text',
    description: 'Media & Text block with Dude defaults',
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
          content: 'Lisää tähän kuvaava otsikko sisällöllesi / Add a descriptive heading for your content here',
        },
      ],
      [
        'core/paragraph',
        {
          content:
            'Kirjoita tähän kappale, joka kertoo tarkemmin aiheesta ja auttaa lukijaa ymmärtämään, mistä tässä osiossa on kyse. Voit käyttää useampia kappaleita tarvittaessa. / Write a paragraph here that tells more about the topic and helps the reader understand what this section is about. You can use multiple paragraphs if needed.',
        },
      ],
      ['core/buttons', {}, [['core/button', { text: 'Toimintakutsu / Call to action' }]]],
    ],
    scope: ['inserter'],
  },
};

export default mediaTextVariation;
