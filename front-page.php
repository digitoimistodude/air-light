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

// Featured image.
$featured_image = '';
if ( has_post_thumbnail() ) :
	$featured_image = esc_url( wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ) );
else :
	$featured_image = esc_url( get_template_directory_uri() . '/images/default.jpg' );
endif;

get_header(); ?>

<div class="slide slide-front" style="background-image:url('<?php echo $featured_image; ?>');">
  <div class="shade shade-gradient"></div>

  <div class="container">
    <h1><?php echo esc_html_e( 'air &mdash; WordPress starter theme', 'air' ); ?></h1>
  </div>
</div>

<div id="primary" class="content-area">
  <main id="main" class="site-main">

    <div class="slide slide-front-content">

      <div class="container">

        <?php if ( have_posts() ) {
        	while ( have_posts() ) {
	      		the_post();
	      		the_content();
					}
        } else {
        	get_template_part( 'template-parts/content', 'none' );
        }  ?>

      </div><!-- .container -->

    </div><!-- .slide.slide-front-content -->

  </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
