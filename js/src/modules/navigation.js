/**
 * Navigation.js module
 * The original, accessible navigation module for Air-light
 *
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-30 16:24:47
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 00:30:38
 */

// Import functions from navigation/
import addMultipleEventListeners from './navigation/add-multiple-event-listeners';
import calculateBurgerMenuPosition from './navigation/calculate-burger-menu-position';
// import focusTrap from './navigation/focus-trap';
import calculateDropdownToggleHeight from './navigation/calculate-dropdown-toggle-height';
import checkForSubmenuOverflow from './navigation/check-for-submenu-overflow';
import dropdownMenuOnHover from './navigation/dropdown-menu-on-hover';
import A11yAddDropdownToggleLabels from './navigation/a11y-add-dropdown-toggle-labels';
import A11yDropdownMenuKeyboardNavigation from './navigation/a11y-dropdown-menu-keyboard-navigation';

const navDesktop = () => {
  // Define globals
  const menuItems = document.querySelectorAll('.menu-item');

  // Define focusable elements on sub-menu (.menu-item a, .dropdown button)
  const focusableElementsforDropdown = document.querySelectorAll('.menu-item a, .dropdown button, .button-nav');

  // If main-menu is not found, bail
  if (!document.getElementById('main-menu')) {
    return;
  }

  // Dropdown menus
  A11yAddDropdownToggleLabels(menuItems);
  A11yDropdownMenuKeyboardNavigation(menuItems, focusableElementsforDropdown);

  // Dropdown on mouse hover
  dropdownMenuOnHover(menuItems);

  // Check for submenu overflow
  checkForSubmenuOverflow(menuItems);
};

const navMobile = () => {
  // If burger toggle is not found, bail
  if (!document.getElementById('nav-toggle')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No nav-toggle found.');

    return;
  }

  function navToggle(e) {
    // If clicked with mouse or enter key
    if (e.type === 'click' || e.keyCode === 13) {
      // Activate nav
      document.body.classList.toggle('js-nav-active');

      // Toggle aria-expanded attribute, if it's false, change to true and vice versa
      if (document.getElementById('nav-toggle').getAttribute('aria-expanded') === 'false') {
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'true');
      } else {
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
      }

      // Toggle aria-label
      // eslint-disable-next-line camelcase, no-undef
      if (document.getElementById('nav-toggle').getAttribute('aria-label') === air_light_screenReaderText.expand_toggle) {
        // eslint-disable-next-line camelcase, no-undef
        document.getElementById('nav-toggle').setAttribute('aria-label', air_light_screenReaderText.collapse_toggle);
      } else {
        // eslint-disable-next-line camelcase, no-undef
        document.getElementById('nav-toggle').setAttribute('aria-label', air_light_screenReaderText.expand_toggle);
      }

      // Center vertically the absolute positioned mobile dropdown toggles by setting fixed height
      calculateDropdownToggleHeight();
    }
  }

  // When clicking #nav-toggle, add .js-nav-active body class
  addMultipleEventListeners(document.getElementById('nav-toggle'), ['click', 'keydown', 'keypress'], navToggle);

  // Get all dropdown-toggles
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Loop through dropdown-toggles
  dropdownToggles.forEach((dropdownToggle) => {
    // When clicking a dropdown-toggle, add .js-dropdown-active class to the parent .menu-item
    addMultipleEventListeners(dropdownToggle, ['click', 'keydown', 'keypress'], calculateDropdownToggleHeight);
  });

  // Calculate mobile nav-toggle position
  calculateBurgerMenuPosition();
};

// Export different navigation functions
export { navDesktop, navMobile };

// Reinit some things
window.addEventListener('resize', () => {
  // Center vertically the absolute positioned burger
  calculateBurgerMenuPosition();

  // Center vertically the absolute positioned mobile dropdown toggles by setting fixed height
  calculateDropdownToggleHeight();

  // Check for submenu overflow
  checkForSubmenuOverflow(document.querySelectorAll('.menu-item'));
});
