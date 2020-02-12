<?php
/**
 * Include custom features etc.
 *
 * @package air-light
 */

namespace Air_Light;

// Theme setup
require get_theme_file_path( '/inc/includes/theme-setup.php' );

// Nav Walker
require get_theme_file_path( '/inc/includes/nav-walker.php' );

// Post type and taxonomy base classes
require get_theme_file_path( '/inc/includes/taxonomy.php' );
require get_theme_file_path( '/inc/includes/post-type.php' );

