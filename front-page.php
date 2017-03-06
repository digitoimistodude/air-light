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

<div class="slide slide-front" style="background-image:url('<?php if ( has_post_thumbnail() ) : ?><?php echo esc_url(wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ) ); ?><?php else : ?><?php echo esc_url( get_template_directory_uri() . '/images/default.jpg' ); ?><?php endif; ?>');">
  <div class="shade shade-gradient"></div>

  <div class="container">
    <h1><?php echo esc_html_e('air &mdash; WordPress starter theme', 'air'); ?></h1>
  </div>
</div>

<div id="primary" class="content-area">
  <main id="main" class="site-main">

    <div class="slide slide-front-content">

      <div class="container">

        <?php
        while ( have_posts() ) : the_post();
          the_content();
        endwhile;
        ?>

      </div><!-- .container -->

    </div><!-- .slide.slide-front-content -->

  </main><!-- #main -->
</div><!-- #primary -->

<?php
// get_sidebar();
get_footer();
