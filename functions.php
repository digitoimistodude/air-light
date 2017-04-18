<?php
/**
 * The current version of the theme.
 *
 * @package air
 */

define( 'AIR_VERSION', '2.3.8' );

/**
 * Requires
 */
require get_theme_file_path( '/inc/hooks-defaults.php' );
require get_theme_file_path( '/inc/woocommerce.php' );
require get_theme_file_path( '/inc/menus.php' );
require get_theme_file_path( '/inc/nav-walker.php' );
require get_theme_file_path( '/inc/comments.php' );

/**
 * Enable theme support for essential features
 */
load_theme_textdomain( 'air', get_template_directory() . '/languages' );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );

/**
 * Set a locale for Finnish language
 */
setlocale( LC_ALL, 'fi_FI.utf8' );

/**
 * Custom uploads folder media/ instead of default content/uploads/.
 * Comment these out if you want to set up media library folder in wp-admin.
 */
update_option( 'upload_path', untrailingslashit( str_replace( 'wp', 'media', ABSPATH ) ) );
update_option( 'upload_url_path', untrailingslashit( str_replace( 'wp', 'media', get_site_url() ) ) );
define( 'uploads', '' . 'media' );
add_filter( 'option_uploads_use_yearmonth_folders', '__return_false', 100 );

/**
 * Enqueue scripts and styles.
 */
function air_scripts() {
  $air_template = 'global';

  // Styles
  wp_enqueue_style( 'styles', get_theme_file_uri( "css/{$air_template}.css" ), array(), filemtime( get_theme_file_path( "css/{$air_template}.css" ) ) );

  // Scripts
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts', get_theme_file_uri( 'js/all.js' ), array(), filemtime( get_theme_file_path( 'js/all.js' ) ), true );
  wp_localize_script( 'scripts', 'screenReaderTexts', array(
		'expandMenu'      => esc_html__( 'Open menu', 'air' ),
		'collapseMenu'    => esc_html__( 'Close menu', 'air' ),
		'expandSubMenu'   => '<span class="screen-reader-text">' . __( 'Open sub menu', 'air' ) . '</span>',
		'collapseSubMenu' => '<span class="screen-reader-text">' . __( 'Close sub menu', 'air' ) . '</span>',
	) );
}
add_action( 'wp_enqueue_scripts', 'air_scripts' );

/**
 * Remove SendGrid credentials in development env, so that
 * test emails won't go out to client.
 */
if ( getenv( 'WP_ENV' ) === 'development' ) {

  function air_remove_sendgrid_apikey() {
    return '';
  }
  add_filter( 'option_sendgrid_api_key', 'air_remove_sendgrid_apikey' );

  function air_remove_sendgrid_pwd() {
    return '';
  }
  add_filter( 'option_sendgrid_pwd', 'air_remove_sendgrid_pwd' );

}


if ( ! function_exists( 'air_entry_footer' ) ) :

  /**
   * Prints HTML with meta information for the categories, tags and comments.
   */
  function air_entry_footer() {
    // Hide category and tag text for pages.
  	if ( 'post' === get_post_type() ) {

  		$categories_list = get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma', 'air' ) );
  		if ( $categories_list ) { ?>
        <p class="cat"><?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'air' ) ); ?></p>
      <?php	}

  		$tags_list = get_the_tag_list( '', _x( ', ', 'Used between list items, there is a space after the comma', 'air' ) );
  		if ( $tags_list ) {
        the_tags( '<ul class="tags"><li>', '</li><li>', '</li></ul>' );
      }
  	}

  	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
  		echo '<span class="comments-link">
      <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 768q0 139-94 257t-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5 2-6l2.5-5 3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5 353.5 68.5 256.5 186.5 94 257zm384 256q0 120-71 224.5t-195 176.5q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5 2 6 .5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230z"/></svg> ';
  		comments_popup_link( sprintf( wp_kses( __( 'Leave a comment<span class="screen-reader-text"> on %s</span>', 'air' ), array( 'span' => array( 'class' => array() ) ) ), get_the_title() ) );
  		echo '</span>';
  	}

  	edit_post_link(
  		sprintf(
  			_x( 'Edit %s', '%s: Name of current post', 'air' ),
  			the_title( '<span class="screen-reader-text">"', '"</span>', false )
  		),
  		'<p class="edit-link">',
  		'</p>'
  	);
  }
endif;
