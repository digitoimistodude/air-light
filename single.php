<?php
/**
 * The template for displaying all single posts
 *
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 */

namespace Air_Light;

the_post();
get_header();
?>

<main class="site-main has-global-padding is-layout-constrained">
  <h1 class="wp-block-heading post-title"><?php the_title(); ?></h1>

  <?php
    the_content();
    air_edit_link();
    entry_footer();
    wp_link_pages(
      [
        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'air-light' ),
        'after'  => '</div>',
      ]
    );

    if ( comments_open() || get_comments_number() ) {
      echo '<div class="comments-wrapper">';
      comments_template();
      echo '</div>';
    }
  ?>
</main>

<?php get_footer();
