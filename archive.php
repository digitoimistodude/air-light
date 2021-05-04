<?php
/**
 * The template for displaying archive pages
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-03-17 10:17:20
 *
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

get_header(); ?>

<main class="site-main">
  <div class="container">

    <?php get_template_part( 'template-parts/hero', get_post_type() );
    if ( have_posts() ) : ?>
      <header class="entry-header">
        <?php
          the_archive_title( '<h1 class="entry-title" id="content">', '</h1>' );
          the_archive_description( '<div class="taxonomy-description">', '</div>' );
        ?>
      </header><!-- .entry-header -->

      <?php while ( have_posts() ) {
        the_post();
        get_template_part( 'template-parts/content', get_post_type() );
      }

      the_posts_pagination();
    endif; ?>

  </div><!-- .container -->

</main>

<?php get_footer();
