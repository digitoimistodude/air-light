<?php
/**
 * The core navigation file
 *
 * Original GitHub URI: https://github.com/twittem/wp-bootstrap-navwalker
 * Version: 2.0.4
 * Author: Originally Edward McIntyre - @twittem
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2019-12-30 21:58:07
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * A custom WordPress nav walker class, using the WordPress built in menu manager.
 */
class Nav_Walker extends \Walker_Nav_Menu {

  public function start_lvl( &$output, $depth = 0, $args = array() ) {
    $indent = str_repeat( "\t", $depth );

    // Get the ico
    ob_start();
    require get_theme_file_path( 'svg/chevron-down.svg' );
    $icon = ob_get_clean();

    $output .= '<button class="dropdown-toggle" aria-expanded="false">';
    $output .= '<span class="screen-reader-text">' . esc_html__( 'Open child menu', 'air-light' ) . '</span>';
    $output .= $icon . '</button>';
    $output .= "\n$indent<ul class=\"sub-menu\">\n";
  }

  public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

    /**
     * Dividers, Headers or Disabled
     * =============================
     * Determine whether the item is a Divider, Header, Disabled or regular
     * menu item. To prevent errors we use the strcasecmp() function to so a
     * comparison that is not case sensitive. The strcasecmp() function returns
     * a 0 if the strings are equal.
     */
    if ( strcasecmp( $item->attr_title, 'divider' ) === 0 && 1 === $depth ) {
      $output .= $indent . '<li class="divider">';
    } elseif ( strcasecmp( $item->title, 'divider' ) === 0 && 1 === $depth ) {
      $output .= $indent . '<li class="divider">';
    } elseif ( strcasecmp( $item->attr_title, 'dropdown-header' ) === 0 && 1 === $depth ) {
      $output .= $indent . '<li class="dropdown-header">' . esc_attr( $item->title );
    } elseif ( strcasecmp( $item->attr_title, 'disabled' ) === 0 ) {
      $output .= $indent . '<li class="disabled"><a href="#">' . esc_attr( $item->title ) . '</a>';
    } else {
      $class_names = $value = '';
      $classes     = empty( $item->classes ) ? array() : (array) $item->classes;
      $classes[]   = 'air-light-menu-item menu-item-' . $item->ID;
      $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );

      if ( $args->has_children ) {
        $class_names .= ' dropdown';
      }

      if ( in_array( 'current-menu-item', $classes, true ) ) {
        $class_names .= ' active';
      }

      $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

      $id = apply_filters( 'nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args );
      $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

      $output .= $indent . '<li' . $id . $value . $class_names . '>';

      $atts           = array();
      $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
      $atts['target'] = ! empty( $item->target ) ? $item->target : '';
      $atts['rel']    = ! empty( $item->xfn ) ? $item->xfn : '';

      // If item has_children add atts to a.
      if ( $args->has_children && 0 === $depth ) {
        $atts['href']        = ! empty( $item->url ) ? $item->url : '';
        $atts['data-toggle'] = 'dropdown';
        $atts['class']       = 'dropdown';
      } else {
        $atts['href'] = ! empty( $item->url ) ? $item->url : '';
      }

      $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args );

      $attributes = '';
      foreach ( $atts as $attr => $value ) {
        if ( ! empty( $value ) ) {
          $value       = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
          $attributes .= ' ' . $attr . '="' . $value . '"';
        }
      }

      $item_output = $args->before;

      $item_output .= '<a' . $attributes . '>';

      $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
      $item_output .= ( $args->has_children && 0 === $depth ) ? ' </a>' : '</a>';
      $item_output .= $args->after;

      $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
  }

  /**
   * Traverse elements to create list from elements.
   *
   * Display one element if the element doesn't have any children otherwise,
   * display the element and its children. Will only traverse up to the max
   * depth and no ignore elements under that depth.
   *
   * This method shouldn't be called directly, use the walk() method instead.
   *
   * @see Walker::start_el()
   * @since 2.5.0
   *
   * @param object $element Data object.
   * @param array  $children_elements List of elements to continue traversing.
   * @param int    $max_depth Max depth to traverse.
   * @param int    $depth Depth of current element.
   * @param array  $args Args.
   * @param string $output Passed by reference. Used to append additional content.
   * @return null   Null on failure with no changes to parameters.
   */
  public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
        if ( ! $element ) {
            return;
        }

        $id_field = $this->db_fields['id'];

        // Display this element.
        if ( is_object( $args[0] ) ) {
           $args[0]->has_children = ! empty( $children_elements[ $element->$id_field ] );
        }

        parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
    }

  /**
   * Menu Fallback
   * =============
   * If this function is assigned to the wp_nav_menu's fallback_cb variable
   * and a manu has not been assigned to the theme location in the WordPress
   * menu manager the function with display nothing to a non-logged in user,
   * and will add a link to the WordPress menu manager if logged in as an admin.
   *
   * @param array $args passed from the wp_nav_menu function.
   */
  public static function fallback( $args ) {
    if ( current_user_can( 'manage_options' ) ) {

      extract( $args );

      $fb_output = null;

      if ( $container ) {
        $fb_output = '<' . $container;

        if ( $container_id ) {
          $fb_output .= ' id="' . $container_id . '"';
        }

        if ( $container_class ) {
          $fb_output .= ' class="' . $container_class . '"';
        }

        $fb_output .= '>';
      }

      $fb_output .= '<ul';

      if ( $menu_id ) {
        $fb_output .= ' id="' . $menu_id . '"';
      }

      if ( $menu_class ) {
        $fb_output .= ' class="' . $menu_class . '"';
      }

      $fb_output .= '>';
      $fb_output .= '<li><a href="' . admin_url( 'nav-menus.php' ) . '">Add a menu</a></li>';
      $fb_output .= '</ul>';

      if ( $container ) {
        $fb_output .= '</' . $container . '>';
      }

      echo $fb_output; // phpcs:ignore
    }
  }
}
