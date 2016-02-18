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

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'air' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'air' ), 'WordPress' ); ?></a>
			<span class="theme-info"><?php printf( esc_html__( 'Lightweight like %1$s itself.', 'air' ), '<i>air</i>' ); ?></span>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
