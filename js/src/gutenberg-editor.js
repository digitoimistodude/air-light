/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-11 15:38:14
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-12 17:49:01
 */
/* eslint-disable camelcase, prefer-arrow-callback, no-unused-vars, no-undef, vars-on-top, no-var, func-names, max-len, import/no-unresolved */
import { setFigureWidths, setLazyLoadedFigureWidth } from './modules/gutenberg-helpers';

// Declare the block you'd like to style.
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'boxed',
  label: 'Laatikko',
});

var air_light_LazyLoad = new LazyLoad({
  callback_loaded: setLazyLoadedFigureWidth,
});

// When document is ready as in when blocks are fully loaded
window.addEventListener('load', function () {
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   *
   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/
   */
  var initializeBlock = function ($block) {
    air_light_LazyLoad.update();
  };

  // Initialize each block on page load (front end).
  air_light_LazyLoad.update();

  // Set non-lazyloaded figures width so captions in aligned images will be same width as image
  const figures = document.querySelectorAll('figure');
  setFigureWidths(figures);

  // Initialize dynamic block preview (editor).
  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
  }
});
