<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2021-05-11 14:38:45
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-02 16:36:20
 * @package air-light
 */

namespace Air_Light;

function render_acf_block( $block, $content = '', $is_preview = false, $post_id = 0 ) {
  $block_slug = str_replace( 'acf/', '', $block['name'] );
  $block_path = get_theme_file_path( "template-parts/blocks/{$block_slug}.php" );

  // Always bypass cache if is preview from editor or in development phase
  $block_cache_enabled = $is_preview || 'development' === wp_get_environment_type() ? false : acf_block_maybe_enable_cache( $block_slug );

  \do_action( 'qm/debug', "Block {$block_slug} output started" ); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores

  /**
   * Make cache key for this block.
   *
   * Block ID is always unique per block.
   *
   * Use crc32 hash (it's quickest to calculate) as additional
   * way to identify blocks, but also as an way to burst the
   * block cache when contents are updated.
   */
  $content_hash = crc32( serialize( get_fields() ) ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.serialize_serialize
  $cache_key    = "post_{$post_id}_{$block['id']}|{$content_hash}";
  $cache_key    = apply_filters( 'air_acf_block_cache_key', $cache_key, $block_slug, $post_id );

  // Get block contents
  if ( ! $block_cache_enabled ) {
    \do_action( 'qm/debug', "Block {$block_slug} bypassed cache ({$cache_key})" ); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
    $block_output = load_acf_block( $block_path, false, $block, $is_preview, $post_id );
  } else {
    $block_output = load_acf_block_from_cache( $cache_key, $block_slug, $block_path, $block, $is_preview, $post_id );
  }

  // Output block contents (this is safe unescaped)
  echo $block_output; // phpcs:ignore
} // end render_acf_block

function load_acf_block_from_cache( $cache_key, $block_slug, $block_path, $block, $is_preview = false, $post_id = 0 ) {
  // Block can be cached, try to find it is already in cache
  $output = \wp_cache_get( $cache_key, 'theme' );

  if ( $output ) {
    \do_action( 'qm/debug', "Block {$block_slug} served from cache ({$cache_key})" ); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
    return $output;
  }

  // Block is not found in cache, load block content
  $output = load_acf_block( $block_path, true, $block, $is_preview, $post_id );

  // Save block to cache
  \wp_cache_set( $cache_key, $output, 'theme', apply_filters( 'air_acf_block_cache_lifetime', HOUR_IN_SECONDS, $block_slug, $post_id ) );
  \do_action( 'qm/debug', "Block {$block_slug} cached ({$cache_key})" ); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores

  return $output;
} // end load_acf_block_from_cache

function load_acf_block( $block_path, $cache = false, $block = [], $is_preview = false, $post_id = 0 ) {
  $output_callback = $cache ? 'ob_gzhandler' : null;

  /**
   * Check if it's allowed to show this block in this context.
   * Always allow in preview mode.
   *
   * This might happen when we build a reusable block in a page and
   * then add that reusable block to post
   */
  if ( ! $is_preview ) {
    $post_type = get_post_type();
    if ( $post_type && 'wp_block' !== $post_type && is_array( $block['post_types'] ) && ! in_array( $post_type, $block['post_types'] ) ) { // phpcs:ignore WordPress.PHP.StrictInArray.MissingTrueStrict
      return '';
    }
  }

  // Validate that file actually exists
  if ( ! \file_exists( $block_path ) ) {
    \do_action( 'qm/error', "Block file {$block_path} not found" ); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
    return '';
  }

  // Get and return block contents
  \ob_start( $output_callback );
  include $block_path;
  $content = \ob_get_clean();

  if ( ! $is_preview && isset( $block['anchor'] ) && ! empty( $block['anchor'] ) ) {
    $content = str_replace( '<section class="block', '<section id="' . $block['anchor'] . '" class="block', $content );
  }

  return $content;
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
  if ( empty( THEME_SETTINGS ) || empty( THEME_SETTINGS['acf_blocks'] ) ) {
    \do_action( 'qm/debug', 'Blocks couldnt be found in theme settings' ); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores, WordPress.PHP.StrictInArray.MissingTrueStrict
    return apply_filters( 'air_acf_block_maybe_enable_cache', $enable_cache, null );
  }

  $block_key = array_search( $block_slug, array_column( THEME_SETTINGS['acf_blocks'], 'name' ) ); // phpcs:ignore WordPress.PHP.StrictInArray.MissingTrueStrict
  if ( false === $block_key ) {
    \do_action( 'qm/debug', "Block {$block_slug} settings couldn't be found in theme settings" ); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
    return apply_filters( 'air_acf_block_maybe_enable_cache', $enable_cache, $block_slug );
  }

  $block = THEME_SETTINGS['acf_blocks'][ $block_key ];

  if ( ! isset( $block['prevent_cache'] ) ) {
    return apply_filters( 'air_acf_block_maybe_enable_cache', $enable_cache, $block_slug );
  }

  // Check from block settings if we should prevent cache
  $enable_cache = $block['prevent_cache'] ? false : true;

  return apply_filters( 'air_acf_block_maybe_enable_cache', $enable_cache, $block_slug );
} // end acf_block_maybe_enable_cache

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
        <h2><?php echo esc_html( $title ); ?></h2>
      <?php endif; ?>

      <?php if ( ! empty( $message ) ) : ?>
        <p class="error-message"><?php echo wp_kses_post( $message ) ?></p>
      <?php endif; ?>

      <p class="info"><?php echo esc_html( get_default_localization( 'This error is shown only for logged in users' ) ); ?></p>
    </div>
  </div>
  <?php
}
