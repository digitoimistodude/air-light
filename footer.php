<?php
/**
 * Template for displaying the footer
 *
 * Description for template.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:33:49
 * @Last Modified by: Roni Laukkarinen
 * @Last Modified time: 2020-05-11 13:33:49
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package air-light
 */

namespace Air_Light;

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer">

  <?php get_template_part( 'template-parts/footer/demo-content' ); ?>

  <a href="#page" class="js-trigger top" data-mt-duration="300"><span
      class="screen-reader-text"><?php echo esc_html_e( 'Back to top', 'air-light' ); ?></span><?php include get_theme_file_path( '/svg/chevron-up.svg' ); ?></a>

</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>
</body>

</html>
