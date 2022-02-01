<?php
/**
 * Include custom features etc.
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:07:17
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-12-10 11:48:15
 *
 * @package air-light
 */

namespace Air_Light;

// Theme setup
require get_theme_file_path( '/inc/includes/theme-setup.php' );

// Localized strings
require get_theme_file_path( '/inc/includes/localization.php' );

// Nav Walker
require get_theme_file_path( '/inc/includes/nav-walker.php' );

// Post type and taxonomy base classes
// We check this with if, because this stuff will not go to WP theme directory
if ( file_exists( get_theme_file_path( '/inc/includes/taxonomy.php' ) ) ) {
  require get_theme_file_path( '/inc/includes/taxonomy.php' );
}

if ( file_exists( get_theme_file_path( '/inc/includes/post-type.php' ) ) ) {
  require get_theme_file_path( '/inc/includes/post-type.php' );
}

// Custom functions
