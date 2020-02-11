<?php
/**
 * Set up and initialize theme settings
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Require required files
 */
require get_theme_file_path( '/inc/scripts-styles.php' );
require get_theme_file_path( '/inc/widgets.php' );
require get_theme_file_path( '/inc/nav-walker.php' );
require get_theme_file_path( '/inc/post-types/Post_Type.php' );
require get_theme_file_path( '/inc/taxonomies/Taxonomy.php' );

/**
 * Build theme support
 */
foreach ( THEME_SETTINGS['theme_support'] as $supported_feature_key => $args ) {
  if ( is_array( $args ) ) {
    add_theme_support( $supported_feature_key, $args );
  } else {
    add_theme_support( $supported_feature_key );
  }
}

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

/**
 * Build taxonomies
 */
foreach ( THEME_SETTINGS['taxonomies'] as $slug => $args ) {
  $classname = __NAMESPACE__ . '\\' . $args['name'];
  $file_path = get_theme_file_path( '/inc/taxonomies/' . $args['name'] . '.php' );

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

/**
 * Build custom post types
 */
foreach ( THEME_SETTINGS['post_types'] as $slug => $name ) {
  $classname = __NAMESPACE__ . '\\' . $name;
  $file_path = get_theme_file_path( '/inc/post-types/' . $name . '.php' );

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

/**
 * Require additional features
 */

foreach ( THEME_SETTINGS['features'] as $feature ) {
  $file_path = get_theme_file_path( '/inc/features/' . $feature . '.php' );
  if ( ! file_exists( $file_path ) ) {
    return new \WP_Error( 'invalid-feature', __( 'The feature file does not exist.', 'air-light' ), $classname );
  }
  require $file_path;
}


/**
 * Require template tags
 */
foreach ( THEME_SETTINGS['template-tags'] as $template_tag ) {
  $file_path = get_theme_file_path( '/inc/template-tags/' . $template_tag . '.php' );
  if ( ! file_exists( $file_path ) ) {
    return new \WP_Error( 'invalid-template-tag', __( 'The template tag file does not exist.', 'air-light' ), $template_tag );
  }
  require $file_path;
}
