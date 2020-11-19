<?php
/**
 * Template for header
 *
 * <head> section and everything up until <div id="content">
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:17:32
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2020-11-19 10:00:12
 *
 * @package air-light
 */

namespace Air_Light;

// Reminder for translated accessible labels
if ( function_exists( 'pll_the_languages' ) && function_exists( 'ask_e' ) ) {
  $screenreadertext_skip = ask__( 'Accessibility: Skip to content' );
} else {
  $screenreadertext_skip = 'Skip to content';
}

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class( 'no-js' ); ?>>
  <?php wp_body_open(); ?>
  <div id="page" class="site">

    <a class="skip-link screen-reader-text" href="#content"><?php echo esc_html( $screenreadertext_skip ); ?></a>

    <div class="nav-container">
      <header class="site-header">

        <?php get_template_part( 'template-parts/header/branding' ); ?>
        <?php get_template_part( 'template-parts/header/navigation' ); ?>

      </header>
    </div><!-- .nav-container -->

    <div class="site-content">
