<?php
/**
 * Gutenberg related settings
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-06-22 10:57:39
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

  /* Remove white border from top */
  .interface-interface-skeleton__header {
    border-bottom: 0;
  }

  .block-editor .editor-styles-wrapper {
    padding-top: 0;
  }

  .block-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper {
    background-color: #23282e;
    border-bottom: 1px solid #23282e;
    position: relative;
    z-index: 3;
    color: #fff;
  }

  .block-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper .components-visually-hidden::after {
    /* content: "(näkyy mm. valikossa, selainikkunan nimessä ja murupolussa)"; */
    content: "(is shown for example in navigation, browser window name and in breadcrumbs)";
    color: rgba(255, 255, 255, .5);
    display: inline;
    margin-left: 5px;
  }

  .block-editor .editor-styles-wrapper .editor-post-title {
    padding: 4rem 2rem;
    margin: 0 auto;
  }

  .block-editor .editor-styles-wrapper .editor-post-title .components-visually-hidden {
    border: initial;
    clip: initial;
    -webkit-clip-path: initial;
    clip-path: initial;
    color: rgba(255, 255, 255, .5);
    font-size: var(--font-size-15);
    display: block;
    height: initial;
    margin: initial;
    margin-bottom: 1.2rem;
    overflow: initial;
    padding: initial;
    position: initial;
    width: initial;
    word-wrap: initial;
  }

  .block-editor .editor-styles-wrapper .editor-post-title .editor-post-title__input {
    line-height: 1.3;
    background-color: #2e3338;
    border-color: #2e3338;
    color: rgba(255, 255, 255, .5);
    border-radius: 3px;
    border-style: solid;
    border-width: 2px;
    box-sizing: border-box;
    font-family: inherit;
    font-size: var(--font-size-22);
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 0;
    padding: 15px;
    position: relative;
    text-decoration: none;
    transition: all 0.55s;
  }

  .block-editor .editor-styles-wrapper .editor-post-title .editor-post-title__input:focus {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
  ';
  wp_add_inline_style( 'block-editor-styles',  $styles );
}
