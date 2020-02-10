<?php
/**
 * Set up and initialize theme settings
 *
 * @package air-light
 */

namespace Air_Light;

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

  // Set theme support
  'theme_support' => [
    'automatic-feed-links',
    'title-tag',
    'post-thumbnails',
    'html5' => [
      [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption'
      ],
    ],
  ],
];

$theme_settings = apply_filters( 'air_helper_theme_settings', $theme_settings );

define( 'THEME_SETTINGS', $theme_settings );

/**
 * Enable theme support for essential features.
 */
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
// add_theme_support( 'woocommerce' );

/**
 * Load textdomain.
 */
load_theme_textdomain( 'air-light', get_template_directory() . '/languages' );

/**
 * Define content width in articles
 */
if ( ! isset( $content_width ) ) {
  $content_width = 800;
}