<?php
/**
 * All hooks that are run in the theme are listed here
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Enable search view
 */
// add_filter( 'air_helper_disable_views_search', '__return_false' );

/**
 * Breadcrumb
 */
// require get_theme_file_path( 'inc/hooks/breadcrumb.php' );

/**
 * General hooks
 */
require get_theme_file_path( 'inc/hooks/general.php' );
add_action( 'widgets_init', __NAMESPACE__ . '\widgets_init' );
add_filter( 'air_helper_custom_settings_post_ids', __NAMESPACE__ . '\custom_settings_post_ids' );

/**
 * Scripts and styles associated hooks
 */
require get_theme_file_path( 'inc/hooks/scripts-styles.php' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_polyfills' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_theme_scripts' );

// NB! If you use ajax functionality in Gravity Forms, remove this line
// to prevent Uncaught ReferenceError: jQuery is not defined
add_action( 'wp_default_scripts', __NAMESPACE__ . '\move_jquery_into_footer' );

/**
 * Gutenberg associated hooks
 */
require get_theme_file_path( 'inc/hooks/gutenberg.php' );
add_filter( 'allowed_block_types', __NAMESPACE__ . '\allowed_block_types', 10, 2 );
add_filter( 'use_block_editor_for_post_type', __NAMESPACE__ . '\use_block_editor_for_post_type', 10, 2 );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_block_editor_assets' );
add_filter( 'block_editor_settings', __NAMESPACE__ . '\remove_gutenberg_inline_styles', 10, 2 );
add_action( 'after_setup_theme', __NAMESPACE__ . '\setup_editor_styles' );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_title_input_styles' );

/**
 * ACF blocks
 */
require get_theme_file_path( 'inc/hooks/acf-blocks.php' );
add_filter( 'block_categories', __NAMESPACE__ . '\acf_blocks_add_category_in_gutenberg', 10, 2 );
add_action( 'acf/init', __NAMESPACE__ . '\acf_blocks_init' );

/**
 * Form related hooks
 */
require get_theme_file_path( 'inc/hooks/forms.php' );
add_action( 'gform_enqueue_scripts', __NAMESPACE__ . '\dequeue_gf_stylesheets', 999 );
