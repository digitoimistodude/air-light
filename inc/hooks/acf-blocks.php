<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2021-05-11 14:34:14
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-05-20 15:50:05
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

    // Check if icon is set, otherwise try to load svg icon
    if ( ! isset( $block['icon'] ) || empty( $block['icon'] ) ) {
      $icon_path = get_theme_file_path( "svg/block-icons/{$block['name']}.svg" );
      $icon_path = apply_filters( 'air_light_acf_block_icon', $icon_path, $block['name'], $block );
      if ( file_exists( $icon_path ) ) {
        $block['icon'] = file_get_contents( $icon_path );
      }
    }

    acf_register_block_type( wp_parse_args( $block, THEME_SETTINGS['acf_block_defaults'] ) );
  }
} // end acf_blocks_init
