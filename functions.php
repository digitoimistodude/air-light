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

  'logo_path' => get_theme_file_path( '/svg/logo.svg' ),
  'logo_url' => get_theme_file_uri( '/svg/logo.svg' ),

  // Set theme support
  'theme_support' => [
    'automatic-feed-links' => [],
    'title-tag' => [],
    'post-thumbnails' => [],
    // 'woocommerce' => [],
    'html5' => [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption'
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

  // Set up features
  // - Comment row to disable a feature
  // - Add your own features below
  'features' => [
  ],

  // Set up template tags
  // - Comment row to disable a template tag
  // - Add your own custom template tags below
  'template-tags' => [
    'single-comment',
    'entry-footer',
  ],
];

$theme_settings = apply_filters( 'air_helper_theme_settings', $theme_settings );

define( 'THEME_SETTINGS', $theme_settings );

/**
 * Setup theme
 */
require get_theme_file_path( '/inc/theme-setup.php' );
