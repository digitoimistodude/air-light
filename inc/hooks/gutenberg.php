<?php
/**
 * Gutenberg related settings
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-05-18 10:29:16
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Restrict blocks to only allowed blocks in the settings
 */
function allowed_block_types( $allowed_blocks, $post ) {
  if ( ! isset( THEME_SETTINGS['allowed_blocks'] ) || 'all' === THEME_SETTINGS['allowed_blocks'] ) {
    return $allowed_blocks;
  }

  // Add the default allowed blocks
  $allowed_blocks = isset( THEME_SETTINGS['allowed_blocks']['default'] ) ? THEME_SETTINGS['allowed_blocks']['default'] : [];

  // If there is post type specific blocks, add them to the allowed blocks list
  if ( isset( THEME_SETTINGS['allowed_blocks'][ $post->post_type ] ) ) {
    $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ $post->post_type ] );
  }

  // Add custom blocks
  if ( isset( THEME_SETTINGS['acf_blocks'] ) ) {
    foreach ( THEME_SETTINGS['acf_blocks'] as $custom_block ) {
      $allowed_blocks[] = 'acf/' . $custom_block['name'];
    }
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

  return true;
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

  // Enqueue optional editor only styles
  wp_enqueue_style(
    'block-editor-styles',
    get_theme_file_uri( get_asset_file( 'gutenberg-editor-styles.css' ) ),
    [],
    filemtime( get_theme_file_path( get_asset_file( 'gutenberg-editor-styles.css' ) ) ),
    'all',
    true
  );
} // end register_block_editor_assets

// Remove Gutenberg inline "Normalization styles" like .editor-styles-wrapper h1
// color: inherit;
// @source https://github.com/WordPress/gutenberg/issues/18595#issuecomment-599588153
function remove_gutenberg_inline_styles( $editor_settings, $post ) {
  unset( $editor_settings['styles'][0] );
  return $editor_settings;
} // end remove_gutenberg_inline_styles

/**
 * Make sure Gutenberg wp-admin editor styles are loaded
 */
function setup_editor_styles() {
  // Add support for editor styles.
  add_theme_support( 'editor-styles' );

  // Enqueue editor styles.
  add_editor_style( get_theme_file_uri( get_asset_file( 'gutenberg-editor-styles.css' ) ) );
}
