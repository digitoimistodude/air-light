<?php

$files = glob( get_stylesheet_directory().'/inc/woocommerce/*.php' );
foreach ( $files as $file ) {
  require_once( $file );
}
