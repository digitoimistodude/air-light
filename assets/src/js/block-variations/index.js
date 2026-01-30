/**
 * Block variations index
 *
 * Registers all block variations with Dude defaults.
 * Add new variations by importing them and adding to the variations array.
 *
 * @package air-light
 */

import mediaTextVariation from './media-text';

// Add all block variations here
const variations = [
  mediaTextVariation,
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
