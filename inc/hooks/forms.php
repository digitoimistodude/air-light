<?php
/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-02-04 18:15:59
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-06-22 09:33:02
 *
 * @package air-light
 */

namespace Air_Light;

// Always set Output CSS setting to No. We want to use our own _gravity-forms.scss
function dequeue_gf_stylesheets() {
  wp_dequeue_style( 'gforms_reset_css' );
  wp_dequeue_style( 'gforms_datepicker_css' );
  wp_dequeue_style( 'gforms_formsmain_css' );
  wp_dequeue_style( 'gforms_ready_class_css' );
  wp_dequeue_style( 'gforms_browsers_css' );
}

// Disable printing Gravity Forms js straight after <head> (invalid HTML)
add_filter( 'gform_force_hooks_js_output', '__return_false' );
