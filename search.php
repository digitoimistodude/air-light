<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-03-17 10:17:21
 * @package air-light
 */

namespace Air_Light;

$results = [];
if ( ! empty( $_GET['s'] ) && have_posts() ) { // phpcs:ignore
  while ( have_posts() ) {
    the_post();
    $post_type = get_post_type();

    if ( 'page' === $post_type ) {
      $post_type = 'post';
    }

    $result = [
      'id'        => get_the_id(),
      'title'     => get_the_title(),
      'permalink' => get_the_permalink(),
    ];

    if ( 'product' === $post_type ) {
      $cats = get_the_term_list( get_the_ID(), 'tea-blend', '<ul class="tags"><li>', '</li><li>', '</li></ul>' );
      if ( ! $cats ) {
        $cats = get_the_term_list( get_the_ID(), 'product_cat', '<ul class="tags"><li>', '</li><li>', '</li></ul>' );
      }

      $result['thumbnail_id'] = get_post_thumbnail_id();
      $result['categories'] = $cats;
    }

    if ( 'post' === $post_type ) {
      $result['excerpt'] = get_the_excerpt();
    }

    $results[ $post_type ][] = $result;
  }
} wp_reset_postdata();

get_header();

get_template_part( 'template-parts/hero', get_post_type() ); ?>

<div id="content" class="content-area">
	<main role="main" id="main" class="site-main">

    <section class="block block-search">
      <div class="container">
        <h1>Search</h1>
        <?php get_search_form( true ); ?>
      </div>
    </section>

    <?php if ( ! empty( $results ) ) : ?>
      <section class="block block-search-results">
        <div class="container">

          <?php foreach ( $results as $post_type => $posts ) :
            $title = 'Articles';
            if ( 'product' === $post_type ) {
              $title = 'Products';
            } ?>
            <div class="col col-results col-results-<?php echo esc_attr( $post_type ) ?>">
              <h2><?php echo esc_html( $title ) ?></h2>

              <?php foreach ( $posts as $post ) : ?>
                <div class="row row-result row-result-<?php echo esc_attr( $post_type ) ?>">
                  <?php if ( 'product' === $post_type ) : ?>
                    <div class="image"><?php image_lazyload_tag( $post['thumbnail_id'] ) ?></div>
                  <?php endif; ?>

                  <div class="content">
                    <h3><a href="<?php echo esc_url( $post['permalink'] ) ?>"><?php echo esc_html( $post['title'] ) ?></a></h3>
                    <?php if ( 'product' === $post_type ) : ?>
                      <?php echo wp_kses_post( $post['categories'] ); ?>
                    <?php elseif ( 'post' === $post_type ) : ?>
                      <p><?php echo wp_kses_post( $post['excerpt'] ) ?></p>
                    <?php endif; ?>
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
          <?php endforeach; ?>

        </div>
      </section>
    <?php endif; ?>

  </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
