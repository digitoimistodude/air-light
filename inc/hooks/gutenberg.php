<?php
/**
 * Gutenberg related settings
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-02-21 11:15:27
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Restrict blocks to only allowed blocks in the settings
 */
function allowed_block_types( $allowed_blocks, $post ) {
  if ( 'all' === THEME_SETTINGS['allowed_blocks'] ) {
    return $allowed_blocks;
  }

  // Add the default allowed blocks
  $allowed_blocks = THEME_SETTINGS['allowed_blocks']['default'];

  // If there is post type specific blocks, add them to the allowed blocks list
  if ( null !== THEME_SETTINGS['allowed_blocks'][ get_post_type( $post->post_type ) ] ) {
    $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ get_post_type( $post->post_type ) ] );
  }

  return $allowed_blocks;
}

/**
 * Check whether to use classic or block editor for a certain post type as defined in the settings
 */
function use_block_editor_for_post_type( $use_block_editor, $post_type ) {
  if ( in_array( $post_type, THEME_SETTINGS['use_classic_editor'], true ) ) {
    return false;
  }
  return true;
}
