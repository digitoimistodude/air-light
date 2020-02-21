<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2019-10-15 14:38:49
 * @package air-light
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 */

namespace Air_Light;

get_header();

get_template_part( 'template-parts/hero', get_post_type() ); ?>

<div id="content" class="content-area">
	<main role="main" id="main" class="site-main">
		<div class="container">

			<section class="error-404 not-found">
				<header class="page-header">
					<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'air-light' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content">
					<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'air-light' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</div><!-- .container -->
	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
