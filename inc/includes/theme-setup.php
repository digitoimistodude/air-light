<?php
/**
 * Theme setup
 **/

namespace Air_Light;

function theme_setup() {

  /**
   * Register menu locations
   */

  register_nav_menus( THEME_SETTINGS['menu_locations'] );

  /**
   * Load textdomain.
   */
  load_theme_textdomain( THEME_SETTINGS['textdomain'], get_template_directory() . '/languages' );

  /**
   * Define content width in articles
   */
  if ( ! isset( $content_width ) ) {
    $content_width = THEME_SETTINGS['content_width'];
  }

  // Run the rest of the setup
  build_theme_support();
  build_taxonomies();
  build_post_types();
}

/**
 * Build taxonomies
 */
function build_taxonomies() {
  if ( ! is_array( THEME_SETTINGS['taxonomies']) || ! THEME_SETTINGS['taxonomies'] ) {
    return;
  }

  foreach ( THEME_SETTINGS['taxonomies'] as $slug => $args ) {
    $classname = __NAMESPACE__ . '\\' . $args['name'];
    $file_path = get_theme_file_path( '/inc/taxonomies/' . $slug. '.php' );

    if ( ! file_exists( $file_path ) ) {
      return new \WP_Error( 'invalid-taxonomy', __( 'The taxonomy class file does not exist.', 'air-light' ), $classname );
    }
    require $file_path;

    if ( ! class_exists( $classname ) ) {
      return new \WP_Error( 'invalid-taxonomy', __( 'The taxonomy you attempting to create does not have a class to instance. Possible problems: your configuration does not match the class file name; the class file name does not exist.', 'air-light' ), $classname );
    }

    $taxonomy_class = new $classname( $slug );
    $taxonomy_class->register( $args['post_types'] );
  }
}

/**
 * Build custom post types
 */
function build_post_types () {
  if ( ! is_array( THEME_SETTINGS['post_types']) || ! THEME_SETTINGS['post_types'] ) {
    return;
  }

  foreach ( THEME_SETTINGS['post_types'] as $slug => $name ) {
    $classname = __NAMESPACE__ . '\\' . $name;
    $file_path = get_theme_file_path( '/inc/post-types/' . $slug . '.php' );

    if ( ! file_exists( $file_path ) ) {
      return new \WP_Error( 'invalid-taxonomy', __( 'The taxonomy class file does not exist.', 'air-light' ), $classname );
    }
    // Get the class file
    require $file_path;

    if ( ! class_exists( $classname ) ) {
      return new \WP_Error( 'invalid-taxonomy', __( 'The taxonomy you attempting to create does not have a class to instance. Possible problems: your configuration does not match the class file name; the class file name does not exist.', 'air-light' ), $classname );
    }

    $post_type_class = new $classname( $slug );
    $post_type_class->register();
  }
}

/**
 * Build theme support
 */
function build_theme_support() {
  foreach ( THEME_SETTINGS['theme_support'] as $supported_feature_key => $args ) {
    if ( is_array( $args ) ) {
      add_theme_support( $supported_feature_key, $args );
    } else {
      add_theme_support( $supported_feature_key );
    }
  }
}
