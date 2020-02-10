<?php
/**
 * Site branding & logo
 *
 * @package air-light
 */

namespace Air_Light;

?>

      <div class="site-branding">

        <?php if ( is_front_page() && is_home() ) : ?>

        <h1 class="site-title">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
            <span class="screen-reader-text"><?php bloginfo( 'name' ); ?></span>
            <?php include THEME_SETTINGS['logo_path']; ?>
          </a>
        </h1>

        <?php else : ?>

          <p class="site-title">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
              <span class="screen-reader-text"><?php bloginfo( 'name' ); ?></span>
              <?php include THEME_SETTINGS['logo_path']; ?>
            </a>
          </p>

        <?php endif;

        $description = get_bloginfo( 'description', 'display' );
        if ( $description || is_customize_preview() ) : ?>

          <p class="site-description screen-reader-text"><?php echo $description; /* WPCS: xss ok. */ ?></p>

        <?php endif; ?>

      </div><!-- .site-branding -->