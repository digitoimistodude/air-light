<?php
/**
 * Default hero template file.
 *
 * This is the default hero image for page templates, called
 * 'block'. Strictly air specific.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2019-10-15 14:41:08
 * @package air-light
 */

// Block settings
if ( is_front_page() ) {
	$block_class = ' block-front';
} else {
	$block_class = ' block-' . get_post_type();
}

// Featured image
if ( has_post_thumbnail() ) {
	$featured_image = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) );
} ?>

<section class="block block-hero<?php echo esc_attr( $block_class ); ?>"<?php if ( has_post_thumbnail() ) : ?> style="background-image: url('<?php echo esc_url( $featured_image ); ?>');<?php endif; ?>">
  <div class="shade"></div>
</section>
