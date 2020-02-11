<?php

namespace Air_Light;

class Contact extends Post_Type {

  /**
   * Registers the thing post type.
   */
  public function register() {

    // Modify all the i18ized strings here.
    $generated_labels = [
      'menu_name'          => __( 'Contact', 'air-light' ),
      'name'               => _x( 'Contacts', 'post type general name', 'air-light' ),
      'singular_name'      => _x( 'Contact', 'post type singular name', 'air-light' ),
      'name_admin_bar'     => _x( 'Contact', 'add new on admin bar', 'air-light' ),
      'add_new'            => _x( 'Add New', 'thing', 'air-light' ),
      'add_new_item'       => __( 'Add New Contact', 'air-light' ),
      'new_item'           => __( 'New Contact', 'air-light' ),
      'edit_item'          => __( 'Edit Contact', 'air-light' ),
      'view_item'          => __( 'View Contact', 'air-light' ),
      'all_items'          => __( 'All Contacts', 'air-light' ),
      'search_items'       => __( 'Search Contacts', 'air-light' ),
      'parent_item_colon'  => __( 'Parent Contacts:', 'air-light' ),
      'not_found'          => __( 'No contacts found.', 'air-light' ),
      'not_found_in_trash' => __( 'No contacts found in Trash.', 'air-light' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'labels'       => $generated_labels,
      'description'  => '',
      'rewrite'      => [
        'slug' => 'contact',
      ],
      'supports'     => [ 'title', 'editor', 'thumbnail' ],
      'taxonomies'   => [],
      'show_in_menu' => true,
      'public'       => true,
      'exclude_from_search' => false,
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}