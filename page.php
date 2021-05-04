<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-01-12 16:10:58
 *
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

the_post();
get_header(); ?>

<main class="site-main">

  <?php get_template_part( 'template-parts/hero', get_post_type() ); ?>
  <section class="block block-page has-light-bg">
    <div class="container">

      <h1 id="content"><?php the_title(); ?></h1>
      <?php the_content(); ?>

      <?php if ( get_edit_post_link() ) {
        edit_post_link( sprintf( wp_kses( __( 'Edit <span class="screen-reader-text">%s</span>', 'air-light' ), [ 'span' => [ 'class' => [] ] ] ), get_the_title() ), '<p class="edit-link">', '</p>' );
      } ?>

    </div><!-- .container -->
  </section>

</main>

<?php get_footer();
