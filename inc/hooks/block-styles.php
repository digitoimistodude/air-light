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
  //
  // How block styles work:
  // 1. register_block_style() adds a style variation to the block sidebar
  // 2. WordPress automatically adds .is-style-{name} class to the block
  // 3. Write CSS in assets/src/sass/block-variations/_media-text.scss targeting that class
  //
  // Example: If you register a style with name 'dark', WordPress adds .is-style-dark class
  // Then in _media-text.scss add: .wp-block-media-text.is-style-dark { background: #000; }
  $block_styles = [];

  // Example block styles (uncomment to use):
  //
  // 'core/media-text' => [
  //   [
  //     'name'  => 'dark',
  //     'label' => 'Dark',
  //   ],
  //   [
  //     'name'  => 'red',
  //     'label' => 'Red accent',
  //   ],
  // ],
  //
  // Then add CSS in assets/src/sass/block-variations/_media-text.scss:
  // .wp-block-media-text.is-style-dark {
  //   background-color: #000;
  //   color: #fff;
  // }
  //
  // .wp-block-media-text.is-style-red {
  //   border-left: 4px solid #f00;
  // }

  // Register all block styles
  foreach ( $block_styles as $block => $styles ) {
    foreach ( $styles as $style ) {
      register_block_style( $block, $style );
    }
  }
} // end register_custom_block_styles
