<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-01-12 17:23:47
 *
 * @package air-light
 */

namespace Air_Light;

$results = [];

// phpcs:ignore WordPress.Security.NonceVerification.Recommended
if ( ! empty( $_GET['s'] ) && have_posts() ) {
  while ( have_posts() ) {
    the_post();
    $post_type = get_post_type();

    $results[ $post_type ]['posts'][] = [
      'title'     => (string) get_the_title(),
      'permalink' => (string) get_permalink(),
      'excerpt'   => (string) get_the_excerpt(),
    ];
  }
} wp_reset_postdata();

// Get post type objects for results
foreach ( $results as $slug => $post_type ) {
  $results[ $slug ]['object'] = (object) get_post_type_object( $slug );
  $results[ $slug ]['count']  = (int) count( $results[ $slug ]['posts'] );
}

get_header(); ?>

<main class="site-main">

  <?php get_template_part( 'template-parts/hero', get_post_type() ); ?>
  <section class="block block-search">
    <div class="container">
      <h1><?php echo esc_html( get_default_localization( 'Search' ) ); ?></h1>
      <?php get_search_form( true ); ?>
    </div>
  </section>

  <?php if ( ! empty( $results ) ) : ?>
    <section class="block block-search-results">
      <div class="container">

        <?php foreach ( $results as $slug => $post_type ) : ?>

          <div class="col col-results col-results-<?php echo esc_attr( $slug ) ?>">
            <h2><?php echo esc_html( $post_type['object']->labels->name ); ?>&nbsp;
              (<?php echo esc_html( $post_type['count'] ); ?>)</h2>

            <?php foreach ( $post_type['posts'] as $post ) : ?>
              <div class="row row-result row-result-<?php echo esc_attr( $slug ) ?>">

                <div class="content">
                  <h3><a href="<?php echo esc_url( $post['permalink'] ) ?>"><?php echo esc_html( $post['title'] ) ?></a></h3>

                  <p><?php echo wp_kses_post( $post['excerpt'] ) ?></p>

                </div>

              </div>

            <?php endforeach; ?>
          </div>
        <?php endforeach; ?>

      </div>
    </section>
  <?php endif; ?>

  <?php
  // "No results" message block
  // phpcs:ignore WordPress.Security.NonceVerification.Recommended
  if ( ! empty( $_GET['s'] ) && ! have_posts() ) : ?>
    <section class="block block-search-results">
      <div class="container">
        <h2><?php echo esc_html( get_default_localization( 'No results found for your search' ) ); ?>.</h2>
      </div>
    </section>
  <?php endif; ?>

</main>

<?php get_footer();
