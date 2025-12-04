<?php
/**
 * Gutenberg related settings.
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Restrict blocks to only allowed blocks in the settings
 */
function allowed_block_types( $allowed_blocks, $editor_context ) { // phpcs:ignore

  // If no allowed blocks are defined or it is set to none, return an empty array
  if ( empty( THEME_SETTINGS['allowed_blocks'] ) || 'none' === THEME_SETTINGS['allowed_blocks'] ) {
    return [];
  }

  // If the post type contains empty array or none, return an empty array for that post type post
  if ( empty( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) || 'none' === THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) {
    return [];
  }

  $allowed_blocks = [];
  $select_all = 'all' === THEME_SETTINGS['allowed_blocks'][ get_post_type() ] || ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) && in_array( 'all', THEME_SETTINGS['allowed_blocks'][ get_post_type() ], true ) );
  $acf_blocks = 'all-acf-blocks' === THEME_SETTINGS['allowed_blocks'][ get_post_type() ] || ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) && in_array( 'all-acf-blocks', THEME_SETTINGS['allowed_blocks'][ get_post_type() ], true ) );
  $core_blocks = 'all-core-blocks' === THEME_SETTINGS['allowed_blocks'][ get_post_type() ] || ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) && in_array( 'all-core-blocks', THEME_SETTINGS['allowed_blocks'][ get_post_type() ], true ) );

  // If post type block has been set to 'all-acf-blocks', return all ACF blocks, or if the array below it contains 'all-acf-blocks', return all ACF blocks
  if ( $select_all || $acf_blocks ) {

    // Add ACF blocks
    if ( isset( THEME_SETTINGS['acf_blocks'] ) ) {
      $allowed_blocks = [];

      foreach ( THEME_SETTINGS['acf_blocks'] as $custom_block ) {
        $allowed_blocks[] = 'acf/' . $custom_block['name'];
      }
    }
  }

  // If post type block has been set to 'all-core-blocks', return all core blocks, or if the array below it contains 'all-core-blocks', return all core blocks
  if ( $select_all || $core_blocks ) {
    $registered_blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();

    // Remove all but core/* blocks from array
    $core_blocks = array_filter( $registered_blocks, function( $block ) {
      return strpos( $block->name, 'core/' ) === 0;
    });

    // Allow filtering core blocks with full block data
    $core_blocks = apply_filters( 'air_light_allowed_core_blocks_obj', $core_blocks );

    $core_blocks = array_map(function( $block ) {
      return $block->name;
    }, $core_blocks );

    // Get array values
    $core_blocks = array_values( $core_blocks );

    // Allow filtering core blocks before merging allowed blocks
    $core_blocks = apply_filters( 'air_light_allowed_core_blocks', $core_blocks );

    // Add blocks defined on top of core blocks
    if ( is_array( $core_blocks ) ) {
      $allowed_blocks = array_merge( $allowed_blocks, $core_blocks );
    }
  }

  // Add blocks defined on top of core blocks
  if ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) ) {
    $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ get_post_type() ] );
  }

  return $allowed_blocks;
} // end allowed_block_types

/**
 * Check whether to use classic or block editor for a certain post type as defined in the settings
 */
function use_block_editor_for_post_type( $use_block_editor, $post_type ) {
  if ( in_array( $post_type, THEME_SETTINGS['use_classic_editor'], true ) ) {
    return false;
  }

  return $use_block_editor;
} // end use_block_editor_for_post_type

/**
 * Enqueue block editor JavaScript and CSS
 */
function register_block_editor_assets() {

  // Dependencies
  $dependencies = [
    'wp-blocks',    // Provides useful functions and components for extending the editor
    'wp-i18n',      // Provides localization functions
    'wp-element',   // Provides React.Component
    'wp-components', // Provides many prebuilt components and controls
  ];

  // Enqueue the bundled block JS file
  wp_enqueue_script(
    'block-editor-js',
    get_theme_file_uri( get_asset_file( 'gutenberg-editor.js' ) ),
    $dependencies,
    filemtime( get_theme_file_path( get_asset_file( 'gutenberg-editor.js' ) ) ),
    'all'
  );
} // end register_block_editor_assets

// Remove Gutenberg inline "Normalization styles" like .editor-styles-wrapper h1
// color: inherit;
// @source https://github.com/WordPress/gutenberg/issues/18595#issuecomment-599588153
// @ref https://gist.github.com/gziolo/a947dc52eb2604c77a0a5b0797b2e781#block_editor_settings_all
function remove_gutenberg_inline_styles( $editor_settings, $editor_context ) {
  if ( ! empty( $editor_context->post ) ) {
    unset( $editor_settings['styles'][0]['css'] );
  }

  return $editor_settings;
}
