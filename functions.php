<?php
/**
 * air functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package air
 */

 /*
  * Allow Gravity Forms to hide labels to add placeholders
  */
 add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

/*
 * Enable theme support for essential features
 */
load_theme_textdomain( 'air', get_template_directory() . '/languages' );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
setlocale(LC_ALL, 'fi_FI.utf8');

/*
* Hide WP updates nag
*/
add_action('admin_menu','air_wphidenag');
function air_wphidenag() {
   remove_action( 'admin_notices', 'update_nag', 3 );
}

/*
 * Editable navigation menus.
 */
register_nav_menus( array(
	'primary' => __( 'Primary Menu', 'air' ),
) );

/*
 * Custom navigation walker
 */
require get_template_directory() . '/nav.php';

/**
 * Remove WordPress Admin Bar
 *
 * @link http://davidwalsh.name/remove-wordpress-admin-bar-css
 */
add_action('get_header', 'air_remove_admin_login_header');
function air_remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
show_admin_bar(false);

/*
 * Custom uploads folder media/ instead of default content/uploads/.
 * Comment these out if you want to set up media library folder in wp-admin.
 */
update_option( 'upload_path', untrailingslashit( str_replace( 'wp', 'media', ABSPATH ) ) );
update_option( 'upload_url_path', untrailingslashit( str_replace( 'wp', 'media', get_site_url() ) ) );
define( 'uploads', ''.'media' );
add_filter( 'option_uploads_use_yearmonth_folders', '__return_false', 100 );

/**
 * Remove query strings from static resources
 *
 * @link https://wordpress.org/support/topic/how-to-remove-query-strings-from-static-resources
 */
function air_remove_script_version( $src ){
  $parts = explode( '?', $src );
  return $parts[0];
}
add_filter( 'script_loader_src', 'air_remove_script_version', 15, 1 );
add_filter( 'style_loader_src', 'air_remove_script_version', 15, 1 );

if ( ! function_exists( 'air_entry_footer' ) ) :

/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function air_entry_footer() {
	// Hide category and tag text for pages.
	if ( 'post' === get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( esc_html__( ', ', 'air' ) );
		if ( $categories_list ) {
			printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'air' ) . '</span>', $categories_list ); // WPCS: XSS OK.
		}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', esc_html__( ', ', 'air' ) );
		if ( $tags_list ) {
			printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'air' ) . '</span>', $tags_list ); // WPCS: XSS OK.
		}
	}

	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		comments_popup_link( esc_html__( 'Leave a comment', 'air' ), esc_html__( '1 Comment', 'air' ), esc_html__( '% Comments', 'air' ) );
		echo '</span>';
	}

	edit_post_link(
		sprintf(
			/* translators: %s: Name of current post */
			esc_html__( 'Edit %s', 'air' ),
			the_title( '<span class="screen-reader-text">"', '"</span>', false )
		),
		'<span class="edit-link">',
		'</span>'
	);
}
endif;

/**
 * Enqueue scripts and styles.
 */
function air_scripts() {
  wp_enqueue_style( 'layout', get_template_directory_uri() . '/css/layout.css' );
  wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/all.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'air_scripts' );
