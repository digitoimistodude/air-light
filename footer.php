<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package air
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'air' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'air' ), 'WordPress' ); ?></a>
			<span class="theme-info"><?php printf( esc_html__( 'Lightweight like %1$s itself. You are using version %2$s', 'air' ), '<i>air</i>', AIR_VERSION ); ?> &mdash; <a href="https://github.com/digitoimistodude/air"><span class="fa fa-github"></span> GitHub</a></span>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<a href="#page" class="top"><span class="screen-reader-text"><?php echo esc_html_e('Back to top', 'air'); ?></span><i class="fa fa-chevron-up"></i></a>

</body>
</html>
