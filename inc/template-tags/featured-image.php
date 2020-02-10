<?php
/**
 * Get featured image url
 */

namespace Air_Light;

function get_featured_image_url( $post_id = 0 ) {

  $post_id = $post_id ?: get_the_ID();

  if ( has_post_thumbnail( $post_id ) ) {
    return wp_get_attachment_url( get_post_thumbnail_id( $post_id ) );
  } else {
    return THEME_SETTINGS['default_featured_image'];
  }
}