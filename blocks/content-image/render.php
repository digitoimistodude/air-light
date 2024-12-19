<?php
/**
 * WP Block Builder "framework"
 * @package air-blocks
 */

// Workaround to access local variables inside functions
global $get_attribute_local_scope;
$get_attribute_local_scope = function ( $key ) use ( $attributes ) {
  if ( ! isset( $attributes[ $key ] ) ) {
    return '';
  }
  return $attributes[ $key ];
};

if ( ! function_exists( 'register_attribute' ) ) {
  function register_attribute( $key, $name, $type = "string", $default_value = "" ) {}
}

if ( ! function_exists( 'register_rich_text' ) ) {
  function register_rich_text( $key, $default_value = "" ) {}
}

if ( ! function_exists( 'attr' ) ) {
  function attr( $key ) {
    global $get_attribute_local_scope;
    return $get_attribute_local_scope( $key );
  }
}

// End WP Block Builder "framework"

ob_start();
require 'block.php';
$html = ob_get_clean();

$is_editor = defined( 'REST_REQUEST' ) && true === REST_REQUEST && 'edit' === filter_input( INPUT_GET, 'context', FILTER_SANITIZE_STRING );

if ( ! $is_editor ) {
  // Replace innerblocks
  $html = preg_replace( '(<InnerBlocks[^>]*\/{0,1}>)', $content, $html );

  // Remove attributes
  $html = preg_replace( '( wp-[a-z\-]+="[^"]+")', '', $html );
}

// We're just parsing content coming from blocks, so no escaping is necessary.
echo $html; // phpcs:ignore
