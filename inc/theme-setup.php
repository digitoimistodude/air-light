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

  'logo_path' => get_theme_file_path( '/svg/logo.svg' ),
  'logo_url' => get_theme_file_uri( '/svg/logo.svg' ),

  // Set theme support
  'theme_support' => [
    'automatic-feed-links',
    'title-tag',
    'post-thumbnails',
    // 'woocommerce',
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

  // Set theme textdomain
  'textdomain' => 'air-light',

  // Set up features
  // - Comment row to disable a feature
  // - Add your own features below
  'features' => [
    'widgets'
  ],

  // Set up template tags
  // - Comment row to disable a template tag
  // - Add your own custom template tags below
  'template-tags' => [
    'single-comment',
    'entry-footer',
    'featured-image',
  ],
];

$theme_settings = apply_filters( 'air_helper_theme_settings', $theme_settings );

define( 'THEME_SETTINGS', $theme_settings );

/**
 * Require required files
 */
require get_theme_file_path( '/inc/menus.php' );
require get_theme_file_path( '/inc/nav-walker.php' );
require get_theme_file_path( '/inc/scripts-styles.php' );

/**
 * Build theme support
 */
foreach ( THEME_SETTINGS['theme_support'] as $supported_feature_key => $args ) {
  if ( is_array( $args ) ) {
    add_theme_support( $supported_feature_key, $args );
  } else {
    add_theme_support( $supported_feature_key );
  }
}

/**
 * Load textdomain.
 */
load_theme_textdomain( THEME_SETTINGS['textdomain'], get_template_directory() . '/languages' );

/**
 * Define content width in articles
 */
if ( ! isset( $content_width ) ) {
  $content_width = THEME_SETTINGS['content_width'];
}

/**
 * Require additional features
 */
foreach ( THEME_SETTINGS['features'] as $feature ) {
  require get_theme_file_path( '/inc/features/' . $feature . '.php' );
}

/**
 * Require template tags
 */
foreach ( THEME_SETTINGS['template-tags'] as $template_tag ) {
  require get_theme_file_path( '/inc/template-tags/' . $template_tag . '.php' );
}
