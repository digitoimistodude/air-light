<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-01-12 15:13:28
 * @package air-light
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 */

namespace Air_Light;

get_header(); ?>

<div class="content-area">
  <main id="main" class="site-main">

    <section class="block block-error-404">
      <div class="container">
        <div class="content">

          <h1 aria-hidden="true">404</h1>
          <p id="content"><?php echo esc_html( get_default_localization( 'Page not found' ) ); ?></p>

        </div>
      </div>
    </section>

  </main><!-- #main -->
</div><!-- #primary -->

<?php

// Enable visible footer if fits project:
// get_footer();

// WordPress scripts and hooks
wp_footer();
