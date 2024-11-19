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

  // If post type block has been set to 'all', return all blocks, or if the array below it contains 'all', return all blocks
  if ( 'all' === THEME_SETTINGS['allowed_blocks'][ get_post_type() ] || is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) && in_array( 'all', THEME_SETTINGS['allowed_blocks'][ get_post_type() ], true ) ) {

    // Add ACF blocks
    if ( isset( THEME_SETTINGS['acf_blocks'] ) ) {
      $allowed_blocks = [];

      foreach ( THEME_SETTINGS['acf_blocks'] as $custom_block ) {
        $allowed_blocks[] = 'acf/' . $custom_block['name'];
      }

      // Add blocks defined on top of ACF blocks
      if ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) ) {
        $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ get_post_type() ] );
      }
    }

    // Add all core blocks on top of the ACF blocks
    $allowed_blocks = array_merge( $allowed_blocks, array_map(function( $block ) {
      return $block->name;
    }, \WP_Block_Type_Registry::get_instance()->get_all_registered()));

    // And add all defined blocks on top of the core blocks
    if ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) ) {
      $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ get_post_type() ] );
    }

    return $allowed_blocks;
  }

  // If post type block has been set to 'all-acf-blocks', return all ACF blocks, or if the array below it contains 'all-acf-blocks', return all ACF blocks
  if ( 'all-acf-blocks' === THEME_SETTINGS['allowed_blocks'][ get_post_type() ] || is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) && in_array( 'all-acf-blocks', THEME_SETTINGS['allowed_blocks'][ get_post_type() ], true ) ) {

    // Add ACF blocks
    if ( isset( THEME_SETTINGS['acf_blocks'] ) ) {
      $allowed_blocks = [];

      foreach ( THEME_SETTINGS['acf_blocks'] as $custom_block ) {
        $allowed_blocks[] = 'acf/' . $custom_block['name'];
      }

      // Add blocks defined on top of ACF blocks
      if ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) ) {
        $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ get_post_type() ] );
      }

      return $allowed_blocks;
    }
  }

  // If post type block has been set to 'all-core-blocks', return all core blocks, or if the array below it contains 'all-core-blocks', return all core blocks
  if ( 'all-core-blocks' === THEME_SETTINGS['allowed_blocks'][ get_post_type() ] || is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) && in_array( 'all-core-blocks', THEME_SETTINGS['allowed_blocks'][ get_post_type() ], true ) ) {
    $allowed_blocks = array_map(function( $block ) {
      return $block->name;
    }, \WP_Block_Type_Registry::get_instance()->get_all_registered());

    // Remove all but core/* blocks from array
    $allowed_blocks = array_filter( $allowed_blocks, function( $block ) {
      return strpos( $block, 'core/' ) === 0;
    });

    // Get array values
    $allowed_blocks = array_values( $allowed_blocks );

    // Add blocks defined on top of core blocks
    if ( is_array( THEME_SETTINGS['allowed_blocks'][ get_post_type() ] ) ) {
      $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ get_post_type() ] );
    }

    return $allowed_blocks;
  }

  $allowed_blocks = THEME_SETTINGS['allowed_blocks'][ get_post_type() ];
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
// @ref https://gist.github.com/gziolo/a947dc52eb2604c77a0a5b0797b2e781#block_editor_settings_all
function remove_gutenberg_inline_styles( $editor_settings, $editor_context ) {
  if ( ! empty( $editor_context->post ) ) {
    unset( $editor_settings['styles'][0]['css'] );
  }

  return $editor_settings;
}

/**
 * Block editor title input styles for post types that don't show
 * post title in templates
 */
function block_editor_title_input_styles() {
  $post_types = [
    'page',
    'settings',
  ];

  if ( ! in_array( get_post_type(), $post_types, true ) ) {
    return;
  }
  $styles = '
  /* Remove gap between post title wrapper and first block */
  .edit-post-visual-editor__post-title-wrapper + .is-root-container > .wp-block:first-child {
    margin-top: 0;
  }

  /* Remove border from the appender */
  .block-editor-button-block-appender {
    box-shadow: none;
  }

  /* Remove white border from top */
  .interface-interface-skeleton__header {
    border-bottom: 0;
  }

  .block-editor .editor-styles-wrapper {
    padding-top: 0;
  }

  .block-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper {
    background-color: #1e1e1e;
    border-bottom: 1px solid #1e1e1e;
    color: #fff;
    position: relative;
    z-index: 3;
  }

  .edit-post-visual-editor__post-title-wrapper {
    margin: 0;
  }

  .block-editor .editor-styles-wrapper .editor-post-title {
    color: #fff;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .block-editor .editor-styles-wrapper .editor-post-title [data-rich-text-placeholder]::after {
    color: #fff;
    opacity: 1;
  }

  .block-editor .editor-styles-wrapper .editor-post-title::before {
    color: #bababa;
    display: block;
    font-size: medium;
    font-weight: 500;
    margin-bottom: 1rem;
    position: relative;
  }

  body.locale-fi .editor-styles-wrapper .editor-post-title::before {
    content: "Nimi, joka näkyy selaimen välilehdessä ja valikossa";
  }

  body.locale-en-us .editor-styles-wrapper .editor-post-title::before {
    content: "Post name shown in the browser tab and menus";
  }
  ';
  wp_add_inline_style( 'block-editor-styles',  $styles );
}
