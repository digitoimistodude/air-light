<?php
/**
 * Default hero template file.
 *
 * This is the default hero image for page templates, called
 * 'slide'. Strictly air specific.
 *
 * @package air
 */

?>

<div class="slide<?php if ( is_front_page() ) : echo ' slide-front'; elseif ( is_page() ) : echo ' slide-page'; else : echo ' slide-' . get_post_type(); endif; ?>" style="background-image:url('<?php if ( has_post_thumbnail() ) : ?><?php echo esc_url(wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ) ); ?><?php else : ?><?php echo esc_url( get_template_directory_uri() . '/images/default.jpg' ); ?><?php endif; ?>');">
  <div class="shade"></div>
</div>
