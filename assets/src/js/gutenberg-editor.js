/* eslint-disable no-undef */
import registerBlockVariations from './block-variations';

// Register block variations with Dude defaults
wp.domReady(() => {
  registerBlockVariations();
});

// Declare the blocks you'd like to style.
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'boxed',
  label: 'Laatikko',
});

// Register media-text padding styles
wp.blocks.registerBlockStyle('core/media-text', {
  name: 'no-padding',
  label: wp.i18n.__('No padding', 'air-light'),
});

wp.blocks.registerBlockStyle('core/media-text', {
  name: 'has-m-padding',
  label: wp.i18n.__('M padding', 'air-light'),
  isDefault: true,
});

wp.blocks.registerBlockStyle('core/media-text', {
  name: 'has-l-padding',
  label: wp.i18n.__('L padding', 'air-light'),
});

// Deregister some unused embed blocks
wp.domReady(() => {
  wp.blocks.unregisterBlockVariation('core/embed', 'amazon-kindle');
  wp.blocks.unregisterBlockVariation('core/embed', 'bluesky');
  wp.blocks.unregisterBlockVariation('core/embed', 'pinterest');
  wp.blocks.unregisterBlockVariation('core/embed', 'crowdsignal');
  wp.blocks.unregisterBlockVariation('core/embed', 'soundcloud');
  wp.blocks.unregisterBlockVariation('core/embed', 'twitter');
  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress');
  wp.blocks.unregisterBlockVariation('core/embed', 'spotify');
  wp.blocks.unregisterBlockVariation('core/embed', 'flickr');
  wp.blocks.unregisterBlockVariation('core/embed', 'animoto');
  wp.blocks.unregisterBlockVariation('core/embed', 'cloudup');
  wp.blocks.unregisterBlockVariation('core/embed', 'vimeo');
  wp.blocks.unregisterBlockVariation('core/embed', 'youtube');
  wp.blocks.unregisterBlockVariation('core/embed', 'dailymotion');
  wp.blocks.unregisterBlockVariation('core/embed', 'imgur');
  wp.blocks.unregisterBlockVariation('core/embed', 'issuu');
  wp.blocks.unregisterBlockVariation('core/embed', 'kickstarter');
  wp.blocks.unregisterBlockVariation('core/embed', 'mixcloud');
  wp.blocks.unregisterBlockVariation('core/embed', 'pocket-casts');
  wp.blocks.unregisterBlockVariation('core/embed', 'reddit');
  wp.blocks.unregisterBlockVariation('core/embed', 'reverbnation');
  wp.blocks.unregisterBlockVariation('core/embed', 'screencast');
  wp.blocks.unregisterBlockVariation('core/embed', 'scribd');
  wp.blocks.unregisterBlockVariation('core/embed', 'smugmug');
  wp.blocks.unregisterBlockVariation('core/embed', 'speaker-deck');
  wp.blocks.unregisterBlockVariation('core/embed', 'tumblr');
  wp.blocks.unregisterBlockVariation('core/embed', 'tiktok');
  wp.blocks.unregisterBlockVariation('core/embed', 'ted');
  wp.blocks.unregisterBlockVariation('core/embed', 'videopress');
  wp.blocks.unregisterBlockVariation('core/embed', 'wolfram-cloud');
  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress-tv');
  wp.blocks.unregisterBlockVariation('core/embed', 'facebook');
});
