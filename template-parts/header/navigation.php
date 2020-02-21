<?php
/**
 * Site navigation
 *
 * @package air-theme
 */

namespace Air_Light;

?>

      <div class="main-navigation-wrapper" id="main-navigation-wrapper">

        <button id="nav-toggle" class="nav-toggle hamburger" type="button" aria-label="<?php esc_attr_e( 'Menu', 'air-light' ); ?>">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          <span id="nav-toggle-label" class="screen-reader-text" aria-label="<?php esc_attr_e( 'Menu', 'air-light' ); ?>"><?php esc_attr_e( 'Menu', 'air-light' ); ?></span>
        </button>

        <nav id="nav" class="nav-primary" role="navigation">

          <?php wp_nav_menu( array(
            'theme_location' => 'primary',
            'container'      => false,
            'depth'          => 4,
            'menu_class'     => 'menu-items',
            'menu_id'        => 'main-menu',
            'echo'           => true,
            'fallback_cb'    => __NAMESPACE__ . '\Nav_Walker::fallback',
            'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
            'walker'         => new Nav_Walker(),
          ) ); ?>

        </nav><!-- #nav -->
      </div>