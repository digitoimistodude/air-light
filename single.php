<?php
/**
 * The template for displaying all single posts
 *
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-01-16 09:41:41
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 */

namespace Air_Light;

the_post();

get_header();

get_template_part( 'template-parts/hero', get_post_type() ); ?>

<div id="content" class="content-area">
	<main role="main" id="main" class="site-main">
    <div class="container container-article">

      <?php get_template_part( 'template-parts/content', get_post_type() ); ?>

      <?php if ( get_edit_post_link() ) : ?>
        <footer class="entry-footer">
          <?php edit_post_link(
            sprintf(
              /* translators: %s: Name of current post. Only visible to screen readers */
              wp_kses(
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
          ); ?>
        </footer><!-- .entry-footer -->
      <?php endif; ?>

			<?php the_post_navigation();

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) {
				comments_template();
			} ?>

    </div><!-- .container -->
	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
