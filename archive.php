<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package air
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php
			if ( have_posts() ) : ?>

			<div class="container">
				<header class="page-header">
					<?php
						the_archive_title( '<h1 class="page-title">', '</h1>' );
						the_archive_description( '<div class="taxonomy-description">', '</div>' );
					?>
				</header><!-- .page-header -->
			</div>

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

				<?php endwhile;

				the_posts_navigation();

				else : ?>

					<?php get_template_part( 'template-parts/content', 'none' ); ?>

			</div><!-- .container -->

			<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
