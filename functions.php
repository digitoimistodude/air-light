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
define( 'AIR_VERSION', '2.0.0' );

/**
 * WooCommerce support
 */
add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

/**
 * Requires
 */
require get_template_directory() . '/inc/woocommerce.php';

/**
 * Disable emojicons introduced with WP 4.2
 *
 * @link http://wordpress.stackexchange.com/questions/185577/disable-emojicons-introduced-with-wp-4-2
 */
function disable_wp_emojicons() {
  // All actions related to emojis
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  // Remove TinyMCE emojis
  add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
}
add_action( 'init', 'disable_wp_emojicons' );
// Disable TinyMCE emojicons
function disable_emojicons_tinymce( $plugins ) {
  if ( is_array( $plugins ) ) {
    return array_diff( $plugins, array( 'wpemoji' ) );
  } else {
    return array();
  }
}

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

/**
 * Set a locale for Finnish language
 */
setlocale( LC_ALL, 'fi_FI.utf8' );

/*
* Clean up WP admin bar
*/
function remove_admin_bar_links() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('about');            // Remove the about WordPress link
    $wp_admin_bar->remove_menu('wporg');            // Remove the WordPress.org link
    $wp_admin_bar->remove_menu('documentation');    // Remove the WordPress documentation link
    $wp_admin_bar->remove_menu('support-forums');   // Remove the support forums link
    $wp_admin_bar->remove_menu('feedback');         // Remove the feedback link
    $wp_admin_bar->remove_menu('updates');          // Remove the updates link
    $wp_admin_bar->remove_menu('comments');         // Remove the comments link
}
add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );

/*
* Clean up WP admin menu from stuff we usually don't need
*/
function remove_admin_menu_links() {
    remove_menu_page('themes.php?page=editcss');
    remove_menu_page('edit.php');
    remove_menu_page('widgets.php');
    remove_menu_page('edit-comments.php');
    remove_menu_page('admin.php?page=jetpack');
}
add_action('admin_menu', 'remove_admin_menu_links', 999);

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
 * Custom comments
 */
function air_comments( $comment, $args, $depth ) {
$GLOBALS['comment'] = $comment; ?>

  <li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
    <div id="comment-<?php comment_ID(); ?>">
        <?php echo get_avatar( $comment, $size = '62' ); ?>
        <h4 class="comment-author"><?php printf(__('<a href="#">%s</h4>'), get_comment_author_link()) ?></a>

      <?php if ( 0 === $comment->comment_approved ) : ?>
        <p><em>Kommenttisi odottaa ylläpidon hyväksymistä.</em></p>
      <?php endif; ?>

        <p class="comment-time">
          <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
            <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>
            <time><?php printf(__('%1$s at %2$s'), get_comment_date(), get_comment_time()) ?></time>
          </a>
        </p>

        <?php comment_text() ?>

        <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
        <?php edit_comment_link(__('&mdash; Edit'),'  ','') ?>

    </div>
<?php
}

/**
 * Remove WordPress Admin Bar when not on development env
 *
 * @link http://davidwalsh.name/remove-wordpress-admin-bar-css
 */
add_action( 'get_header', 'air_remove_admin_login_header' );
function air_remove_admin_login_header() {
  remove_action( 'wp_head', '_admin_bar_bump_cb' );
}

if ( getenv( 'WP_ENV' ) === 'development' && is_user_logged_in() ) {
  add_action('wp_head', 'air_dev_adminbar');

  function air_dev_adminbar() { ?>
    <style>
      html {
        height: auto;
        padding-bottom: 32px;
      }

			#wpadminbar {
				top: auto;
				bottom: 0;
			}

			#wpadminbar.nojs li:hover > .ab-sub-wrapper,
			#wpadminbar li.hover > .ab-sub-wrapper {
				bottom: 32px;
			}
		</style>
<?php }
} else {
  show_admin_bar(false);
}

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function air_pingback_header() {
	if ( is_singular() && pings_open() ) :
		echo '<link rel="pingback" href="', bloginfo( 'pingback_url' ), '">';
	endif;
}
add_action( 'wp_head', 'air_pingback_header' );

/**
 * Custom uploads folder media/ instead of default content/uploads/.
 * Comment these out if you want to set up media library folder in wp-admin.
 */
update_option( 'upload_path', untrailingslashit( str_replace( 'wp', 'media', ABSPATH ) ) );
update_option( 'upload_url_path', untrailingslashit( str_replace( 'wp', 'media', get_site_url() ) ) );
define( 'uploads', '' . 'media' );
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
		echo '<span class="comments-link">
    <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 768q0 139-94 257t-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5 2-6l2.5-5 3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5 353.5 68.5 256.5 186.5 94 257zm384 256q0 120-71 224.5t-195 176.5q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5 2 6 .5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230z"/></svg> ';
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

  wp_enqueue_style( 'styles', get_template_directory_uri() . '/css/' . $air_template . '.css' );
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
