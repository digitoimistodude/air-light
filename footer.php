<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2019-10-15 14:36:09
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

?>

	</div><!-- #content -->

	<footer role="contentinfo" id="colophon" class="site-footer">

        <!-- This is just theme info for the demo, so please
        remove these and make your own!

        Start by removing this comment and until the next comment: -->

		<div class="site-info">
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'air-light' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'air-light' ), 'WordPress' ); ?></a>
			<span class="theme-info"><?php printf( esc_html__( 'Lightweight like %1$s itself. You are using version %2$s', 'air-light' ), '<i>air</i>', esc_attr( AIR_LIGHT_VERSION ) ); ?> &mdash; <a href="<?php echo esc_url( __( 'https://github.com/digitoimistodude/air', 'air-light' ) ); ?>"><svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 251-146.5 451.5T1139 1625q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 492 446q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"/></svg> GitHub</a></span>
		</div><!-- .site-info -->

        <!-- At least
        ... Until here. This comment included. -->

    <a href="#page" class="js-trigger top" data-mt-duration="300"><span class="screen-reader-text"><?php echo esc_html_e( 'Back to top', 'air-light' ); ?></span><?php include get_theme_file_path( '/svg/chevron-up.svg' ); ?></a>

	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
