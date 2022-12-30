/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:23:22
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 00:28:01
 */
// Import required modules
import isOutOfViewport from './is-out-of-viewport';

// Check for submenu overflow
function checkForSubmenuOverflow(items) {
  // If items not found, bail
  if (!items) {
    // eslint-disable-next-line no-console
    console.log('Warning: No items for sub-menus found.');

    return;
  }

  items.forEach((li) => {
    // Find sub menus
    const subMenusUnderMenuItem = li.querySelectorAll('.sub-menu');

    // Loop through sub menus
    subMenusUnderMenuItem.forEach((subMenu) => {
      // First let's check if submenu exists
      if (typeof subMenusUnderMenuItem !== 'undefined') {
        // Check if the sub menu is out of viewport or not
        const isOut = isOutOfViewport(subMenu);

        // At least one side of the element is out of viewport
        if (isOut.right) {
          subMenu.classList.add('is-out-of-viewport');
        }
      }
    });
  });
}

export default checkForSubmenuOverflow;
