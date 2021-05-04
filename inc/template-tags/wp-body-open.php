<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-03-02 10:57:56
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-05-04 11:13:43
 *
 * @package air-light
 */

namespace Air_Light;

if ( ! function_exists( 'wp_body_open' ) ) {
	/**
	 *  Backwards compatibility for wp_body_open()
	 */
  function wp_body_open() {
    do_action( 'wp_body_open' );
  }
}
