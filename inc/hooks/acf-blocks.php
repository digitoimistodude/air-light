<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2021-05-11 14:34:14
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2021-05-19 08:40:13
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
  if ( ! function_exists( 'acf_register_block_type' ) ) {
    return;
  }

  if ( ! isset( THEME_SETTINGS['acf_blocks'] ) ) {
    return;
  }

  $example_data = apply_filters( 'air_acf_blocks_example_data', [] );

  foreach ( THEME_SETTINGS['acf_blocks'] as $block ) {
    // Check if we have added example data via hook
    if ( empty( $block['example'] ) && ! empty( $example_data[ $block['name'] ] ) ) {
      $block['example'] = [
        'attributes' => [
          'mode' => 'preview',
          'data' => $example_data[ $block['name'] ],
        ],
      ];
    }

    acf_register_block_type( wp_parse_args( $block, THEME_SETTINGS['acf_block_defaults'] ) );
  }
} // end acf_blocks_init
