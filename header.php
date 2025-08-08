<?php
/**
 * Template for header
 *
 * <head> section and everything up until <div id="content">
 *
 * @package air-light
 */

namespace Air_Light;

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
  <a class="skip-link screen-reader-text" href="#content"><?php echo esc_html( get_default_localization( 'Skip to content' ) ); ?></a>

  <?php wp_body_open(); ?>
  <div id="page" class="site">

    <header class="site-header">
      <div class="site-header-inner">
        <?php get_template_part( 'template-parts/header/branding' ); ?>
        <?php get_template_part( 'template-parts/header/navigation' ); ?>
      </div>
    </header>

    <div class="site-content">
