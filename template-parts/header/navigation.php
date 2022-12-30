<?php
/**
 * Navigation layout.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:22:26
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-30 22:01:55
 *
 * @package air-light
 */

namespace Air_Light;

?>

<nav id="nav" class="nav-primary nav-menu" aria-label="<?php echo esc_html( get_default_localization( 'Main navigation' ) ); ?>">

  <button aria-haspopup="true" aria-expanded="false" aria-controls="nav" id="nav-toggle" class="nav-toggle" type="button" aria-label="<?php echo esc_html( get_default_localization( 'Open main menu' ) ); ?>">
    <span class="hamburger" aria-hidden="true"></span>
  </button>

  <?php wp_nav_menu( array(
    'theme_location' => 'primary',
    'container'      => false,
    'depth'          => 4,
    'menu_class'     => 'menu-items',
    'menu_id'        => 'main-menu',
    'echo'           => true,
    'fallback_cb'    => __NAMESPACE__ . '\Nav_Walker::fallback',
    'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
    'has_dropdown'   => true,
    'walker'         => new Nav_Walker(),
  ) ); ?>
</nav>
