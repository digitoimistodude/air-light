<?php
/**
 * Gather all bits and pieces together.
 * If you end up having multiple post types, taxonomies,
 * hooks and functions - please split those to their
 * own files under /inc and just require here.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-01-22 14:16:53
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * The current version of the theme.
 */
define( 'AIR_LIGHT_VERSION', '4.9.9' );

/**
 * Requires.
 */
require get_theme_file_path( '/inc/theme-setup.php' );
require get_theme_file_path( '/inc/functions.php' );
require get_theme_file_path( '/inc/menus.php' );
require get_theme_file_path( '/inc/nav-walker.php' );
require get_theme_file_path( '/inc/widgets.php' );


/**
 * Move jQuery to footer
 */
add_action( 'wp_default_scripts', 'air_light_move_jquery_into_footer' );
function air_light_move_jquery_into_footer( $wp_scripts ) {
  if ( ! is_admin() ) {
    $wp_scripts->add_data( 'jquery',         'group', 1 );
    $wp_scripts->add_data( 'jquery-core',    'group', 1 );
    $wp_scripts->add_data( 'jquery-migrate', 'group', 1 );
  }
} // end air_light_move_jquery_into_footer

/**
 * Enqueue scripts and styles.
 */
add_action( 'wp_enqueue_scripts', 'air_light_scripts' );
function air_light_scripts() {
  if ( 'development' === getenv( 'WP_ENV' ) ) {
    $air_light_template = 'global';
  } else {
    $air_light_template = 'global.min';
  }

  // Styles.
  wp_enqueue_style( 'styles', get_theme_file_uri( "css/{$air_light_template}.css" ), array(), filemtime( get_theme_file_path( "css/{$air_light_template}.css" ) ) );

  // Scripts.
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts', get_theme_file_uri( 'js/all.js' ), array(), filemtime( get_theme_file_path( 'js/all.js' ) ), true );

  // Required comment-reply script
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }

  wp_localize_script( 'scripts', 'air_light_screenReaderText', array(
    'expand'      => esc_html__( 'Open child menu', 'air-light' ),
    'collapse'    => esc_html__( 'Close child menu', 'air-light' ),
  ) );
} // end air_light_scripts
