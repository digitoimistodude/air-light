<?php
/**
 * Default hero template file.
 *
 * This is the default hero image for page templates, called
 * 'block'. Strictly air specific.
 *
 * @package air-light
 */

// Block settings
if ( is_front_page() ) :
	$block_class = ' block-front';
else :
	$block_class = ' block-' . get_post_type();
endif;

// Featured image
if ( has_post_thumbnail() ) :
	$featured_image = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) );
else :
	$featured_image = get_theme_file_uri( 'images/default.jpg' );
endif;
?>

<div class="block<?php echo $block_class; ?>" style="background-image: url('<?php echo esc_url( $featured_image ); ?>');">
  <div class="shade"></div>
</div>
