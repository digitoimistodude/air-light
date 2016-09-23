<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package air
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) : ?>

				<div class="container">
					<header class="page-header">
						<h1 class="page-title"><?php printf( esc_html__( 'Search Results for: %s', 'air' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
					</header><!-- .page-header -->
				</div>

				<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'template-parts/content', 'search' ); ?>

				<?php endwhile;

				the_posts_navigation();

			else : ?>

				<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_sidebar();
get_footer();
