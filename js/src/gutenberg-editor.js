/* eslint-disable no-undef */
// Declare the blocks you'd like to style.
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'boxed',
  label: 'Laatikko',
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

// When document is ready as in when blocks are fully loaded
window.addEventListener('load', () => {
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   *
   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/
   */
  // eslint-disable-next-line
  const initializeBlock = function ($block) {
    // Your scripts here
  };

  // Initialize dynamic block preview (editor).
  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
  }
});
