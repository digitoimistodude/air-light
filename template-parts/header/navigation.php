<?php
/**
 * Navigation layout.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:22:26
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2020-11-19 10:02:09
 *
 * @package air-light
 */

namespace Air_Light;

// Reminder for translated accessible labels
if ( function_exists( 'pll_the_languages' ) && function_exists( 'ask_e' ) ) {
  if ( 'fi' === pll_current_language() ) {
    $screenreadertext_expand_toggle = ask__( 'Saavutettavuus: Avaa päävalikko' );
    $nav_label = ask__( 'Saavutettavuus: Päävalikko' );
  } else {
    $screenreadertext_expand_toggle = ask__( 'Accessibility: Open main menu' );
    $nav_label = ask__( 'Accessibility: Main navigation' );
  }
} else {
  if ( 'fi' === get_bloginfo( 'language' ) ) {
    $screenreadertext_expand_toggle = esc_html__( 'Avaa päävalikko', 'air-light' );
    $nav_label = esc_html( 'Päävalikko' );
  } else {
    $screenreadertext_expand_toggle = esc_html__( 'Open main menu', 'air-light' );
    $nav_label = esc_html( 'Accessibility: Main navigation' );
  }
}
?>

<div class="main-navigation-wrapper" id="main-navigation-wrapper">

  <!-- NB! Accessibility: Add/remove has-visible-label class for button if you want to enable/disable visible "Show menu/Hide menu" label for seeing users -->
  <button aria-controls="nav" id="nav-toggle" class="nav-toggle hamburger has-visible-label" type="button" aria-label="<?php echo esc_html( $screenreadertext_expand_toggle ); ?>">
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
      'items_wrap'     => '<ul role="menu" aria-label="' . $nav_label . '" id="%1$s" class="%2$s">%3$s</ul>',
      'walker'         => new Nav_Walker(),
    ) ); ?>

  </nav><!-- #nav -->
</div>
