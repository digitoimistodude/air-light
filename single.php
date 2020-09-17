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

<div class="content-area">
	<main role="main" id="main" class="site-main">

    <section class="block block-single has-light-bg">
      <div class="gutenberg-content">

        <?php the_content(); ?>
        <?php
          // Required by WordPress Theme Check, feel free to remove as it's rarely used in starter themes
          wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'air-light' ), 'after' => '</div>' ) );
        ?>
        <?php entry_footer(); ?>

        <?php if ( get_edit_post_link() ) : ?>
          <?php
            edit_post_link( sprintf( wp_kses( __( 'Edit <span class="screen-reader-text">%s</span>', 'air-light' ), [ 'span' => [ 'class' => [] ] ] ), get_the_title() ), '<p class="edit-link">', '</p>' );
          ?>
        <?php endif; ?>

        <?php the_post_navigation();

  			// If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) {
          comments_template();
        } ?>

      </div>
    </section>

	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
