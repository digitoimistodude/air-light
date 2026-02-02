/**
 * Disable unused embed block variations
 *
 * WordPress includes many embed providers by default.
 * This module unregisters the ones we don't typically use
 * to keep the block inserter cleaner.
 *
 * @package air-light
 */

/* global wp */

const disableEmbeds = () => {
  const disabledEmbeds = [
    'amazon-kindle',
    'animoto',
    'bluesky',
    'cloudup',
    'crowdsignal',
    'dailymotion',
    'facebook',
    'flickr',
    'imgur',
    'issuu',
    'kickstarter',
    'mixcloud',
    'pinterest',
    'pocket-casts',
    'reddit',
    'reverbnation',
    'screencast',
    'scribd',
    'smugmug',
    'soundcloud',
    'speaker-deck',
    'spotify',
    'ted',
    'tiktok',
    'tumblr',
    'twitter',
    'videopress',
    'vimeo',
    'wolfram-cloud',
    'wordpress',
    'wordpress-tv',
    'youtube',
  ];

  disabledEmbeds.forEach((embed) => {
    wp.blocks.unregisterBlockVariation('core/embed', embed);
  });
};

export default disableEmbeds;
