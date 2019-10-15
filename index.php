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
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2019-10-15 14:36:41
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

get_header();

get_template_part( 'template-parts/hero', get_post_type() ); ?>

<div id="content" class="content-area">
	<main role="main" id="main" class="site-main">
    <div class="container">

			<?php if ( have_posts() ) {
				if ( is_home() && ! is_front_page() ) { ?>
				  <header>
            <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
          </header>
				<?php }

				while ( have_posts() ) {
					the_post();
					get_template_part( 'template-parts/content', get_post_type() );
				}

				the_posts_navigation();

			} else {
				get_template_part( 'template-parts/content', 'none' );
			} ?>

    </div><!-- .container -->
	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
