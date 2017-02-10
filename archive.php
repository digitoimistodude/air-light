<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package air
 */

 get_header();
 get_template_part( 'template-parts/hero', get_post_type() ); ?>

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

          <?php while ( have_posts() ) : the_post();
            get_template_part( 'template-parts/content', get_post_format() );
          endwhile;

        the_posts_navigation();

        else :
          get_template_part( 'template-parts/content', 'none' ); ?>

      </div><!-- .container -->

			<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// get_sidebar();
get_footer();
