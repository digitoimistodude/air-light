/**
 * Navigation.js module
 * The original, accessible navigation module for Air-light
 *
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-30 16:24:47
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-29 14:56:25
 */

// Check if an element is out of the viewport
const isOutOfViewport = function (elem) {
  // Get element's bounding
  const bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  const out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;

  return out;
};

// Dropdown menu function
function dropdownMenu() {
  // Define menu items for items
  const menuItems = document.querySelectorAll('.menu-item');

  // Optional timeout
  const hoverIntentTimeout = 0;

  menuItems.forEach((li) => {
    // eslint-disable-next-line func-names
    li.addEventListener('mouseover', function () {
      // If has .removing-hover class then don't add hover-intent class
      if (li.classList.contains('removing-hover')) {
        return;
      }

      this.classList.add('hover-intent');
      this.parentNode.classList.add('hover-intent');

      document.addEventListener('keydown', (keydownMouseoverEvent) => {
        // Close navigation on Escape while hovering the navigation
        if (keydownMouseoverEvent.key === 'Escape') {
          li.classList.remove('hover-intent');
          li.parentNode.classList.remove('hover-intent');
          li.parentNode.parentNode.classList.remove('hover-intent');

          // Add class removing-hover to prevent the menu from opening again when moving the mouse
          li.classList.add('removing-hover');
          li.parentNode.classList.add('removing-hover');
        }
      });

      // Remove removing-hover class after a while to re-initialize the menu
      setTimeout(() => {
        this.classList.remove('removing-hover');
        this.parentNode.classList.remove('removing-hover');
      }, 500);
    });

    // eslint-disable-next-line func-names
    li.addEventListener('mouseleave', function () {
      // Remove hover-intent class on mouse leave
      setTimeout(() => {
        this.classList.remove('hover-intent');
        this.parentNode.classList.remove('hover-intent');
      }, hoverIntentTimeout);

      // Remove removing-hover class after a while to re-initialize the menu
      setTimeout(() => {
        this.classList.remove('removing-hover');
        this.parentNode.classList.remove('removing-hover');
      }, 500);
    });
  });
}

// Accessible keyboard navigation for dropdown menus
function dropdownMenuKeyboardNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((li) => {
    // eslint-disable-next-line func-names
    li.addEventListener('keydown', function (e) {
      // Open navigation on Enter
      if (e.key === 'Enter') {
        this.classList.add('hover-intent');
        this.parentNode.classList.add('hover-intent');
      }

      // Close navigation on Escape if we are focused on the links under sub-menu
      if (e.key === 'Escape' && this.querySelector('.sub-menu')) {
        this.classList.remove('hover-intent');
        this.parentNode.classList.remove('hover-intent');

        // Add class removing-hover to prevent the menu from opening again when moving the mouse
        this.classList.add('removing-hover');
        this.parentNode.classList.add('removing-hover');

        // Move focus back to the previous .dropdown-toggle <button>
        this.querySelector('.dropdown-toggle').focus();

        // Remove removing-hover class after a while to re-initialize the menu
        setTimeout(() => {
          this.classList.remove('removing-hover');
          this.parentNode.classList.remove('removing-hover');
        }, 500);
      }
    });
  });
}

const navDesktop = () => {
  // Define things
  const html = document.getElementsByTagName('html')[0];
  const body = document.getElementsByTagName('body')[0];
  const menuWrapper = document.getElementById('main-navigation-wrapper');

  // Dropdown menus
  dropdownMenu();
  dropdownMenuKeyboardNavigation();
};

// Export different navigation functions
export default navDesktop;
