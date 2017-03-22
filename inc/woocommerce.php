<?php

/**
 * Declare WooCommerce support
 */
add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
  add_theme_support( 'woocommerce' );
}

$files = glob( get_theme_file_uri( '/inc/woocommerce/*.php' ) );
foreach ( $files as $file ) {
  require_once( $file );
}
