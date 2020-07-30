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

<footer id="colophon" class="block block-footer site-footer">

  <?php get_template_part( 'template-parts/footer/demo-content' ); ?>

  <?php
    // Reminder for translated accessible labels
    if ( function_exists( 'pll_the_languages' ) ) {
      $screenreadertext_top = ask__( 'Accessibility: Back to top' );
    } else {
      $screenreadertext_top = 'Back to top';
    }
  ?>

  <p class="back-to-top"><a href="#page" class="js-trigger top no-text-link" data-mt-duration="300"><span class="screen-reader-text"><?php echo esc_html( $screenreadertext_top ); ?></span><?php include get_theme_file_path( '/svg/chevron-up.svg' ); ?></a></p>

</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>
</body>

</html>
