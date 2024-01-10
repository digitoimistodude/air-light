<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:23
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-01-10 15:35:17
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * A base for Taxonomy creation
 */
abstract class Taxonomy {

	/**
	 * Taxonomy slug or name
	 *
	 * @var string
	 */
	protected $slug;

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
	 * Register taxonomy handler
	 */
	abstract protected function register();

	/**
	 * Registers a custom taxonomy in WordPress
	 *
	 * @param  string $slug Taxonomy slug. Should only contain lowercase letters
	 *                      and the underscore character, and not be more than
	 *                      32 characters long (database structure restriction).
	 * @param  array  $object_types Name of the object type for the taxonomy
	 *                              object. Object-types can be built-in Post Type
	 *                              or any Custom Post Type that may be registered.
	 * @param  array  $args Taxonomy arguments.
	 * @return  array List of post types that were registered in the taxonomy.
	 */
	protected function register_wp_taxonomy( $slug, $object_types, $args ) {
		$register_result = [];

		// Convert the object types to strings because it can be a list of
		// strings or a list of post type objects.
		$object_types_slugs = array_map( function( $object_type ) {
			if ( is_string( $object_type ) ) {
				return $object_type;
			}
			if ( is_object( $object_type ) ) {
				return $object_type->slug;
			}
		}, $object_types );

    if ( $args['pll_translatable'] && false === $args['public'] ) {
      add_filter( 'pll_get_taxonomies', function( $cpts ) use ( $slug ) {
        $cpts[ $slug ] = $slug;
        return $cpts;
      } );
    }

		$this->register_translations();
		register_taxonomy( $slug, $object_types_slugs, $args );

		// Note from the Codex: "Better be safe than sorry when registering
		// custom taxonomies for custom post types. Use register_taxonomy_for_object_type()
		// right after the function to interconnect them. Else you could run
		// into minetraps where the post type isn't attached inside filter
		// callback that run during parse_request or pre_get_posts.
		foreach ( $object_types_slugs as $object_type ) {
			$register_result[ $object_type ] = register_taxonomy_for_object_type( $slug, $object_type );
		}

		// Remove post types that in which the taxonomy was not properly
		// registered from the result array.
		$registered_object_types = array_filter( $register_result, function( $result, $object_type ) {
			return ( $result ) ? true : false;
		}, ARRAY_FILTER_USE_BOTH );

		return $registered_object_types;
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
