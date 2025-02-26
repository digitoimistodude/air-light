<?php
/**
 * Simplified nav walker for footer menu
 *
 * @package projektiasema
 */

namespace Air_Light;

/**
 * A custom WordPress nav walker class, using the WordPress built in menu manager.
 */
class Footer_Nav_Walker extends \Walker_Nav_Menu {
  public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
    if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
      $t = '';
      $n = '';
    } else {
      $t = "\t";
      $n = "\n";
    }

    $indent = ( $depth ) ? str_repeat( $t, $depth ) : '';
    $output .= $indent . '<li>';

    $atts = array();
    $atts['href'] = ! empty( $item->url ) ? $item->url : '';
    $atts['title'] = ! empty( $item->attr_title ) ? $item->attr_title : '';
    $atts['target'] = ! empty( $item->target ) ? $item->target : '';

    $attributes = '';
    foreach ( $atts as $attr => $value ) {
      if ( ! empty( $value ) ) {
        $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
        $attributes .= ' ' . $attr . '="' . $value . '"';
      }
    }

    $title = apply_filters( 'the_title', $item->title, $item->ID );
    $item_output = sprintf(
      '<a%s>%s</a>',
      $attributes,
      $title
    );

    $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
  }
}
