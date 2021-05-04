<?php
/**
 * The base for a post type object
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:45:26
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-05-04 11:12:42
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * A base for Post Type creation
 */
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


  public function __construct( $slug ) {
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
  public function register_wp_post_type( $slug, $args ) {
    return register_post_type( $slug, $args );
  }

}
