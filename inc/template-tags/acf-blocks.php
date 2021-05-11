<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2021-05-11 14:38:45
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-05-11 14:38:58
 * @package air-light
 */

namespace Air_Light;

function render_acf_block( $block, $content = '', $is_preview = false, $post_id = 0 ) {
  $block_slug = str_replace( 'acf/', '', $block['name'] );
  $block_path = get_theme_file_path( "template-parts/blocks/{$block_slug}.php" );
  $cache = true;

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
  $cache_key = "post_{$post_id}_{$block['id']}|{$content_hash}";

  // Always bypass cache if is preview from editor
  if ( $is_preview ) {
    $cache = false;
  }

  // Always bypass cache in development phase
  if ( 'development' === wp_get_environment_type() ) {
    $cache = false;
  }

  // Check if block is set to be bypassed always
  if ( ! empty( THEME_SETTINGS ) && array_key_exists( 'acf_blocks_prevent_cache', THEME_SETTINGS ) ) {
    if ( array_key_exists( $block_slug, THEME_SETTINGS['acf_blocks_prevent_cache'] ) ) {
      $cache = false;
    }
  }

  // Get block contents
  if ( ! $cache ) {
    \do_action( 'qm/debug', "Block {$block_slug} bypassed cache ({$cache_key})" );
    $block_output = load_acf_block( $block_path );
  } else {
    $block_output = load_acf_block_from_cache( $cache_key, $block_slug, $block_path );
  }

  // Output block contents
  echo $block_output;
} // end render_acf_block

function load_acf_block_from_cache( $cache_key, $block_slug, $block_path ) {
  // Block can be cached, try to find it is already in cache
  $output = \wp_cache_get( $cache_key, 'theme' );

  if ( $output ) {
    \do_action( 'qm/debug', "Block {$block_slug} served from cache ({$cache_key})" );
    return $output;
  }

  // Block is not found in cache, load block content
  $output = load_acf_block( $block_path, true );

  // Save block to cache
  \wp_cache_set( $cache_key, $output, 'theme', HOUR_IN_SECONDS );
  \do_action( 'qm/debug', "Block {$block_slug} cached ({$cache_key})" );

  return $output;
} // end load_acf_block_from_cache

function load_acf_block( $block_path, $cache = false ) {
  $output_callback = $cache ? 'ob_gzhandler' : null;

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
 * Check if ACF block should be shown.
 * Returns false when field should not be shown.
 */
function check_acf_block_fields( $data, $required = [], $message = '', $log_level = 'error' ) {
  if ( ! is_array( $data ) ) {
    \do_action( 'qm/error', 'Block data is not array!' );
    return true;
  }

  // No required fields, allow show always
  if ( empty( $required ) ) {
    return false;
  }

  $message = ! empty( $message ) ? $message : get_default_localization( 'Block missing required data' );

  // Loop data and check if required fields are empty
  $empty_fields = [];
  foreach ( $data as $key => $value ) {
    if ( in_array( $key, $required ) && empty( $value ) ) {
      $empty_fields[] = $key;
    }
  }

  // There is empty fields, warn and bail
  if ( $empty_fields ) {
    $message = $message . ' (' . implode( ', ', $empty_fields ) . ')';

    // Log QM message always
    \do_action( "qm/{$log_level}", $message );

    // Show message when editing in dashboard
    if ( is_admin() ) {
      echo $message;
    }

    // Empty required fields, bail the show
    return true;
  }

  // All required fields had data, allow show
  return false;
} // end check_acf_block_fields
