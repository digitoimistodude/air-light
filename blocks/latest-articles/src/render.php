<?php
/**
 * Render the latest articles block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package air-light
 */

$args = [
	'post_type' => 'post',
	'posts_per_page' => 3,
	'orderby' => 'date',
	'order' => 'DESC',
];

$latest_posts = new WP_Query( $args );

if ( $latest_posts->have_posts() ) : ?>
	<section <?php echo get_block_wrapper_attributes( ['class' => 'latest-articles'] ); // phpcs:ignore ?>>
    <div class="container">
      <?php if ( ! empty( $attributes['heading'] ) ) : ?>
        <h2><?php echo wp_kses_post( $attributes['heading'] ); ?></h2>
      <?php endif; ?>

      <div class="items">
        <?php while ( $latest_posts->have_posts() ) :
            $latest_posts->the_post(); ?>
          <article class="item item-article">
            <a href="<?php echo esc_url( get_permalink() ); ?>" class="global-link" aria-hidden="true" tabindex="-1"></a>

            <?php if ( has_post_thumbnail() ) : ?>
              <?php the_post_thumbnail( 'medium' ); ?>
            <?php endif; ?>

            <div class="content">
              <h3>
                <a href="<?php echo esc_url( get_permalink() ); ?>">
                  <?php the_title(); ?>
              </a>
            </h3>

            <p>
              <time datetime="<?php echo get_the_date( 'c' ); ?>">
                <?php echo get_the_date(); ?>
                </time>
              </p>
            </div>
          </article>
        <?php endwhile; ?>
      </div>
    </div>
	</section>
	<?php
	wp_reset_postdata();
endif;
