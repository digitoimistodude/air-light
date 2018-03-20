<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package air-light
 */

get_header();

get_template_part( 'template-parts/hero', get_post_type() ); ?>

<div id="content" class="content-area">
	<main id="main" class="site-main">

    <div class="container">

			<?php if ( have_posts() ) {
				if ( is_home() && ! is_front_page() ) { ?>
					<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
					</header>
				<?php }

				while ( have_posts() ) {
					the_post();
					get_template_part( 'template-parts/content', get_post_type() );
				}

				the_posts_navigation();

			} else {
				get_template_part( 'template-parts/content', 'none' );
			} ?>

    </div><!-- .container -->

	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
