<?php
/**
 * Air functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package air
 */

/**
 * The current version of the theme.
 */
define( 'AIR_VERSION', '1.6.3' );

/**
 * Allow Gravity Forms to hide labels to add placeholders
 */
add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

/**
 *  Set Yoast SEO plugin metabox priority to low
 */
function air_lowpriority_yoastseo() {
  return 'low';
}
add_filter( 'wpseo_metabox_prio', 'air_lowpriority_yoastseo' );

/**
 * Enable theme support for essential features
 */
load_theme_textdomain( 'air', get_template_directory() . '/languages' );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
setlocale( LC_ALL, 'fi_FI.utf8' );

/**
* Hide WP updates nag
*/
add_action( 'admin_menu', 'air_wphidenag' );
function air_wphidenag() {
   remove_action( 'admin_notices', 'update_nag', 3 );
}

/**
 * Editable navigation menus.
 */
register_nav_menus( array(
	'primary' => __( 'Primary Menu', 'air' ),
) );

/**
 * Custom navigation walker
 */
require get_template_directory() . '/nav.php';

/**
 * Remove WordPress Admin Bar
 *
 * @link http://davidwalsh.name/remove-wordpress-admin-bar-css
 */
add_action( 'get_header', 'air_remove_admin_login_header' );
function air_remove_admin_login_header() {
  remove_action( 'wp_head', '_admin_bar_bump_cb' );
}
show_admin_bar(false);

/**
 * Custom uploads folder media/ instead of default content/uploads/.
 * Comment these out if you want to set up media library folder in wp-admin.
 */
update_option( 'upload_path', untrailingslashit( str_replace( 'wp', 'media', ABSPATH ) ) );
update_option( 'upload_url_path', untrailingslashit( str_replace( 'wp', 'media', get_site_url() ) ) );
define( 'uploads', ''.'media' );
add_filter( 'option_uploads_use_yearmonth_folders', '__return_false', 100 );

if ( ! function_exists( 'air_entry_footer' ) ) :

/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function air_entry_footer() {
  // Hide category and tag text for pages.
	if ( 'post' === get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( esc_html__( ', ', 'air' ) );
		if ( $categories_list ) { ?>
      <p class="cat"><?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'air' ) ); ?></p>
    <?php	}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', esc_html__( ', ', 'air' ) );
		if ( $tags_list ) { ?>
      <?php the_tags('<ul class="tags"><li>','</li><li>','</li></ul>'); ?>
		<?php }
	}

	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		comments_popup_link( sprintf( wp_kses( __( 'Leave a comment<span class="screen-reader-text"> on %s</span>', 'air' ), array( 'span' => array( 'class' => array() ) ) ), get_the_title() ) );
		echo '</span>';
	}

	edit_post_link(
		sprintf(
			/* translators: %s: Name of current post */
			esc_html__( 'Edit %s', 'air' ),
			the_title( '<span class="screen-reader-text">"', '"</span>', false )
		),
		'<p class="edit-link">',
		'</p>'
	);
}
endif;

/**
 * Enqueue scripts and styles.
 */
function air_scripts() {
  // If you want to use a different CSS per view, you can set it up here
  $air_template = 'global';

  wp_enqueue_style( 'styles', get_template_directory_uri() . '/css/' . $air_template .'.css' );
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/all.js', array(), AIR_VERSION, true );
  wp_localize_script( 'scripts', 'screenReaderTexts', array(
		'expandMenu'            => esc_html__( 'Open menu', 'air' ),
		'collapseMenu'          => esc_html__( 'Close menu', 'air' ),
		'expandSubMenu'         => '<span class="screen-reader-text">' . esc_html__( 'Open sub menu', 'air' ) . '</span>',
		'collapseSubMenu'       => '<span class="screen-reader-text">' . esc_html__( 'Close sub menu', 'air' ) . '</span>',
	) );
}
add_action( 'wp_enqueue_scripts', 'air_scripts' );
