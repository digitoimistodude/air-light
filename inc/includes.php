<?php
/**
 * Include custom features etc.
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:07:17
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-02-18 15:07:37
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

