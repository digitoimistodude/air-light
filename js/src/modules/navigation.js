/**
 * Navigation.js module
 * The original, accessible navigation module for Air-light
 *
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-30 16:24:47
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-29 18:20:51
 */

// Check if an element is out of the viewport
// eslint-disable-next-line func-names
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

// Check for submenu overflow
function checkForSubmenuOverflow(items) {
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

// Dropdown menu function
function dropdownMenu(items) {
  // Optional timeout
  const hoverIntentTimeout = 0;

  items.forEach((li) => {
    // eslint-disable-next-line func-names
    li.addEventListener('mouseover', function () {
      // If rules don't apply, bail
      if (li.classList.contains('removing-hover')) {
        return;
      }

      // Add hover classes
      this.classList.add('hover-intent');
      this.classList.add('hovering');
      this.parentNode.classList.add('hover-intent');
      this.parentNode.classList.add('hovering');

      // Remove hovering class after a while
      setTimeout(() => {
        this.classList.remove('hovering');
        this.parentNode.classList.remove('hovering');
      }, 500);

      document.addEventListener('keydown', (keydownMouseoverEvent) => {
        // If rules don't apply, bail
        if (this.classList.contains('removing-hover') || !this.classList.contains('hovering') || !this.parentNode.classList.contains('hovering')) {
          return;
        }

        // Close navigation on Escape while hovering the navigation
        if (keydownMouseoverEvent.key === 'Escape') {
          li.classList.remove('hover-intent');
          li.parentNode.classList.remove('hover-intent');
          li.parentNode.parentNode.classList.remove('hover-intent');

          // Add class removing-hover to prevent the menu from opening again when moving the mouse
          li.classList.add('removing-hover');
          li.parentNode.classList.add('removing-hover');

          // Remove removing-hover class after a while to re-initialize the menu
          setTimeout(() => {
            this.classList.remove('removing-hover');
            this.parentNode.classList.remove('removing-hover');
          }, 500);
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

// Add proper link labels for screen readers
function addDropdownToggleLabels(items) {
  items.forEach((li) => {
    // If .dropdown-class does not exist then do nothing
    if (!li.querySelector('.dropdown')) {
      return;
    }

    // Get the dropdown-button
    const dropdownButton = li.querySelector('.dropdown-toggle');

    // Get the link text that is children of this item
    const linkText = li.querySelector('.dropdown').innerText;

    // Add the aria-label to the dropdown button
    // eslint-disable-next-line camelcase, no-undef
    dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
  });
}

// Accessible keyboard navigation for dropdown menus
function dropdownMenuKeyboardNavigation(items, focusableElements) {
  focusableElements.forEach((li) => {
    li.addEventListener('keyup', (e) => {
      // Get this item
      const thisElement = e.target;

      // Close previous dropdown if this parent contains id main-menu
      if (thisElement.parentNode.parentNode.id === 'main-menu') {
        // If we have previous item
        if (thisElement.parentNode.previousElementSibling) {
          // Get the previous item
          const previousItem = thisElement.parentNode.previousElementSibling;

          // Remove toggled-on class from previous item
          previousItem.classList.remove('toggled-on');

          // Remove hover-intent class from previous item
          previousItem.classList.remove('hover-intent');

          // If sub-menu found
          if (previousItem.querySelector('.sub-menu')) {
          // Get the previous item's dropdown
            const previousItemDropdown = previousItem.querySelector('.sub-menu');

            // Remove toggled-on class from previous sibling
            previousItemDropdown.classList.remove('toggled-on');

            // Remove hover-intent class from previous sibling
            previousItemDropdown.classList.remove('hover-intent');

            // Change toggle button aria-label
            // eslint-disable-next-line camelcase, no-undef
            previousItem.querySelector('.dropdown-toggle').setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${previousItem.querySelector('.dropdown').innerText}`);

            // Change toggle button aria-expanded
            previousItem.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
          }
        }
      }
    });

    // eslint-disable-next-line func-names
    li.addEventListener('keydown', (e) => {
      // Get this link
      const thisElement = e.target;

      // Get this menu-item
      const thisMenuItem = thisElement.parentNode;

      // Define the elements of this dropdown
      const firstDropdown = thisElement.parentNode.parentNode.parentNode.querySelector('.sub-menu');
      const thisDropdown = thisElement.parentNode.parentNode.querySelector('.sub-menu');
      const dropdownToggleButton = thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle');

      // Remove removing-hover class
      thisElement.classList.remove('removing-hover');
      thisMenuItem.parentNode.classList.remove('removing-hover');

      // Open navigation on Enter
      if (e.key === 'Enter') {
        // If this item is a hyperlink, do nothing. We want to use Enter only with buttons
        if (thisElement.tagName === 'A') {
          return;
        }

        // Toggle the dropdown
        if (!thisDropdown.classList.contains('toggled-on')) {
        // Add hover-intent class to this menu-item
          thisMenuItem.classList.add('hover-intent');

          // Add toggled-on class to this dropdown
          thisDropdown.classList.add('toggled-on');

          // If we're on button, add aria-expanded to true
          if (thisElement.classList.contains('dropdown-toggle')) {
            thisElement.setAttribute('aria-expanded', 'true');

            // Get the link label of .dropdown link
            const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

            // Set aria-label of the dropdown button
            // eslint-disable-next-line camelcase, no-undef
            thisElement.setAttribute('aria-label', `${air_light_screenReaderText.collapse_for} ${linkLabel}`);
          }
        } else {
          // Remove hover-intent class from this menu-item
          thisMenuItem.classList.remove('hover-intent');

          // Remove toggled-on class from this dropdown
          thisDropdown.classList.remove('toggled-on');

          // If we're on button, add aria-expanded to false
          if (thisElement.classList.contains('dropdown-toggle')) {
            thisElement.setAttribute('aria-expanded', 'false');

            // Get the link label of .dropdown link
            const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

            // Set aria-label of the dropdown button
            // eslint-disable-next-line camelcase, no-undef
            thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
          }
        }
      }

      // Close navigation on Escape
      if (e.key === 'Escape') {
        // If we're on main level and nav item is not open, do nothing
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('hover-intent')) {
          return;
        }

        // Remove toggled-on classes from this dropdown
        firstDropdown.classList.remove('toggled-on');

        // Remove hover-intent classes from the current menu-item
        thisMenuItem.classList.remove('hover-intent');

        // Hide menu if we're on second level
        thisMenuItem.parentNode.parentNode.classList.remove('hover-intent');

        // Set aria expanded attribute to false
        dropdownToggleButton.setAttribute('aria-expanded', 'false');

        // If we're on button, add aria-expanded to false
        if (thisElement.classList.contains('dropdown-toggle')) {
          thisElement.setAttribute('aria-expanded', 'false');

          // Get the link label of .dropdown link
          const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Move focus back to previous .dropdown-toggle, but only if we're not on main level
        if (thisElement.parentNode.parentNode.id !== 'main-menu') {
          dropdownToggleButton.focus();
        }
      }
    });
  });
}

const navCore = () => {
  // Set vars.
  const html = document.getElementsByTagName('html')[0];
  const body = document.getElementsByTagName('body')[0];
  const container = document.getElementById('nav');
  const menu = container.getElementsByTagName('ul')[0];
};

const navDesktop = () => {
  // Get --width-max-mobile from CSS
  const widthMaxMobile = getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile');

  // Bail if we're on mobile
  if (window.matchMedia(`(max-width: ${widthMaxMobile})`).matches) {
    return;
  }

  // Define globals
  const menuItems = document.querySelectorAll('.menu-item');

  // Define focusable elements on sub-menu (.menu-item a, .dropdown button)
  const focusableElementsforDropdown = document.querySelectorAll('.menu-item a, .dropdown button');

  // Dropdown menus
  addDropdownToggleLabels(menuItems);
  dropdownMenu(menuItems);
  dropdownMenuKeyboardNavigation(menuItems, focusableElementsforDropdown);
  checkForSubmenuOverflow(menuItems);
};

// Export different navigation functions
export { navCore, navDesktop };
