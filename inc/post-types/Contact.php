<?php

namespace Air_Light;

class Contact extends Post_Type {

  /**
   * Registers the thing post type.
   */
  public function register() {

    // Modify all the i18ized strings here.
    $generated_labels = [
      'menu_name'          => __( 'Contact', THEME_SETTINGS['textdomain'] ),
      'name'               => _x( 'Contacts', 'post type general name', THEME_SETTINGS['textdomain'] ),
      'singular_name'      => _x( 'Contact', 'post type singular name', THEME_SETTINGS['textdomain'] ),
      'name_admin_bar'     => _x( 'Contact', 'add new on admin bar', THEME_SETTINGS['textdomain'] ),
      'add_new'            => _x( 'Add New', 'thing', THEME_SETTINGS['textdomain'] ),
      'add_new_item'       => __( 'Add New Contact', THEME_SETTINGS['textdomain'] ),
      'new_item'           => __( 'New Contact', THEME_SETTINGS['textdomain'] ),
      'edit_item'          => __( 'Edit Contact', THEME_SETTINGS['textdomain'] ),
      'view_item'          => __( 'View Contact', THEME_SETTINGS['textdomain'] ),
      'all_items'          => __( 'All Contacts', THEME_SETTINGS['textdomain'] ),
      'search_items'       => __( 'Search Contacts', THEME_SETTINGS['textdomain'] ),
      'parent_item_colon'  => __( 'Parent Contacts:', THEME_SETTINGS['textdomain'] ),
      'not_found'          => __( 'No contacts found.', THEME_SETTINGS['textdomain'] ),
      'not_found_in_trash' => __( 'No contacts found in Trash.', THEME_SETTINGS['textdomain'] ),
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