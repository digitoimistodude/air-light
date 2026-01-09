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
  $block_folders = array_filter( glob( $blocks_dir . '/*' ), 'is_dir' );

  foreach ( $block_folders as $block_folder ) {
    // Check if block.json exists in the build folder
    if ( file_exists( $block_folder . '/build/block.json' ) ) {
      // Add error logging to debug block registration
      $registration_result = register_block_type( $block_folder . '/build' );

      if ( is_wp_error( $registration_result ) ) {
        // phpcs:ignore Squiz.PHP.DiscouragedFunctions.Discouraged, WordPress.PHP.DevelopmentFunctions.error_log_error_log -- Intentional error logging for debugging block registration failures.
        error_log( 'Block registration error for ' . basename( $block_folder ) . ': ' . $registration_result->get_error_message() );
      }
    }
  }
}
add_action( 'init', __NAMESPACE__ . '\register_native_gutenberg_blocks' );

/**
 * Enqueue all native block assets
 */
function enqueue_block_editor_assets() {
  // Get all block asset files
  $blocks_dir = get_theme_file_path( '/blocks' );
  $block_folders = array_filter( glob( $blocks_dir . '/*' ), 'is_dir' );

  foreach ( $block_folders as $block_folder ) {
    $block_name = basename( $block_folder );
    $asset_file = get_theme_file_path( "blocks/{$block_name}/build/index.asset.php" );

    if ( file_exists( $asset_file ) ) {
      $asset = require $asset_file;

      wp_enqueue_script(
        "air-light-{$block_name}",
        get_theme_file_uri( "blocks/{$block_name}/build/index.js" ),
        $asset['dependencies'] ?? [ 'wp-blocks', 'wp-element', 'wp-editor' ],
        $asset['version'] ?? filemtime( get_theme_file_path( "blocks/{$block_name}/build/index.js" ) ),
        true
      );
    }
  }
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
