<?php
/**
 * Gather all bits and pieces together.
 * If you end up having multiple post types, taxonomies,
 * hooks and functions - please split those to their
 * own files under /inc and just require here.
 *
 * @Date: 2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-01-10 18:54:48
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * The current version of the theme.
 */
define( 'AIR_LIGHT_VERSION', '9.5.1' );

// We need to have some defaults as comments or empties so let's allow this:
// phpcs:disable Squiz.Commenting.InlineComment.SpacingBefore, WordPress.Arrays.ArrayDeclarationSpacing.SpaceInEmptyArray

/**
 * Theme settings
 */
add_action( 'after_setup_theme', function() {
  $theme_settings = [
    /**
     * Theme textdomain
     */
    'textdomain' => 'air-light',

    /**
     * Content width
     */
    'content_width' => 800,

    /**
     * Logo and featured image
     */
    'default_featured_image'  => null,
    'logo'                    => '/svg/logo.svg',

    /**
     * Custom setting group settings when using Air setting groups plugin.
     * On multilingual sites using Polylang, translations are handled automatically.
     */
    'custom_settings' => [
      // 'your-custom-setting' => [
      //   'id' => Your custom setting post id,
      //   'title' => 'Your custom setting',
      //   'block-editor' => true,
      //  ],
    ],

    'social_media_accounts'  => [
      // 'twitter' => [
      //   'title' => 'Twitter',
      //   'url'   => 'https://twitter.com/digitoimistodude',
      // ],
    ],

    /**
     * All links are checked with JS, if those direct to external site and if,
     * indicator of that is included. Exclude domains from that check in this array.
     */
    'external_link_domains_exclude' => [
      'localhost:3000',
      'airdev.test',
      'airwptheme.com',
      'localhost',
    ],

    /**
     * Menu locations
     */
    'menu_locations' => [
      'primary' => __( 'Primary Menu', 'air-light' ),
    ],

    /**
     * Taxonomies
     *
     * See the instructions:
     * https://github.com/digitoimistodude/air-light#custom-taxonomies
     */
    'taxonomies' => [
      // 'Your_Taxonomy' => [ 'post', 'page' ],
    ],

    /**
     * Post types
     *
     * See the instructions:
     * https://github.com/digitoimistodude/air-light#custom-post-types
     */
    'post_types' => [
      // 'Your_Post_Type',
    ],

    /**
     * Gutenberg -related settings
     */
    // Register custom ACF Blocks
    'acf_blocks' => [
      // [
      //   'name'           => 'block-file-slug',
      //   'title'          => 'Block Visible Name',
      //   // You can safely remove lines below if you find no use for them
      //   'prevent_cache'  => false, // Defaults to false,
      //   // Icon defaults to svg file inside svg/block-icons named after the block name,
      //   // eg. svg/block-icons/block-file-slug.svg
      //   //
      //   // Icon setting defines the dashicon equivalent: https://developer.wordpress.org/resource/dashicons/#block-default
      //   // 'icon'  => 'block-default',
      // ],
    ],

    // Custom ACF block default settings
    'acf_block_defaults' => [
      'category'          => 'air-light',
      'mode'              => 'auto',
      'align'             => 'full',
      'post_types'        => [
        'page',
      ],
      'supports'  => [
        'align'           => false,
        'anchor'          => true,
        'customClassName' => false,
      ],
      'render_callback'   => __NAMESPACE__ . '\render_acf_block',
    ],

    // Restrict to only selected blocks
    //
    // Options: 'none', 'all', 'all-core-blocks', 'all-acf-blocks',
    // or any specific block or a combination of these
    // Accepts both string (all*/none-options only) and array (options + specific blocks)
    'allowed_blocks' => [
      'post' => [
        'core/column',
        'core/columns',
        'core/coverImage',
        'core/embed',
        'core/freeform',
        'core/gallery',
        'core/heading',
        'core/html',
        'core/image',
        'core/list',
        'core/list-item',
        'core/paragraph',
        'core/quote',
        'core/block',
        'core/table',
        'core/textColumns',
      ],
      'page' => [
        // Core blocks needed for most WordPress core patterns
        'core/button',
        'core/buttons',
        'core/column',
        'core/columns',
        'core/cover',
        'core/group',
        'core/heading',
        'core/image',
        'core/media-text',
        'core/paragraph',
        'core/spacer',
        'core/verse',
        // Reusable blocks
        'core/block',
      ],
      // 'page' => [
      //   'all-acf-blocks',
      //   'core/paragraph',
      // ],
      // 'post-type' => [
      //   'acf/content-image',
      //   'core/paragraph',
      // ],
      // 'example' => [
      //   'all-core-blocks',
      //   'acf/content-image',
      // ],
    ],

    // If you want to use classic editor somewhere, define it here
    'use_classic_editor' => [],

    // Add your own settings and use them wherever you need, for example THEME_SETTINGS['my_custom_setting']
    'my_custom_setting' => true,
  ];

  $theme_settings = apply_filters( 'air_light_theme_settings', $theme_settings );

  define( 'THEME_SETTINGS', $theme_settings );
} ); // end action after_setup_theme

/**
 * Debug function to print all available blocks
 */
function debug_print_all_blocks() {
  $blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
  $block_names = array_map(function( $block ) {
    return "'" . $block->name . "',";
  }, $blocks);
  echo '<pre>' . implode( "\n", $block_names ) . '</pre>'; // phpcs:ignore
  die();
}

/**
 * Debug function to print all available block patterns
 */
function debug_print_all_patterns() {
  $patterns = \WP_Block_Patterns_Registry::get_instance()->get_all_registered();
  echo '<h2>Available Block Patterns:</h2>';
  echo '<pre>';
  foreach ( $patterns as $pattern_name => $pattern_data ) {
    echo "'" . esc_html( $pattern_name ) . "', // " . esc_html( $pattern_data['title'] ) . "\n";
  }
  echo '</pre>';
  die();
}

// Uncomment the following line to see all available blocks:
// add_action('init', __NAMESPACE__ . '\\debug_print_all_blocks');

// Uncomment the following line to see all available block patterns:
// add_action('init', __NAMESPACE__ . '\\debug_print_all_patterns');

// Disable remote patterns from WordPress.org:
add_filter( 'should_load_remote_block_patterns', '__return_false' );

/**
 * Remove unwanted core block patterns
 */
function remove_unwanted_core_patterns() {
  // Remove ALL core patterns completely
  remove_theme_support( 'core-block-patterns' );

  // Alternative - Remove specific patterns one by one (commented out)
  /*
  $patterns_to_remove = [
    // Text patterns
    'core/text-two-columns',
    'core/text-two-columns-with-images',
    'core/text-three-columns-buttons',

    // Query/Posts patterns
    'core/query-standard-posts',
    'core/query-medium-posts',
    'core/query-small-posts',
    'core/query-grid-posts',
    'core/query-large-title-posts',
    'core/query-offset-posts',

    // Social patterns
    'core/social-links-shared-background-color',

    // Header patterns
    'core/large-header',
    'core/large-header-button',

    // Quote patterns
    'core/quote',

    // Button patterns
    'core/two-buttons',
  ];

  foreach ( $patterns_to_remove as $pattern ) {
    unregister_block_pattern( $pattern );
  }
  */
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\remove_unwanted_core_patterns' );

/**
 * Required files
 */
require get_theme_file_path( '/inc/hooks.php' );
require get_theme_file_path( '/inc/includes.php' );
require get_theme_file_path( '/inc/template-tags.php' );

// Run theme setup
add_action( 'after_setup_theme', __NAMESPACE__ . '\theme_setup' );
add_action( 'after_setup_theme', __NAMESPACE__ . '\build_theme_support' );

/*
 * First: we register the taxonomies and post types after setup theme
 * If air-helper loads (for translations), we unregister the original taxonomies and post types
 * and reregister them with the translated ones.
 *
 * This allows the slugs translations to work before the translations are available,
 * and for the label translations to work if they are available.
 */
add_action( 'after_setup_theme', __NAMESPACE__ . '\build_taxonomies' );
add_action( 'after_setup_theme', __NAMESPACE__ . '\build_post_types' );

add_action( 'after_air_helper_init', __NAMESPACE__ . '\rebuild_taxonomies' );
add_action( 'after_air_helper_init', __NAMESPACE__ . '\rebuild_post_types' );
