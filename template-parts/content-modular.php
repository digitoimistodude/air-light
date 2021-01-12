<?php
/**
 * A template base for modular content
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-28 15:38:00
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-01-12 15:59:01
 * @package air-light
 */

namespace Air_Light;

// Get the page id (can be something else than the page id)
$have_rows_id = get_modular_rows_id();

if ( function_exists( 'have_rows' ) && \have_rows( 'modular_content', $have_rows_id ) ) {
  while ( \have_rows( 'modular_content', $have_rows_id ) ) {
    \the_row();
    the_module( $have_rows_id );
  }
}

