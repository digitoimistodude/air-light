<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:05:35
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2023-03-31 14:29:17
 *
 * @package air-light
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
      'name'                  => self::ask__( 'Your Taxonomy', 'Taxonomy plural name' ),
      'singular_name'         => self::ask__( 'Your Taxonomy', 'Taxonomy singular name' ),
      'search_items'          => self::ask__( 'Your Taxonomy', 'Search Your Taxonomies' ),
      'popular_items'         => self::ask__( 'Your Taxonomy', 'Popular Your Taxonomies' ),
      'all_items'             => self::ask__( 'Your Taxonomy', 'All Your Taxonomies' ),
      'parent_item'           => self::ask__( 'Your Taxonomy', 'Parent Your Taxonomy' ),
      'parent_item_colon'     => self::ask__( 'Your Taxonomy', 'Parent Your Taxonomy' ),
      'edit_item'             => self::ask__( 'Your Taxonomy', 'Edit Your Taxonomy' ),
      'update_item'           => self::ask__( 'Your Taxonomy', 'Update Your Taxonomy' ),
      'add_new_item'          => self::ask__( 'Your Taxonomy', 'Add New Your Taxonomy' ),
      'new_item_name'         => self::ask__( 'Your Taxonomy', 'New Your Taxonomy' ),
      'add_or_remove_items'   => self::ask__( 'Your Taxonomy', 'Add or remove Your Taxonomies' ),
      'choose_from_most_used' => self::ask__( 'Your Taxonomy', 'Choose from most used Taxonomies' ),
      'menu_name'             => self::ask__( 'Your Taxonomy', 'Your Taxonomy' ),
    ];

    $args = [
      'labels'            => $labels,
      'public'            => false,
      'show_in_nav_menus' => true,
      'show_admin_column' => true,
      'hierarchical'      => true,
      'show_tagcloud'     => false,
      'query_var'         => false,
      'pll_translatable'  => true,
      'rewrite'           => [
        'slug' => 'your-taxonomy',
      ],
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }
}
