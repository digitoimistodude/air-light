<?php
/**
 * The base for a post type object
 */

namespace Air_Light;

abstract class Post_Type {

  /**
   * WordPress post type object.
   *
   * @var WP_Post_Type
   */
  public $post_type = null;

  /**
   * Post type slug or name.
   *
   * @var string
   */
  public $slug;


  function __construct( string $slug ) {
    $this->slug = $slug;
  }


  /**
   * Registers the post type data and registers it in WordPress.
   */
  abstract protected function register();

  /**
   * Registers a custom post type in WordPress.
   *
   * @see http://codex.wordpress.org/Function_Reference/register_post_type
   * @see https://developer.wordpress.org/reference/classes/wp_post_type/
   *
   * @param  string $slug Post type slug (max. 20 characters, cannot contain
   *                      capital letters or spaces).
   * @param  array  $args Post type arguments.
   * @return WP_Post_Type|WP_Error Registered post type or error in case
   *                               of failure.
   */
  function register_wp_post_type( string $slug, array $args ) {
    return register_post_type( $slug, $args );
  }

}