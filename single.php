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

<main id="site-content" class="site-main">

  <article <?php post_class(); ?>>
    <div class="post-inner">
      <header class="entry-header">
        <h1 class="entry-title"><?php the_title(); ?></h1>
      </header>

      <div class="entry-content">
        <?php
        the_content();
        wp_link_pages(
          [
            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'air-light' ),
            'after'  => '</div>',
          ]
        );
        ?>
      </div>

      <?php
      entry_footer();

      if ( get_edit_post_link() ) {
        edit_post_link(
          sprintf(
            wp_kses(
              /* translators: %s: post title */
              __( 'Edit <span class="screen-reader-text">%s</span>', 'air-light' ),
              [
                'span' => [
                  'class' => [],
                ],
              ]
            ),
            get_the_title()
          ),
          '<p class="edit-link">',
          '</p>'
        );
      }

      the_post_navigation();

      if ( comments_open() || get_comments_number() ) {
        echo '<div class="comments-wrapper">';
        comments_template();
        echo '</div>';
      }
      ?>

    </div>
  </article>

</main>

<?php get_footer();
