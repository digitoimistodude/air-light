<?php
/**
 * Gutenberg related settings
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-11-10 16:04:19
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Restrict blocks to only allowed blocks in the settings
 */
function allowed_block_types( $allowed_blocks, $editor_context ) {
  if ( ! isset( THEME_SETTINGS['allowed_blocks'] ) || 'all' === THEME_SETTINGS['allowed_blocks'] ) {
    return $allowed_blocks;
  }

  // Add the default allowed blocks
  $allowed_blocks = isset( THEME_SETTINGS['allowed_blocks']['default'] ) ? THEME_SETTINGS['allowed_blocks']['default'] : [];

  // If there is post type specific blocks, add them to the allowed blocks list
  if ( isset( THEME_SETTINGS['allowed_blocks'][ $editor_context->post->post_type ] ) ) {
    $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ $editor_context->post->post_type ] );
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
