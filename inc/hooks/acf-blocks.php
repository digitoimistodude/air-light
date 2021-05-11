<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2021-05-11 14:34:14
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-05-11 14:35:13
 * @package air-light
 */

namespace Air_Light;

function acf_blocks_add_category_in_gutenberg( $categories, $post ) {
  return array_merge( $categories, [
    [
      'slug'  => 'air-light',
      'title' => __( 'Theme blocks', 'air-light' ),
    ],
  ] );
} // end acf_blocks_add_category_in_gutenberg

function acf_blocks_init() {
  if ( ! function_exists('acf_register_block_type') ) {
    return;
  }

  if ( ! isset( THEME_SETTINGS['acf_blocks'] ) ) {
    return;
  }

  foreach ( THEME_SETTINGS['acf_blocks'] as $block ) {
    acf_register_block_type( wp_parse_args( $block, THEME_SETTINGS['acf_block_defaults'] ) );
  }
} // end acf_blocks_init
