<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-02-08 17:03:18
 *
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

get_header(); ?>

<main class="site-main">

  <?php if ( have_posts() ) : ?>

    <?php while ( have_posts() ) :
      the_post();
      ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="post-inner">
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
        </div>
      </article>
    <?php endwhile; ?>

    <?php the_posts_pagination(); ?>

  <?php endif; ?>

</main>

<?php get_footer();
