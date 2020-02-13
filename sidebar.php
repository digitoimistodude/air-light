<?php
/**
 * The sidebar containing the main widget area
 * Implement your custom sidebar to this file.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2019-10-15 14:35:42
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
  return;
} ?>

<aside id="secondary" class="widget-area">
  <?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
