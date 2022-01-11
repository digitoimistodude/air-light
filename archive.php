<?php
/**
 * The template for displaying archive pages
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-01-11 09:01:58
 *
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

get_header(); ?>

<main class="site-main">

  <?php get_template_part( 'template-parts/hero', get_post_type() ); ?>

  <section class="block block-blog has-light-bg">
    <div class="container">

      <?php if ( have_posts() ) : ?>

        <header class="entry-header">
          <?php
            the_archive_title( '<h1 class="entry-title" id="content">', '</h1>' );
            the_archive_description( '<div class="taxonomy-description">', '</div>' );
          ?>
        </header><!-- .entry-header -->

        <?php while ( have_posts() ) :
          the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

            <h2>
              <a href="<?php echo esc_url( get_the_permalink() ); ?>">
                <?php the_title(); ?>
              </a>
            </h2>

            <p>
              <time datetime="<?php the_time( 'c' ); ?>">
                <?php echo get_the_date( get_option( 'date_format' ) ); ?>
              </time>
            </p>

            <div class="content">
              <?php
                the_content();
                entry_footer();
              ?>
            </div>

          </article>
        <?php endwhile; ?>

        <?php the_posts_pagination(); ?>

      <?php endif; ?>

    </div>
  </section>

</main>

<?php get_footer();
