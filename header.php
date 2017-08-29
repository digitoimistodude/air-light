<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package air
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicon.png">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'air' ); ?></a>

  <div class="nav-container">
      <header class="site-header">
        <div class="container">

          <div class="site-branding">
            <?php if ( is_front_page() && is_home() ) : ?>
              <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><span class="screen-reader-text"><?php bloginfo( 'name' ); ?></span><?php echo file_get_contents( esc_url( get_theme_file_path( '/svg/logo.svg' ) ) ); ?></a></h1>
            <?php else : ?>
              <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><span class="screen-reader-text"><?php bloginfo( 'name' ); ?></span><?php echo file_get_contents( esc_url( get_theme_file_path( '/svg/logo.svg' ) ) ); ?></a></p>
            <?php endif;

            $description = get_bloginfo( 'description', 'display' );
            if ( $description || is_customize_preview() ) : ?>
              <p class="site-description screen-reader-text"><?php echo $description; /* WPCS: xss ok. */ ?></p>
            <?php endif; ?>
          </div><!-- .site-branding -->

          <button id="nav-toggle" class="nav-toggle hamburger" type="button" aria-label="<?php esc_html_e( 'Menu', 'air' ); ?>" aria-controls="navigation">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
            <span id="nav-toggle-label" class="screen-reader-text" aria-label="<?php esc_html_e( 'Menu', 'air' ); ?>"><?php esc_html_e( 'Menu', 'air' ); ?></span>
          </button>

          <nav id="nav" class="nav">

            <?php wp_nav_menu( array(
              'theme_location'    => 'primary',
              'container'         => false,
              'depth'             => 4,
              'menu_class'        => 'menu-items',
              'menu_id'           => 'menu',
              'echo'              => true,
              'fallback_cb'       => 'wp_page_menu',
              'items_wrap'        => '<ul class="%2$s" id="%1$s">%3$s</ul>',
              'walker'            => new Air_Walker(),
            ) ); ?>

          </nav><!-- #site-navigation -->

        </div><!-- .container -->          
      </header>    
  </div><!-- .nav-container -->

	<div id="content" class="site-content">
