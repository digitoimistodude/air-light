<?php
/**
 * The base for a post type object
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:45:26
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2023-03-31 14:50:15
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

  /**
   * Translations used in labels
   *
   * @var array(string)
   */
  public $translations;


  public function __construct( $slug ) {
    $this->slug = $slug;
    $this->translations = [];
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
    // Register PolyLang translatable only if it's private
    if ( $args['pll_translatable'] && false === $args['public'] ) {
      add_filter( 'pll_get_post_types', function( $cpts ) use ( $slug ) {
        $cpts[ $slug ] = $slug;

        return $cpts;
      }, 9, 2 );
    }

    $this->register_translations();
    return register_post_type( $slug, $args );
  }

  // Wrapper for ask__
  public function ask__( $key, $value ) {
    $pll_key = "{$key}: {$value}";
    $this->translations[ $pll_key ] = $value;
    if ( function_exists( 'ask__' ) ) {
      return ask__( $pll_key );
    }

    return $value;
  }

  private function register_translations() {
    $translations = $this->translations;

    add_filter( 'air_light_translations', function ( $strings ) use ( $translations ) {
      return array_merge( $translations, $strings );
    }, 10, 2 );
  }
}
