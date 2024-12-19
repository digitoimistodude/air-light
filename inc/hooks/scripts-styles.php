<?php
/**
 * Enqueue and localize theme scripts and styles.
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Move jQuery to footer
 */
function move_jquery_into_footer( $wp_scripts ) {
  if ( ! is_admin() ) {
    $wp_scripts->add_data( 'jquery',         'group', 1 );
    $wp_scripts->add_data( 'jquery-core',    'group', 1 );
    $wp_scripts->add_data( 'jquery-migrate', 'group', 1 );
  }
} // end air_light_move_jquery_into_footer

/**
 * Enqueue scripts and styles.
 */
function enqueue_theme_scripts() {

  // Enqueue global.css
  wp_enqueue_style( 'styles',
    get_theme_file_uri( get_asset_file( 'global.css' ) ),
    [],
    filemtime( get_theme_file_path( get_asset_file( 'global.css' ) ) )
  );

  // Enqueue jquery and front-end.js
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts',
    get_theme_file_uri( get_asset_file( 'front-end.js' ) ),
    [],
    filemtime( get_theme_file_path( get_asset_file( 'front-end.js' ) ) ),
    true
  );

  // Required comment-reply script
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }

  wp_localize_script( 'scripts', 'air_light_screenReaderText', [
    'expand_for'      => get_default_localization( 'Open child menu for' ),
    'collapse_for'    => get_default_localization( 'Close child menu for' ),
    'expand_toggle'   => get_default_localization( 'Open main menu' ),
    'collapse_toggle' => get_default_localization( 'Close main menu' ),
    'external_link'   => get_default_localization( 'External site' ),
    'target_blank'    => get_default_localization( 'opens in a new window' ),
    'previous_slide'  => get_default_localization( 'Previous slide' ),
    'next_slide'      => get_default_localization( 'Next slide' ),
    'last_slide'      => get_default_localization( 'Last slide' ),
    'skip_slider'     => get_default_localization( 'Skip over the carousel element' ),
  ] );

  // Add domains/hosts to disable external link indicators
  wp_localize_script( 'scripts', 'air_light_externalLinkDomains', THEME_SETTINGS['external_link_domains_exclude'] );
} // end air_light_scripts

/**
 * Returns the built asset filename and path depending on
 * current environment.
 *
 * @param string $filename File name with the extension
 * @return string file and path of the asset file
 */
function get_asset_file( $filename ) {
  $env = 'development' === wp_get_environment_type() && ! isset( $_GET['load_production_builds'] ) ? 'dev' : 'prod'; // phpcs:ignore WordPress.Security.NonceVerification.Recommended

  $filetype = pathinfo( $filename )['extension'];

  return "{$filetype}/{$env}/{$filename}";
} // end get_asset_file
