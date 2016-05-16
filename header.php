<?php
/**
 * The header for our theme.
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
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<!-- Oh, those icons. Generate: http://realfavicongenerator.net/ -->
<link rel="apple-touch-icon" sizes="57x57" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon-180x180.png">
<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/android-chrome-192x192.png" sizes="192x192">
<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/manifest.json">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-TileImage" content="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/mstile-144x144.png">
<meta name="theme-color" content="#ffffff">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'air' ); ?></a>

	<header id="masthead" class="site-header">

		<div class="container">

			<div class="site-branding">
				<?php
				if ( is_front_page() && is_home() ) : ?>
					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php else : ?>
					<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
				endif;

				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) : ?>
					<p class="site-description screen-reader-text"><?php echo $description; /* WPCS: xss ok. */ ?></p>
				<?php
				endif; ?>
			</div><!-- .site-branding -->

			<button id="nav-toggle" class="nav-toggle" aria-controls="nav" aria-expanded="false"><span class="burger-icon"></span> <span id="nav-toggle-label"><?php esc_html_e( 'Primary Menu', 'air' ); ?></span></button>

			<nav id="nav" class="nav-collapse">

				<?php
					wp_nav_menu( array(
						'theme_location'    => 'primary',
						'container'       	=> false,
						'depth'             => 4,
						'menu_class'        => 'menu-items',
						'menu_id' 					=> 'menu',
						'echo'            	=> true,
						'fallback_cb'       => 'wp_page_menu',
						'items_wrap'      	=> '<ul class="%2$s" id="%1$s">%3$s</ul>',
						'walker'            => new air_NavWalker(),
						)
					);
				?>

			</nav><!-- #site-navigation -->

		</div><!-- .container -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
