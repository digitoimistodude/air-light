<?php
namespace Air_Light;

class Example extends Taxonomy {

  /**
   * Registers the colour taxonomy.
   *
   * @param array $post_types Optional. Post types in which the taxonomy
   *                          should be registered.
   * @return WP_Post_Type|WP_Error Registered post type or error in case
   *                               of failure.
   */
  public function register( array $post_types = [] ) {
    // Taxonomy labels.
    $labels = [
      'name'                  => _x( 'Examples', 'Taxonomy plural name', air-light,
      'singular_name'         => _x( 'Example', 'Taxonomy singular name', air-light,
      'search_items'          => __( 'Search Examples', air-light,
      'popular_items'         => __( 'Popular Examples', air-light,
      'all_items'             => __( 'All Examples', air-light,
      'parent_item'           => __( 'Parent Example', air-light,
      'parent_item_colon'     => __( 'Parent Example', air-light,
      'edit_item'             => __( 'Edit Example', air-light,
      'update_item'           => __( 'Update Example', air-light,
      'add_new_item'          => __( 'Add New Example', air-light,
      'new_item_name'         => __( 'New Example', air-light,
      'add_or_remove_items'   => __( 'Add or remove Examples', air-light,
      'choose_from_most_used' => __( 'Choose from most used examples', air-light,
      'menu_name'             => __( 'Example', air-light,
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
        'slug' => 'example',
      ],
      'query_var'         => true,
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }

}