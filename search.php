<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package air
 */

get_header();
get_template_part( 'template-parts/hero', get_post_type() ); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

      <div class="container">

        <?php
        if ( have_posts() ) : ?>

              <header class="page-header">
                <h1 class="page-title"><?php printf( esc_html__( 'Search Results for: %s', 'air' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
              </header><!-- .page-header -->

            <?php
            while ( have_posts() ) : the_post(); ?>

              <?php get_template_part( 'template-parts/content', 'search' ); ?>

            <?php endwhile;

            the_posts_navigation();

          else : ?>

            <?php get_template_part( 'template-parts/content', 'none' ); ?>

        <?php endif; ?>

        </main><!-- #main -->
        </section><!-- #primary -->

      </div><!-- .container -->

<?php
// get_sidebar();
get_footer();
