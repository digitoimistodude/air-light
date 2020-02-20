<?php
/**
 * @package air-light
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:05:35
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-02-18 15:06:07
 */

namespace Air_Light;

/**
 * Registers the Your Taxonomy taxonomy.
 *
 * @param Array $post_types Optional. Post types in
 * which the taxonomy should be registered.
 */
class Your_Taxonomy extends Taxonomy {


  public function register( array $post_types = [] ) {
    // Taxonomy labels.
    $labels = [
      'name'                  => _x( 'Your Taxonomies', 'Taxonomy plural name', 'air-light' ),
      'singular_name'         => _x( 'Your Taxonomy', 'Taxonomy singular name', 'air-light' ),
      'search_items'          => __( 'Search Your Taxonomies', 'air-light' ),
      'popular_items'         => __( 'Popular Your Taxonomies', 'air-light' ),
      'all_items'             => __( 'All Your Taxonomies', 'air-light' ),
      'parent_item'           => __( 'Parent Your Taxonomy', 'air-light' ),
      'parent_item_colon'     => __( 'Parent Your Taxonomy', 'air-light' ),
      'edit_item'             => __( 'Edit Your Taxonomy', 'air-light' ),
      'update_item'           => __( 'Update Your Taxonomy', 'air-light' ),
      'add_new_item'          => __( 'Add New Your Taxonomy', 'air-light' ),
      'new_item_name'         => __( 'New Your Taxonomy', 'air-light' ),
      'add_or_remove_items'   => __( 'Add or remove Your Taxonomies', 'air-light' ),
      'choose_from_most_used' => __( 'Choose from most used Taxonomies', 'air-light' ),
      'menu_name'             => __( 'Your Taxonomy', 'air-light' ),
    ];

    $args = [
      'labels'            => $labels,
      'public'            => true,
      'show_in_nav_menus' => true,
      'show_admin_column' => true,
      'hierarchical'      => false,
      'show_tagcloud'     => true,
      'show_ui'           => true,
      'query_var'         => true,
      'rewrite'           => [
        'slug' => 'your-taxonomy',
      ],
      'query_var'         => true,
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }

}
