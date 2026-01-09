<?php
/**
 * Template for displaying the footer
 *
 * Site footer.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package air-light
 */

namespace Air_Light;

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer">

  <div class="container">
    <!-- Default footer content that you can safely remove from here... -->
    <div class="site-info">
      <a class="no-external-link-indicator powered-by-wordpress" href="<?php echo esc_url( __( 'http://wordpress.org/', 'air-light' ) ); ?>">
        <svg class="wordpress-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" aria-hidden="true"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/></svg>
        <span>
          <?php // translators: %s: WordPress. ?>
          <?php printf( esc_html__( 'Proudly powered by %s', 'air-light' ), 'WordPress' ); ?>.
        </span>
      </a>
      <span class="theme-info">
        <span>
          <?php // translators: %1$s: air in italics, %2$s: theme version number. ?>
          <?php printf( esc_html__( 'Lightweight like %1$s itself. You are using air-light by Dude version %2$s', 'air-light' ), '<i>air</i>', esc_attr( AIR_LIGHT_VERSION ) ); ?>.
        </span>
      </span>
    </div>
    <!-- ...up until here -->
  </div>

</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

<a
  href="#page"
  id="top"
  class="top no-external-link-indicator"
  data-version="<?php echo esc_attr( AIR_LIGHT_VERSION ); ?>"
>
  <span class="screen-reader-text"><?php echo esc_html( get_default_localization( 'Back to top' ) ); ?></span>
  <span aria-hidden="true">&uarr;</span>
</a>

</body>
</html>
