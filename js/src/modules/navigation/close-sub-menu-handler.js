/**
 * @Author: Tuomas Marttila
 * @Date:   2023-03-21 15:25:27
 * @Last Modified by:   Tuomas Marttila
 * @Last Modified time: 2023-04-12 15:30:03
 */
import closeSubMenu from './close-sub-menu';

function closeSubMenuHandler(items) {
  // Close open dropdowns when clicking outside of the menu
  const page = document.getElementById('page');
  page.addEventListener('click', (e) => {
    // If the click is inside the menu, bail
    if (e.target.closest('.menu-items')) {
      return;
    }

    items.forEach((li) => {
      closeSubMenu(li);
    });
  });

  // Close open dropdown when pressing escape
  items.forEach((li) => {
    li.addEventListener('keydown', (keydownMouseoverEvent) => {
      if (keydownMouseoverEvent.key === 'Escape') {
        closeSubMenu(li);
      }
    });
  });

  // Close other dropdowns when opening a new one
  items.forEach((li) => {
    // Bail if no dropdown
    if (!li.classList.contains('menu-item-has-children')) {
      return;
    }

    const dropdownToggle = li.querySelector('.dropdown-toggle');
    const sameLevelDropdowns = li.parentNode.querySelectorAll(':scope > .menu-item-has-children');

    // Add event listener to dropdown toggle
    dropdownToggle.addEventListener('click', () => {
      // We want to close other dropdowns only when a new one is opened
      if (!dropdownToggle.classList.contains('toggled-on')) {
        return;
      }

      sameLevelDropdowns.forEach((sameLevelDropdown) => {
        if (sameLevelDropdown !== li) {
          // Close all other sub level dropdowns
          sameLevelDropdown.querySelectorAll('.menu-item').forEach((subLi) => {
            closeSubMenu(subLi);
          });
          // Close other same level dropdowns
          closeSubMenu(sameLevelDropdown);
        }
      });
    });
  });
}
export default closeSubMenuHandler;
