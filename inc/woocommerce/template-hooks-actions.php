<?php

add_filter( 'woocommerce_show_page_title', '__return_false' );

// remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description' );
// remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
// remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price' );
// remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating' );
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price' );
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
// remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs' );
// add_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 20 );
// add_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 30 );
// add_action( 'woocommerce_before_shop_loop', 'woocommerce_pagination', 40 );
// add_action( 'woocommerce_single_product_summary', 'woocommerce_breadcrumb', 4 );

// Change number or products per row to 3
add_filter( 'loop_shop_columns', 'air_wc_loop_columns' );
if ( ! function_exists( 'air_wc_loop_columns' ) ) {
	function air_wc_loop_columns() {
		return 3; // 3 products per row
	}
}

add_action( 'woocommerce_shop_loop_item_title', 'air_wc_shop_loop_item_title', 5 );
function air_wc_shop_loop_item_title() {
  echo '<div class="content">';
}

add_action( 'woocommerce_after_shop_loop_item', 'air_wc_after_shop_loop_item_title', 15 );
function air_wc_after_shop_loop_item_title() {
  echo '</div>';
}


add_action( 'woocommerce_after_shop_loop', 'air_wc_after_shop_loop_pagination_wrap_start', 5 );
function air_wc_after_shop_loop_pagination_wrap_start() {
  echo '<div class="wc-pagination-wrap">';
}

add_action( 'woocommerce_after_shop_loop', 'air_wc_after_shop_loop_pagination_wrap_stop', 20 );
function air_wc_after_shop_loop_pagination_wrap_stop() {
  echo '</div>';
}

add_action( 'woocommerce_single_product_summary', 'air_wc_single_product_summary_content', 20 );
function air_wc_single_product_summary_content() {
  echo the_content();
}

add_filter( 'woocommerce_breadcrumb_defaults', 'jk_change_breadcrumb_delimiter' );
function jk_change_breadcrumb_delimiter( $defaults ) {
	$defaults['home'] = '';
	$defaults['delimiter'] = ' <span class="sep">&gt;</span> ';
	return $defaults;
}

add_action( 'init', 'air_wc_clear_cart_url' );
function air_wc_clear_cart_url() {
  global $woocommerce;
	if ( isset( $_GET['empty-cart'] ) ) {
		$woocommerce->cart->empty_cart();
	}
}
