<?php
/**
 * The template for displaying front page
 *
 * Contains the closing of the #content div and all content after.
 * Initial styles for front page template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package air-light
 */

// Featured image.
$featured_image = '';
if ( has_post_thumbnail() ) :
	$featured_image = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) );
else :
	$featured_image = get_theme_file_uri( 'images/default.jpg' );
endif;

get_header(); ?>

<div class="block block-front" style="background-image: url('<?php echo esc_url( $featured_image ); ?>');">
  <div class="shade shade-gradient"></div>

  <div class="container">
    <h1><span class="accent"><?php echo esc_html_e( 'air-light ', 'air-light' ); echo esc_attr( AIR_VERSION, 'air-light' ); ?></span><?php echo esc_html_e( 'a WordPress starter theme', 'air-light' ); ?></h1>
  </div>
</div>

<div id="content" class="content-area">
  <main id="main" class="site-main">

    <div class="block">
      <div class="container">

        <?php the_post_thumbnail(); ?>

        <?php if ( have_posts() ) {
        	while ( have_posts() ) {
	      		the_post();
	      		the_content();
					}
        } else {
        	get_template_part( 'template-parts/content', 'none' );
        }  ?>

      </div>
    </div>

  </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
