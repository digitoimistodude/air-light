<?php

/**
 * Remove archive title prefix
 */
function air_remove_archive_title_prefix( $title ) {
  return preg_replace( '/^\w+: /', '', $title );
}
add_filter( 'get_the_archive_title', 'air_remove_archive_title_prefix' );

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

/*
* Clean up WP admin bar
*/
function remove_admin_bar_links() {
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu( 'about' );            // Remove the about WordPress link
  $wp_admin_bar->remove_menu( 'wporg' );            // Remove the WordPress.org link
  $wp_admin_bar->remove_menu( 'documentation' );    // Remove the WordPress documentation link
  $wp_admin_bar->remove_menu( 'support-forums' );   // Remove the support forums link
  $wp_admin_bar->remove_menu( 'feedback' );         // Remove the feedback link
  $wp_admin_bar->remove_menu( 'updates' );          // Remove the updates link
  $wp_admin_bar->remove_menu( 'comments' );         // Remove the comments link
}
add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );

/*
* Clean up WP admin menu from stuff we usually don't need
*/
function remove_admin_menu_links() {
  remove_menu_page( 'themes.php?page=editcss' );
  remove_menu_page( 'edit.php' );
  remove_menu_page( 'widgets.php' );
  remove_menu_page( 'edit-comments.php' );
  remove_menu_page( 'admin.php?page=jetpack' );
}
add_action( 'admin_menu', 'remove_admin_menu_links', 999 );

/**
* Hide WP updates nag
*/
add_action( 'admin_menu', 'air_wphidenag' );
function air_wphidenag() {
  remove_action( 'admin_notices', 'update_nag', 3 );
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
        top: 32px;
        position: relative;
      }

      @media screen and (max-width: 600px) {
        html {
          top: 46px;
        }
      }

     /* Hide WordPress logo */
     #wp-admin-bar-wp-logo {
       display: none;
     }

     /* Invert admin bar */
     #wpadminbar {
       background: #fff;
     }

     @media screen and (max-width: 600px) {
       #wpadminbar {
         position: fixed;
       }
     }

     #wpadminbar .ab-empty-item,
     #wpadminbar a.ab-item,
     #wpadminbar>#wp-toolbar span.ab-label,
     #wpadminbar>#wp-toolbar span.noticon {
       color: #23282d;
     }

     #wpadminbar #adminbarsearch:before,
     #wpadminbar .ab-icon:before,
     #wpadminbar .ab-item:before {
       color: #23282d;
       background: transparent;
     }

     #wpadminbar.nojs li:hover > .ab-sub-wrapper,
     #wpadminbar li.hover > .ab-sub-wrapper {
       top: 32px;
     }
   </style>
<?php }
} else {
  show_admin_bar( false );
}

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function air_pingback_header() {
	if ( is_singular() && pings_open() ) :
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	endif;
}
add_action( 'wp_head', 'air_pingback_header' );
