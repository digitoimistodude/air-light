<?php

$files = glob( get_theme_file_uri( '/inc/woocommerce/*.php' ) );
foreach ( $files as $file ) {
  require_once( $file );
}
