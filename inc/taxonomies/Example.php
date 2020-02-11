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
      'name'                  => _x( 'Examples', 'Taxonomy plural name', THEME_SETTINGS['textdomain'],
      'singular_name'         => _x( 'Example', 'Taxonomy singular name', THEME_SETTINGS['textdomain'],
      'search_items'          => __( 'Search Examples', THEME_SETTINGS['textdomain'],
      'popular_items'         => __( 'Popular Examples', THEME_SETTINGS['textdomain'],
      'all_items'             => __( 'All Examples', THEME_SETTINGS['textdomain'],
      'parent_item'           => __( 'Parent Example', THEME_SETTINGS['textdomain'],
      'parent_item_colon'     => __( 'Parent Example', THEME_SETTINGS['textdomain'],
      'edit_item'             => __( 'Edit Example', THEME_SETTINGS['textdomain'],
      'update_item'           => __( 'Update Example', THEME_SETTINGS['textdomain'],
      'add_new_item'          => __( 'Add New Example', THEME_SETTINGS['textdomain'],
      'new_item_name'         => __( 'New Example', THEME_SETTINGS['textdomain'],
      'add_or_remove_items'   => __( 'Add or remove Examples', THEME_SETTINGS['textdomain'],
      'choose_from_most_used' => __( 'Choose from most used examples', THEME_SETTINGS['textdomain'],
      'menu_name'             => __( 'Example', THEME_SETTINGS['textdomain'],
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