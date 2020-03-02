<?php
/**
 * Single module builder
 *
 * @package air-light
 * @Author: Niku Hietanen
 * @Date: 2020-02-28 15:47:10
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-03-02 10:36:44
 */

namespace Air_Light;

/**
 * Get the modular content block, possibly with caching
 * Needs Advanced Custom Fields to work
 *
 * @param Int $post_id Current post id
 */
function the_module( $post_id ) {
  // Make sure we have ACF installed
  if ( ! function_exists( 'get_row_layout' ) ) {
    return;
  }
  // defaults
  $module_output = null;

  // make template part name.
  $module_name      = \str_replace( '_', '-', \get_row_layout() );
  $module_row_index = \get_row_index();
  $module_path      = \get_theme_file_path( "template-parts/modules/{$module_name}.php" );

  /**
   *  Make cache key.
   *  Key contains $have_rows_id to differiate modules if same module is used on multiple pages
   */
  $module_cache_key = __NAMESPACE__ . "_modular_{$post_id}_{$module_name}|{$module_row_index}";
  // Cache settings
  $enable_caching   = ! empty( THEME_SETTINGS ) && array_key_exists( 'enable_module_caching', THEME_SETTINGS ) ? THEME_SETTINGS['enable_module_caching'] : true;
  $excluded_modules = ! empty( THEME_SETTINGS ) && array_key_exists( 'exclude_module_from_cache', THEME_SETTINGS ) ? THEME_SETTINGS['exclude_module_from_cache'] : [];

  /**
   *  Check if module needs to bypass cache or we are in development envarioment.
   *  If it in cache, we get content to variable. If not in cache, put it in there and to variable.
   *  In both cases, variable is returned in the end of this functon.
   */
  if ( $enable_caching && ! \array_key_exists( $module_name, $excluded_modules ) && \getenv( 'WP_ENV' ) !== 'development' ) {
    $module_output = load_module_from_cache( $module_cache_key, $module_name, $module_path );
  } else {
    // module is exluded from cache or we are in development envarioment
    // add log message in development and staging
    \do_action( 'qm/debug', "Module bypassed cache: {$module_name} ({$module_cache_key})" );

    $module_output = load_module( $module_path );
  }

  if ( empty( $module_output ) ) {
    \do_action( 'qm/error', "Module {$module_name} output is empty" );
  }

  // finally output module content.
  echo $module_output; // phpcs:ignore
}

/**
 * Get the modular content post id
 */
function get_modular_rows_id() {
  // normally we want to use current page id
  $have_rows_id = \get_the_ID();

  /**
   *  ... but there is some expectations, like:
   *  - blog archive page
   *  - custom post type archive pages
   *
   *  NOTE! these cheks assumes you use air-helper, polylang and
   *  page for post type (humanmade/page-for-post-type) plugins.
   */
  if ( \is_home() && \get_option( 'page_for_posts' ) ) {
    $have_rows_id = \get_option( 'page_for_posts' ) ?: false;
    $have_rows_id = \function_exists( 'pll_get_post' ) ? \pll_get_post( $have_rows_id ) : $have_rows_id;
  } elseif ( is_post_type_archive() ) {
    $have_rows_id = \get_option( 'page_for_' . \get_post_type() ) ?: false;
    $have_rows_id = \function_exists( 'pll_get_post' ) ? \pll_get_post( $have_rows_id ) : $have_rows_id;
  }

  return $have_rows_id;
}

/**
 * Load module content from cache
 * @param String $module_cache_key Module cache key
 * @param String $module_name Module name
 * @param String $module_path Module file path
 *
 * @return String Module content
 */
function load_module_from_cache( $module_cache_key, $module_name, $module_path ) {
  // module can be cached, try to find it is already in cache.
  $output = \wp_cache_get( $module_cache_key, 'theme' );

  if ( $output ) {
    // Template loaded from cache
    // add log message in development and staging
    \do_action( 'qm/debug', "Module served from cache: {$module_name} ({$module_cache_key})" );
    return $output;
  }

  // Module is not found in cache.
  // Load module content.
  $output = load_module( $module_path, true );

  // Save module to cache.
  \wp_cache_set( $module_cache_key, $output, 'theme', HOUR_IN_SECONDS );

  // add log message in development and staging
  \do_action( 'qm/debug', "Module cached: {$module_name} ({$module_cache_key})" );

  return $output;

}

/**
 * Load module file
 *
 * @param String  $module_path The module file path
 * @param Boolean $cache Use Gzip for caching
 *
 * @return String Module content
 */
function load_module( $module_path, $cache = false ) {
  $output_callback = $cache ? 'ob_gzhandler' : null;

  // Validate that file actually exists.
  if ( ! \file_exists( $module_path ) ) {
    \do_action( 'qm/error', "Module file not found: {$module_path})" );
    return '';
  }

  // get module content.
  \ob_start( $output_callback );
  include $module_path;
  return \ob_get_clean();
}
