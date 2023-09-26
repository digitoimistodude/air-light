<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:45
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2023-03-31 14:39:55
 *
 * @package air-light
 **/

namespace Air_Light;

/**
 * Registers the Your Post Type post type.
 */
class Your_Post_Type extends Post_Type {

  public function register() {
    // Modify all the i18ized strings here.
    $generated_labels = [
      // The Post_Type ask__ function wraps the air-helper ask__, and automatically registers the keys to Polylang!
      // self::ask__( 'Key', 'Default value' )
      // -> Key: Default value => 'Default value'
      'menu_name'          => self::ask__( 'Your Post Type', 'Your Post Type' ),
      'name'               => self::ask__( 'Your Post Type', 'Your Post Types' ),
      'singular_name'      => self::ask__( 'Your Post Type', 'Your Post Type' ),
      'name_admin_bar'     => self::ask__( 'Your Post Type', 'Your Post Type' ),
      'add_new'            => self::ask__( 'Your Post Type', 'Add New' ),
      'add_new_item'       => self::ask__( 'Your Post Type', 'Add New Your Post Type' ),
      'new_item'           => self::ask__( 'Your Post Type', 'New Your Post Type' ),
      'edit_item'          => self::ask__( 'Your Post Type', 'Edit Your Post Type' ),
      'view_item'          => self::ask__( 'Your Post Type', 'View Your Post Type' ),
      'all_items'          => self::ask__( 'Your Post Type', 'All Your Post Types' ),
      'search_items'       => self::ask__( 'Your Post Type', 'Search Your Post Types' ),
      'parent_item_colon'  => self::ask__( 'Your Post Type', 'Parent Your Post Types:' ),
      'not_found'          => self::ask__( 'Your Post Type', 'No your post types found.' ),
      'not_found_in_trash' => self::ask__( 'Your Post Type', 'No your post types found in Trash.' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'labels'              => $generated_labels,
      'menu_icon'           => null,
      'public'              => true,
      'show_ui'             => true,
      'has_archive'         => false,
      'exclude_from_search' => false,
      'show_in_rest'        => false,
      'pll_translatable'    => true,
      'rewrite'             => [
        'with_front'  => false,
        'slug'        => 'your-post-type',
      ],
      'supports'            => [ 'title', 'editor', 'thumbnail', 'revisions' ],
      'taxonomies'          => [],
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}
