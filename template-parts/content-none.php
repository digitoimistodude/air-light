<?php
/**
 * Template part for displaying a message that posts cannot be found.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2019-10-15 14:38:21
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

?>

<section class="no-results not-found">
	<header class="page-header">
	  <h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'air-light' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
	  <?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
	    <p><?php printf( wp_kses( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'air-light' ), array( 'a' => array( 'href' => array() ) ) ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
	  <?php elseif ( is_search() ) : ?>
	    <p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'air-light' ); ?></p>
	  	<?php get_search_form();
		else : ?>
	    <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'air-light' ); ?></p>
	  	<?php get_search_form();
	  endif; ?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
