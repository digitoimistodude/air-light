<?php
/**
 * Enqueue and localize theme scripts and styles
 *
 * @package air-light
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-10-02 11:08:21
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
  if ( 'development' === getenv( 'WP_ENV' ) ) {
    $air_light_template = 'global';
  } else {
    $air_light_template = 'global.min';
  }

  // Styles.
  wp_enqueue_style( 'styles', get_theme_file_uri( "css/{$air_light_template}.css" ), array(), filemtime( get_theme_file_path( "css/{$air_light_template}.css" ) ) );

  // Scripts.
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts', get_theme_file_uri( 'js/dist/front-end.js' ), array(), filemtime( get_theme_file_path( 'js/dist/front-end.js' ) ), true );

  // Required comment-reply script
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }

  // Reminder for translated accessible labels
  if ( function_exists( 'pll_the_languages' ) && function_exists( 'ask_e' ) ) {
    if ( 'fi' === pll_current_language() ) {
      $screenreadertext_expand = ask__( 'Saavutettavuus: Avaa alavalikko' );
      $screenreadertext_expand_toggle = ask__( 'Saavutettavuus: Avaa päävalikko' );
      $screenreadertext_expand_for = ask__( 'Saavutettavuus: Avaa alavalikko kohteelle' );
      $screenreadertext_collapse = ask__( 'Saavutettavuus: Sulje alavalikko' );
      $screenreadertext_collapse_for = ask__( 'Saavutettavuus: Sulje alavalikko kohteelle' );
      $screenreadertext_collapse_toggle = ask__( 'Saavutettavuus: Sulje päävalikko' );
      $screenreadertext_external_link = ask__( 'Saavutettavuus: Ulkoinen sivusto:' );
      $screenreadertext_target_blank = ask__( 'Saavutettavuus: avautuu uuteen ikkunaan' );
    } else {
      $screenreadertext_expand = ask__( 'Accessibility: Open child menu' );
      $screenreadertext_expand_for = ask__( 'Accessibility: Open child menu for' );
      $screenreadertext_expand_toggle = ask__( 'Accessibility: Open main menu' );
      $screenreadertext_collapse = ask__( 'Accessibility: Close child menu' );
      $screenreadertext_collapse_for = ask__( 'Accessibility: Close child menu for' );
      $screenreadertext_collapse_toggle = ask__( 'Accessibility: Close main menu' );
      $screenreadertext_external_link = ask__( 'Accessibility: External site:' );
      $screenreadertext_target_blank = ask__( 'Accessibility: opens in a new window' );
    }
  } else {
    if ( 'fi' === get_bloginfo( 'language' ) ) {
      $screenreadertext_expand = esc_html__( 'Avaa alavalikko', 'air-light' );
      $screenreadertext_expand_for = esc_html__( 'Avaa alavalikko kohteelle', 'air-light' );
      $screenreadertext_expand_toggle = esc_html__( 'Avaa päävalikko', 'air-light' );
      $screenreadertext_collapse = esc_html__( 'Sulje alavalikko', 'air-light' );
      $screenreadertext_collapse_for = esc_html__( 'Sulje alavalikko kohteelle', 'air-light' );
      $screenreadertext_collapse_toggle = esc_html__( 'Sulje päävalikko', 'air-light' );
      $screenreadertext_external_link = esc_html__( 'Ulkoinen sivusto:', 'air-light' );
      $screenreadertext_target_blank = esc_html__( 'avautuu uuteen ikkunaan', 'air-light' );
    } else {
      $screenreadertext_expand = esc_html__( 'Open child menu', 'air-light' );
      $screenreadertext_expand_for = esc_html__( 'Open child menu for', 'air-light' );
      $screenreadertext_expand_toggle = esc_html__( 'Open main menu', 'air-light' );
      $screenreadertext_collapse = esc_html__( 'Close child menu', 'air-light' );
      $screenreadertext_collapse_for = esc_html__( 'Close child menu for', 'air-light' );
      $screenreadertext_collapse_toggle = esc_html__( 'Close main menu', 'air-light' );
      $screenreadertext_external_link = esc_html__( 'External site:', 'air-light' );
      $screenreadertext_target_blank = esc_html__( 'opens in a new window', 'air-light' );
    }
  }

  wp_localize_script( 'scripts', 'air_light_screenReaderText', array(
    'expand'   => $screenreadertext_expand,
    'collapse' => $screenreadertext_collapse,
    'expand_for'   => $screenreadertext_expand_for,
    'collapse_for' => $screenreadertext_collapse_for,
    'expand_toggle'   => $screenreadertext_expand_toggle,
    'collapse_toggle' => $screenreadertext_collapse_toggle,
    'external_link' => $screenreadertext_external_link,
    'target_blank' => $screenreadertext_target_blank,
  ) );
} // end air_light_scripts

/**
 * Load polyfills for legacy browsers
 */
function enqueue_polyfills() {
  $legacy_scripts = 'js/dist/legacy.js';
  // Include polyfills
  $script = '
  var supportsES6 = (function () {
  try {
    new Function("(a = 0) => a");
    return true;
  } catch (err) {
    return false;
  }
  }());
  var legacyScript ="' . esc_url( get_theme_file_uri( $legacy_scripts ) ) . '";
  if (!supportsES6) {
    var script = document.createElement("script");
    script.src = legacyScript;
    document.head.appendChild(script);
  }';

  if ( file_exists( get_theme_file_path( $legacy_scripts ) ) ) {
    wp_register_script( 'air_light_legacy', '' );
    wp_enqueue_script( 'air_light_legacy', '', [], filemtime( get_theme_file_path( $legacy_scripts ) ), false );
    wp_add_inline_script( 'air_light_legacy', $script, true);
  }
}
