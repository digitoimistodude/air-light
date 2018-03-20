<?php
/**
 * The sidebar containing the main widget area
 * Implement your custom sidebar to this file.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package air-light
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
  return;
}
?>

<aside id="secondary" class="widget-area">
  <?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
