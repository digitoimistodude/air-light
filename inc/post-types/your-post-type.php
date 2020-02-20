<?php
/**
 * @package air-light
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:45
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-02-18 15:07:08
 **/

namespace Air_Light;

/**
 * Registers the Your Post Type post type.
 */
class Your_Post_Type extends Post_Type {

  public function register() {

    // Modify all the i18ized strings here.
    $generated_labels = [
      'menu_name'          => __( 'Your Post Type', 'air-light' ),
      'name'               => _x( 'Your Post Types', 'post type general name', 'air-light' ),
      'singular_name'      => _x( 'Your Post Type', 'post type singular name', 'air-light' ),
      'name_admin_bar'     => _x( 'Your Post Type', 'add new on admin bar', 'air-light' ),
      'add_new'            => _x( 'Add New', 'thing', 'air-light' ),
      'add_new_item'       => __( 'Add New Your Post Type', 'air-light' ),
      'new_item'           => __( 'New Your Post Type', 'air-light' ),
      'edit_item'          => __( 'Edit Your Post Type', 'air-light' ),
      'view_item'          => __( 'View Your Post Type', 'air-light' ),
      'all_items'          => __( 'All Your Post Types', 'air-light' ),
      'search_items'       => __( 'Search Your Post Types', 'air-light' ),
      'parent_item_colon'  => __( 'Parent Your Post Types:', 'air-light' ),
      'not_found'          => __( 'No your post types found.', 'air-light' ),
      'not_found_in_trash' => __( 'No your post types found in Trash.', 'air-light' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'labels'              => $generated_labels,
      'description'         => '',
      'rewrite'             => [
        'slug' => 'your-post-type',
      ],
      'supports'            => [ 'title', 'editor', 'thumbnail' ],
      'taxonomies'          => [],
      'show_in_menu'        => true,
      'public'              => true,
      'exclude_from_search' => false,
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}