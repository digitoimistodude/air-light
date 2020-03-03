<?php
/**
 * Air demo content for front-page header
 *
 * @package air-light
 */

namespace Air_Light;

?>

<div class="entry-header-demo">
  <div class="inner">
    <div class="logo">
      <?php include get_theme_file_path( THEME_SETTINGS['logo'] ); ?>
    </div>
    <h1>
      <span class="accent">
        <?php echo esc_html_e( 'air-light ', 'air-light' ); ?><?php echo esc_attr( AIR_LIGHT_VERSION, 'air-light' ); ?>
      </span>
      <?php echo esc_html_e( 'a WordPress starter theme', 'air-light' ); ?>
    </h1>
  </div>
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
