<?php
/**
 * The template for displaying front page
 *
 * Contains the closing of the #content div and all content after.
 * Initial styles for front page template.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2019-12-19 19:19:33
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

// Featured image.
$thumbnail = wp_get_attachment_url( get_post_thumbnail_id() ) ?: THEME_SETTINGS['default_featured_image'];

get_header(); ?>

<div id="content" class="content-area">
  <main role="main" id="main" class="site-main">

    <div class="entry-header-demo">
      <h1>
        <span class="accent">
          <?php echo esc_html_e( 'air-light ', 'air-light' ); echo esc_attr( AIR_LIGHT_VERSION, 'air-light' ); ?>
        </span>
        <?php echo esc_html_e( 'a WordPress starter theme', 'air-light' ); ?>
      </h1>
    </div>

    <div class="block">
      <div class="container">

        <?php if ( have_posts() ) : ?>

          <?php while ( have_posts() ) : the_post(); ?>

            <?php the_content(); ?>

          <?php endwhile; ?>

        <?php else : ?>

          <?php get_template_part( 'template-parts/content', 'none' ); ?>

        <?php endif ?>

      </div>
    </div>

  </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
