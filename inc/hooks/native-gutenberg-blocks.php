<?php
/**
 * Native Gutenberg blocks hooks.
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Register native Gutenberg blocks
 */
function register_block_categories( $categories ) {
  return array_merge(
    $categories,
    [
      [
        'slug'  => 'air-light',
        // This can be something like "Customer's blocks"
        'title' => __( 'Air-light blocks', 'air-light' ),
      ],
    ]
  );
}
add_filter( 'block_categories_all', __NAMESPACE__ . '\register_block_categories', 10, 1 );

/**
 * Register all native blocks from the blocks directory
 */
function register_native_gutenberg_blocks() {
  // Get all directories in the blocks folder
  $blocks_dir = get_theme_file_path( '/blocks' );

  // Get all singular blocks
  $blocks = glob( $blocks_dir . '/*/build/block.json' );

  // Get all blocks that have multiple blocks
  $inner_blocks = glob( $blocks_dir . '/*/build/*/block.json' );

  // Combine blocks
  $blocks = array_merge( $blocks, $inner_blocks );

  foreach ( $blocks as $block_folder ) {
    // Add error logging to debug block registration
    $registration_result = register_block_type( str_replace( '/block.json', '', $block_folder ) );

    if ( is_wp_error( $registration_result ) ) {
      error_log( 'Block registration error for ' . basename( $block_folder ) . ': ' . $registration_result->get_error_message() );
    }
  }
}
add_action( 'init', __NAMESPACE__ . '\register_native_gutenberg_blocks' );
