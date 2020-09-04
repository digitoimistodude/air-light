<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-03-17 10:17:20
 * @package air-light
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 */

namespace Air_Light;

get_header(); ?>

<div class="content-area">
  <main role="main" id="main" class="site-main">

    <section class="block block-error-404">
      <div class="container">
        <div class="content">

          <h1 id="content">404<span class="screen-reader-text">Page not found.</span></h1>
          <p>Page not found.</p>

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
