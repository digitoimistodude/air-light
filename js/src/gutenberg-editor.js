/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-11 15:38:14
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-29 13:53:14
 */
// Declare the blocks you'd like to style.
// eslint-disable-next-line
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'boxed',
  label: 'Laatikko',
});

// When document is ready as in when blocks are fully loaded
window.addEventListener('load', () => {
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
  // eslint-disable-next-line
  const initializeBlock = function ($block) {
    // Your scripts here
  };

  // Initialize dynamic block preview (editor).
  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
  }
});
