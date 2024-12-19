<?php
  /**
   * Name:              content-image
   * Title:             Sisältö ja kuva
   * Category:          airdev
   * Description:       A Gutenberg block!
   * Icon:              block-default
   *
   * @package air-light
   */

  // Register attributes
  register_rich_text( 'title' );
  register_rich_text( 'content' );
  register_rich_text( 'image' );
  // register_attribute( 'attribute_name', 'Attribute Label', 'string', 'Default Value!' );
  // register_rich_text( 'attribute_name', 'Default Value!' );

  // Get fields
  $title = attr( 'title' );
  $content = attr( 'content' );
  $image = attr( 'image' );
  ?>

  <section class="block block-content-image">
    <div class="container">

      <div class="items">
        <div class="item">
          <h2 wp-rich="title">
            <?php echo esc_html( $title ); ?>
          </h2>

          <?php echo wp_kses_post( $content ); ?>
        </div>

        <div class="item">

        </div>
      </div>
    </div>
  </section>
