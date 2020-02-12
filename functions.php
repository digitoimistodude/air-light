<?php
/**
 * Gather all bits and pieces together.
 * If you end up having multiple post types, taxonomies,
 * hooks and functions - please split those to their
 * own files under /inc and just require here.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-01-22 14:16:53
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * The current version of the theme.
 */
define( 'AIR_LIGHT_VERSION', '4.9.9' );

/**
 * Theme settings
 */

$theme_settings = [
  // Set image sizes & content width
  'image_sizes' => [
    'small' => 300,
    'medium' => 700,
    'large' => 1200,
  ],
  'content_width' => 800,

  'default_featured_image' => get_theme_file_uri( 'images/default.jpg' ),

  'logo' => '/svg/logo.svg',

  // Set theme support
  'theme_support' => [
    'automatic-feed-links' => [],
    'title-tag' => [],
    'post-thumbnails' => [],
    'html5' => [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ],
  ],

  // Set theme textdomain
  'textdomain' => 'air-light',

  // Set menu locations
  'menu_locations' => [
    'primary' => __( 'Primary Menu', 'air-light' ),
  ],

  // Set up taxonomies
  // TODO Instructions how to add taxonomies
  'taxonomies' => [
    'example' => [
      'name'       => 'Example',
      'post_types' => [ 'post', 'page' ],
    ],
  ],

  // Set up custom post types
  // TODO Instructions how to add post types

  'post_types' => [
    'contact' => 'Contact',
  ],

  /**
   * Gutenberg -related settings
   */

  // If you want to use classic editor somewhere, define it here
  'use_classic_editor' => [ 'page' ],

  // Don't restrict blocks
  // 'allowed_blocks' => 'all',

  // Restrict to only selected blocks
  'allowed_blocks' => [
    // Set default blocks allowed in every post type
    'default' => [
      'core/archives',
      'core/audio',
      'core/button',
      'core/categories',
      'core/code',
      'core/column',
      'core/columns',
      // 'core/coverImage',
      'core/embed',
      'core/file',
      'core/freeform',
      'core/gallery',
      'core/heading',
      'core/html',
      'core/image',
      'core/latestComments',
      'core/latestPosts',
      'core/list',
      'core/more',
      'core/nextpage',
      'core/paragraph',
      'core/preformatted',
      'core/pullquote',
      'core/quote',
      'core/reusableBlock',
      'core/separator',
      'core/shortcode',
      'core/spacer',
      'core/subhead',
      'core/table',
      'core/textColumns',
      'core/verse',
      'core/video',
    ],
    'post' => [
      'core/coverImage', // This block is now allowed only in posts
    ],
  ],
];

$theme_settings = apply_filters( __NAMESPACE__ . '\theme_settings', $theme_settings );

define( 'THEME_SETTINGS', $theme_settings );

/**
 * Required files
 */
require get_theme_file_path( '/inc/hooks.php' );
require get_theme_file_path( '/inc/includes.php' );
require get_theme_file_path( '/inc/template-tags.php' );

// Run theme setup
theme_setup();
