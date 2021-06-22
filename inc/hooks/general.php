<?php
/**
 * General hooks.
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-06-22 10:15:07
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function widgets_init() {
  register_sidebar( array(
    'name'          => esc_html__( 'Sidebar', 'air-light' ),
    'id'            => 'sidebar-1',
    'description'   => esc_html__( 'Add widgets here.', 'air-light' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );
} // end widgets_init

/**
 * Register custom setting group post ids for Air Helper.
 */
function custom_settings_post_ids( $post_ids = [] ) {
  if ( ! isset( THEME_SETTINGS['custom_settings_post_ids'] ) ) {
    return $post_ids;
  }

  return wp_parse_args( THEME_SETTINGS['custom_settings_post_ids'], $post_ids );
} // end custom_settings_post_ids
