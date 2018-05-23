<?php
/**
 * The current version of the theme.
 *
 * @package air-light
 */

define( 'AIR_LIGHT_VERSION', '4.2.1' );

/**
 * Requires.
 */
require get_theme_file_path( '/inc/functions.php' );
require get_theme_file_path( '/inc/menus.php' );
require get_theme_file_path( '/inc/nav-walker.php' );

/**
 * Enable theme support for essential features.
 */
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
// add_theme_support( 'woocommerce' );

/**
 * Load textdomain.
 */
load_theme_textdomain( 'air-light', get_template_directory() . '/languages' );

/**
 * Define content width in articles
 */
if ( ! isset( $content_width ) ) {
	$content_width = 800;
}

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _air_light_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'air-light' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'air-light' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', '_air_light_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function air_light_scripts() {
	$air_light_template = 'global.min';

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
}
add_action( 'wp_enqueue_scripts', 'air_light_scripts' );
