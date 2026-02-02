<?php
/**
 * Block styles registration.
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Register block styles
 *
 * Registers custom block style variations on the server side.
 * Server-side registration is more stable than JavaScript-only registration
 * and integrates better with WordPress Global Styles.
 *
 * Note: Most theme authors will want to register block styles with PHP.
 * Developers can also register block styles via JavaScript, however there
 * are likely few or no scenarios where this is necessary for theme development.
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_style/
 * @link https://developer.wordpress.org/news/2023/02/creating-custom-block-styles-in-wordpress-themes/
 */
function register_custom_block_styles() {

  // Define all block styles in a single array for easy management
  $block_styles = [
    'core/media-text' => [
      [
        'name'  => 'no-padding',
        'label' => get_default_localization( 'No padding' ),
      ],
      [
        'name'       => 'has-m-padding',
        'label'      => get_default_localization( 'M padding' ),
        'is_default' => true,
      ],
      [
        'name'  => 'has-l-padding',
        'label' => get_default_localization( 'L padding' ),
      ],
    ],
  ];

  // Register all block styles
  foreach ( $block_styles as $block => $styles ) {
    foreach ( $styles as $style ) {
      register_block_style( $block, $style );
    }
  }
} // end register_custom_block_styles
