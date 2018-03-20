<?php
/**
 * The template for displaying archive pages
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

      <?php if ( have_posts() ) : ?>

        <header class="page-header">
          <?php
            the_archive_title( '<h1 class="page-title">', '</h1>' );
            the_archive_description( '<div class="taxonomy-description">', '</div>' );
          ?>
        </header><!-- .page-header -->

        <?php
          while ( have_posts() ) {
        	 the_post();
        	 get_template_part( 'template-parts/content', get_post_type() );
        }

        the_posts_navigation();

      else :
      	get_template_part( 'template-parts/content', 'none' );
      endif;
      ?>

    </div><!-- .container -->

	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
