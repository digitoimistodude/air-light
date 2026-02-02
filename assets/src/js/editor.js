/* eslint-disable no-undef */
import registerBlockVariations from './block-variations';
import disableEmbeds from './editor/disable-embeds';

// Register block variations with Dude defaults
wp.domReady(() => {
  registerBlockVariations();
});

// Disable unused embed block variations
wp.domReady(() => {
  disableEmbeds();
});
