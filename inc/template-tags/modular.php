<?php
/**
 * Single module builder
 *
 * @package air-light
 * @Author: Niku Hietanen
 * @Date: 2020-02-28 15:47:10
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-02-28 16:40:33
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
  $template_part_output = null;

  // make template part name.
  $template_part_name = str_replace( '_', '-', \get_row_layout() );
  $template_row_index = \get_row_index();
  $template_part_path = \get_theme_file_path( "template-parts/modules/{$template_part_name}.php" );

  /**
   *  Make cache key.
   *  Key contains $have_rows_id to differiate modules if same module is used on multiple pages
   */
  $template_part_cache_key = __NAMESPACE__ . "_modular_{$post_id}_{$template_part_name}|{$template_row_index}";

  /**
   *  Check if module needs to bypass cache or we are in development envarioment.
   *  If it in cache, we get content to variable. If not in cache, put it in there and to variable.
   *  In both cases, variable is returned in the end of this functon.
   */
  if ( THEME_SETTINGS['enable_module_caching'] && ! \array_key_exists( $template_part_name, THEME_SETTINGS['exclude_module_from_cache'] ) && \getenv( 'WP_ENV' ) !== 'development' ) {

    // module can be cached, try to find it is already in cache.
    if ( \wp_cache_get( $template_part_cache_key, 'theme' ) !== $template_part_output ) {

      // module is not in cache.
      // validate that file actually exists.
      if ( \file_exists( $template_part_path ) ) {

        // get module content.
        \ob_start( 'ob_gzhandler' );
        include $template_part_path;
        $template_part_output = \ob_get_clean();

        // save module to cache.
        \wp_cache_set( $template_part_cache_key, $template_part_output, 'theme', HOUR_IN_SECONDS );

        // add log message in development and staging
        \do_action( 'qm/debug', "Module cached: {$template_part_name} ({$template_part_cache_key})" );
      }
    } else {
      // add log message in development and staging
      \do_action( 'qm/debug', "Module served from cache: {$template_part_name} ({$template_part_cache_key})" );
    }
  } else {
    // module is exluded from cache or we are in development envarioment

    // add log message in development and staging
    \do_action( 'qm/debug', "Module bypassed cache: {$template_part_name} ({$template_part_cache_key})" );

    // validate that file actually exists.
    if ( \file_exists( $template_part_path ) ) {

      // get module content.
      \ob_start();
      include $template_part_path;
      $template_part_output = \ob_get_clean();
    }
  }

  if ( empty( $template_part_output ) ) {
    \do_action( 'qm/error', "Module {$template_part_name} output is empty" );
  }

  // finally output module content.
  echo $template_part_output; // phpcs:ignore
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
