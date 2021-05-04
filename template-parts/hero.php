<?php
/**
 * Default hero template file.
 *
 * This is the default hero image for page templates, called
 * 'block'. Strictly air specific.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-02-23 13:59:45
 *
 * @package air-light
 */

// Block settings
$block_classes[] = is_front_page() ? ' block-hero-front' : ' block-hero-' . get_post_type();

// Featured image
$featured_image = has_post_thumbnail() ? wp_get_attachment_url( get_post_thumbnail_id() ) : THEME_SETTINGS['default_featured_image'];
?>

<section class="block block-hero <?php echo esc_attr( implode( ' ', $block_classes ) ); ?>"
  <?php if ( ! empty( $featured_image ) ) : ?>
    style="background-image: url('<?php echo esc_url( $featured_image ); ?>');"
  <?php endif; ?>
>
  <div class="shade" aria-hidden="true"></div>

  <!-- <div class="container">
  </div> -->
</section>
