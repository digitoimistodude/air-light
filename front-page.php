<?php
/**
 * The template for displaying front page
 *
 * Contains the closing of the #content div and all content after.
 * Initial styles for front page template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package air
 */

get_header(); ?>

<?php get_template_part( 'template-parts/hero', get_post_type() ); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

      <div class="container">

        <?php
        while ( have_posts() ) : the_post();
          get_template_part( 'template-parts/content', 'page' );

          // If comments are open or we have at least one comment, load up the comment template.
          if ( comments_open() || get_comments_number() ) :
            comments_template();
          endif;

        endwhile; // End of the loop.
        ?>
			
      </div><!-- .container -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// get_sidebar();
get_footer();
