<?php
/**
 * Navigation layout.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:22:26
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-08-11 15:04:17
 *
 * @package air-light
 */

namespace Air_Light;

// Reminder for translated accessible labels
if ( function_exists( 'pll_the_languages' ) ) {
  $screenreadertext_expand_toggle = ask__( 'Accessibility: Open main menu' );
} else {
  $screenreadertext_expand_toggle = 'Open main menu';
}
?>

<div class="main-navigation-wrapper" id="main-navigation-wrapper">

  <button id="nav-toggle" class="nav-toggle hamburger" type="button" aria-label="<?php echo esc_html( $screenreadertext_expand_toggle ); ?>">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    <span id="nav-toggle-label" class="nav-toggle-label"><?php echo esc_html( $screenreadertext_expand_toggle ); ?></span>
  </button>

  <nav id="nav" class="nav-primary">

    <?php wp_nav_menu( array(
      'theme_location' => 'primary',
      'container'      => false,
      'depth'          => 4,
      'menu_class'     => 'menu-items',
      'menu_id'        => 'main-menu',
      'echo'           => true,
      'fallback_cb'    => __NAMESPACE__ . '\Nav_Walker::fallback',
      'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
      'walker'         => new Nav_Walker(),
    ) ); ?>

  </nav><!-- #nav -->
</div>
