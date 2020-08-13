<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-03-17 10:17:20
 * @package air-light
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 */

namespace Air_Light;

get_header();

get_template_part( 'template-parts/hero', get_post_type() ); ?>

<div class="content-area">
	<main role="main" id="main" class="site-main">

			<section class="error-404 not-found">
        <div class="container">
          <div class="content">

				    <header class="entry-header">
              <h1 id="content" class="entry-title">404<span class="screen-reader-text"> <?php esc_html_e( 'Page not found.', 'air-light' ); ?></span></h1>
			  	  </header>

	  				<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for.', 'air-light' ); ?></p>
          </div>
        </div>
			</section>

	</main><!-- #main -->
</div><!-- #primary -->

<?php wp_footer();
