<?php
/**
 * Collection of theme based clean ups that ensure HTML5 validation pass.
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Remove unnecessary type attributes to suppress Nu HTML validator messages
 */
add_filter( 'style_loader_tag', __NAMESPACE__ . '\remove_type_attr', 10, 2 );
add_filter( 'script_loader_tag', __NAMESPACE__ . '\remove_type_attr', 10, 2 );
add_filter( 'autoptimize_html_after_minify', __NAMESPACE__ . '\remove_type_attr', 10, 2 );
function remove_type_attr( $tag, $handle = '' ) {
  return preg_replace( "/type=['\"]text\/(javascript|css)['\"]/", '', $tag ); // phpcs:ignore
}

add_action( 'after_setup_theme', function() {
  add_theme_support( 'html5', [ 'script', 'style' ] );
});

/**
 * Remove unnecessary WordPress injected .recentcomments
 */
function remove_recent_comments_style() {
  global $wp_widget_factory;
  remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
}
add_action( 'widgets_init', __NAMESPACE__ . '\remove_recent_comments_style' );

/**
 * Disable the WordPress emojis
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

	// Remove from TinyMCE
	add_filter( 'tiny_mce_plugins', __NAMESPACE__ . '\disable_emojis_tinymce' );
}
add_action( 'init', __NAMESPACE__ . '\disable_emojis' );

/**
 * Filter out the tinymce emoji plugin.
 */
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}
