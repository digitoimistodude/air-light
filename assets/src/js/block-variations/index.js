/**
 * Block variations index
 *
 * Registers all block variations with Dude defaults.
 * Add new variations by importing them and adding to the variations array.
 *
 * @package air-light
 */

import mediaTextVariation from './media-text';
import heroVariation from './hero';
import ctaVariation from './cta';
import columnsVariation from './columns';

// Add all block variations here
const variations = [
  mediaTextVariation,
  heroVariation,
  ctaVariation,
  columnsVariation,
];

/**
 * Register all block variations
 */
const registerBlockVariations = () => {
  variations.forEach(({ blockName, variation }) => {
    wp.blocks.registerBlockVariation(blockName, variation);
  });
};

export default registerBlockVariations;
