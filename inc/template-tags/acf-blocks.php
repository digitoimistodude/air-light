<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2021-05-11 14:38:45
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2021-05-19 08:53:57
 * @package air-light
 */

namespace Air_Light;

function render_acf_block( $block, $content = '', $is_preview = false, $post_id = 0 ) {
  $block_slug = str_replace( 'acf/', '', $block['name'] );
  $block_path = get_theme_file_path( "template-parts/blocks/{$block_slug}.php" );

  // Always bypass cache if is preview from editor or in development phase
  $block_cache_enabled = $is_preview || 'development' === wp_get_environment_type() ? false : acf_block_maybe_enable_cache( $block_slug );

  \do_action( 'qm/debug', "Block {$block_slug} output started" );

  /**
   * Make cache key for this block.
   *
   * Block ID is always unique per block.
   *
   * Use crc32 hash (it's quickest to calculate) as additional
   * way to identify blocks, but also as an way to burst the
   * block cache when contents are updated.
   */
  $content_hash = crc32( serialize( get_fields() ) );
  $cache_key    = "post_{$post_id}_{$block['id']}|{$content_hash}";

  // Get block contents
  if ( ! $block_cache_enabled ) {
    \do_action( 'qm/debug', "Block {$block_slug} bypassed cache ({$cache_key})" );
    $block_output = load_acf_block( $block_path, false, $block, $is_preview );
  } else {
    $block_output = load_acf_block_from_cache( $cache_key, $block_slug, $block_path, $block );
  }

  // Output block contents (this is safe unescaped)
  echo $block_output; // phpcs:ignore
} // end render_acf_block

function load_acf_block_from_cache( $cache_key, $block_slug, $block_path, $block ) {
  // Block can be cached, try to find it is already in cache
  $output = \wp_cache_get( $cache_key, 'theme' );

  if ( $output ) {
    \do_action( 'qm/debug', "Block {$block_slug} served from cache ({$cache_key})" );
    return $output;
  }

  // Block is not found in cache, load block content
  $output = load_acf_block( $block_path, true, $block );

  // Save block to cache
  \wp_cache_set( $cache_key, $output, 'theme', HOUR_IN_SECONDS );
  \do_action( 'qm/debug', "Block {$block_slug} cached ({$cache_key})" );

  return $output;
} // end load_acf_block_from_cache

function load_acf_block( $block_path, $cache = false, $block = [], $is_preview = false ) {
  $output_callback = $cache ? 'ob_gzhandler' : null;

  /**
   * Check if it's allowed to show this block in this context
   *
   * This might happen when we build a reusable block in a page and
   * then add that reusable block to post
   */
  $post_type = get_post_type();
  if ( $post_type && 'wp_block' !== $post_type && is_array( $block['post_types'] ) && ! in_array( $post_type, $block['post_types'] ) ) {
    return '';
  }

  // Validate that file actually exists
  if ( ! \file_exists( $block_path ) ) {
    \do_action( 'qm/error', "Block file {$block_path} not found" );
    return '';
  }

  // Get and return block contents
  \ob_start( $output_callback );
  include $block_path;
  return \ob_get_clean();
} // end load_acf_block(

/**
 * Check if block can be cached
 *
 * @param string $block_slug The block slug
 * @return bool True if block can be cached, false if not
 */
function acf_block_maybe_enable_cache( string $block_slug ) {
  $enable_cache = true; // Default value

  // This function shouldn't really be running if we don't have these, but check to be safe
  if ( empty( THEME_SETTINGS ) || empty( THEME_SETTINGS['acf_blocks'] ) || empty( THEME_SETTINGS['acf_blocks'][ $block_slug ] ) ) {
    \do_action( 'qm/debug', "Block {$block_slug} settings couldn't be found in theme settings" );

    return apply_filters( 'air_acf_block_maybe_enable_cache', $enable_cache, $block_slug );
  } else if ( empty( THEME_SETTINGS['acf_blocks'][ $block_slug ]['prevent_cache'] ) ) {
    return apply_filters( 'air_acf_block_maybe_enable_cache', $enable_cache, $block_slug );
  } else {
    // Check from block settings if we should prevent cache
    $enable_cache = THEME_SETTINGS['acf_blocks'][ $block_slug ]['prevent_cache'] ? false : true;
  }

  // Check from block settings if we should prevent cache
  $enable_cache = THEME_SETTINGS['acf_blocks'][ $block_slug ]['prevent_cache'] ? false : true;

  return apply_filters( 'air_acf_block_maybe_enable_cache', $enable_cache, $block_slug );
}

/**
 * Show error block if user is allowed to see error blocks
 *
 * @param string $message Error message to be shown
 * @param mixed  $title Set to false to show default title, a string for block title or an empty string to hide the title
 */
function maybe_show_error_block( $message, $title = false ) {
  if ( ! current_user_can( 'edit_posts' ) ) {
    return;
  }

  if ( false === $title ) {
    $title = get_default_localization( 'Block missing required data' );
  }
  ?>
  <div class="block block-error">
    <div class="container">
      <?php if ( ! empty( $title ) ) : ?>
        <h2><?php echo esc_html( get_default_localization( 'Block missing required data' ) ); ?></h2>
      <?php endif; ?>

      <?php if ( ! empty( $message ) ) : ?>
        <p class="error-message"><?php echo wp_kses_post( $message ) ?></p>
      <?php endif; ?>

      <p class="info"><?php echo esc_html( get_default_localization( 'This error is shown only for logged in users' ) ); ?></p>
    </div>
  </div>
  <?php
}
