/**
 * Navigation.js module
 * The original, accessible navigation module for Air-light
 *
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-30 16:24:47
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-30 23:36:52
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

// Calculate burger menu position
function calculateBurgerMenuPosition() {
  // If nav-toggle, site-header or main-menu not found, bail
  if (!document.getElementById('nav-toggle') || !document.querySelector('.site-header') || !document.getElementById('main-menu')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No nav-toggle or site-header found.');

    return;
  }

  // Get the height of .site-header and #nav-toggle
  // Calculate the top position of the toggle to be exactly in the center vertically
  const siteHeaderHeight = document.querySelector('.site-header').offsetHeight;
  const navToggleHeight = document.getElementById('nav-toggle').offsetHeight;

  // Set the top position of the toggle
  document.getElementById('nav-toggle').style.top = `${(siteHeaderHeight - navToggleHeight) / 2}px`;

  // Set navigation position from top
  document.getElementById('main-menu').style.top = `${siteHeaderHeight}px`;
}

// Calculate mobile nav-toggle height
function calculateDropdownToggleHeight() {
  // If .dropdown-toggle not found, bail
  if (!document.querySelectorAll('.dropdown-toggle')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No dropdown-toggles found.');

    return;
  }

  // Find all .dropdown-toggle elements on mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Loop through dropdown toggles
  dropdownToggles.forEach((dropdownToggle) => {
    // Get the height of previous element
    const previousElementHeight = dropdownToggle.previousElementSibling.offsetHeight;

    // Set the height of the dropdown toggle
    // eslint-disable-next-line no-param-reassign
    dropdownToggle.style.height = `${previousElementHeight}px`;
  });
}

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

// Event listener helper function
function addMultipleEventListener(element, events, handler) {
  events.forEach((e) => element.addEventListener(e, handler));
}

// Dropdown menu function
function dropdownMenuOnHover(items) {
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
      setTimeout(() => {
        // Remove hover-intent class on mouse leave
        this.classList.remove('hover-intent');
        this.parentNode.classList.remove('hover-intent');

        const dropdownToggles = this.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach((dropdownToggle) => {
          // Set aria-expanded to false for all dropdown-toggle elements
          dropdownToggle.setAttribute('aria-expanded', 'false');

          if (dropdownToggle.parentNode.querySelector('.dropdown')) {
            const linkText = dropdownToggle.parentNode.querySelector('.dropdown').textContent;

            // Set aria-label to expand for all dropdown-toggle elements
            // eslint-disable-next-line camelcase, no-undef
            dropdownToggle.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
          }
        });
      }, hoverIntentTimeout);

      setTimeout(() => {
        // Remove removing-hover class after a while to re-initialize the menu
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
      if (thisElement.parentNode.parentNode.id === 'main-menu' || (thisElement.classList.contains('button-nav') && thisElement.parentNode.parentNode.id === 'main-menu')) {
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
            previousItem.querySelector('.dropdown-toggle').setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${previousItem.querySelector('.dropdown-item').innerText}`);

            // Change toggle button aria-expanded
            previousItem.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
          }
        }
      }
    });

    // NVDA supported keyboard navigation (NVDA and mobile need click event to work)
    addMultipleEventListener(li, ['click', 'keydown', 'keypress'], (e) => {
      // Get this link
      const thisElement = e.target;

      // Get this menu-item
      const thisMenuItem = thisElement.parentNode;

      // Define the elements of this dropdown
      const firstDropdown = thisElement.parentNode.parentNode.parentNode.querySelector('.sub-menu');
      const thisDropdown = thisElement.nextElementSibling;
      const dropdownToggleButton = thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle');

      // Remove removing-hover class
      thisElement.classList.remove('removing-hover');
      thisMenuItem.parentNode.classList.remove('removing-hover');

      // Open navigation on Enter, e.type click is for NVDA
      if (e.key === 'Enter' || e.type === 'click') {
        // If this item is a hyperlink, do nothing. We want to use Enter only with buttons
        if (thisElement.tagName === 'A') {
          return;
        }

        // Get the link label of .dropdown link
        const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

        // Toggle toggled-on class
        thisElement.classList.toggle('toggled-on');

        // If aria-expanded is false, set it to true
        if (thisElement.getAttribute('aria-expanded') === 'false') {
          // Set aria-expanded to true
          thisElement.setAttribute('aria-expanded', 'true');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.collapse_for} ${linkLabel}`);
        } else {
          // Set aria-expanded to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Toggle the dropdown
        if (thisDropdown && !thisDropdown.classList.contains('toggled-on')) {
          // Add hover-intent class to this menu-item
          thisMenuItem.classList.add('hover-intent');

          // Add toggled-on class to this dropdown
          thisDropdown.classList.add('toggled-on');
        } else {
          // Remove hover-intent class from this menu-item
          if (thisMenuItem) {
            thisMenuItem.classList.remove('hover-intent');
          }

          // Remove toggled-on class from this dropdown
          if (thisDropdown) {
            thisDropdown.classList.remove('toggled-on');
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

        // Get the link label of dropdown link
        const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

        // Set aria label attribute
        // eslint-disable-next-line camelcase, no-undef
        dropdownToggleButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

        // If we're on button, add aria-expanded to false
        if (thisElement.classList.contains('dropdown-toggle')) {
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Move focus back to previous .dropdown-toggle, but only if we're not on main level
        if (thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Delay toggling for NVDA for 100 ms
          setTimeout(() => {
            dropdownToggleButton.focus();
          }, 100);
        }
      }

      // If no arrow keys used, do not continue
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        return;
      }

      // Arrow keys
      switch (e.code) {
      // ArrowUp
      case 'ArrowUp':

        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If we're on the sub-menu, move up
        if (thisElement.parentNode.parentNode.previousElementSibling && thisElement.parentNode.parentNode.previousElementSibling.classList.contains('dropdown-toggle')) {
          // Focus to the previous link
          thisElement.parentNode.parentNode.previousElementSibling.focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is true, close the dropdown
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
          // Remove hover-intent class from this menu-item
          thisMenuItem.classList.remove('hover-intent');

          // Remove toggled-on class from this dropdown
          thisDropdown.classList.remove('toggled-on');

          // Set aria-expanded attribute to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Get the link label of .dropdown link
          const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

          // Move focus back to previous .dropdown-toggle
          dropdownToggleButton.focus();
        }

        // If this is a correct element, focus to the previous link
        if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
          // If there is no previous items, bail
          if (!thisElement.parentNode.previousElementSibling) {
            return;
          }

          // Get the previous link
          const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

          // If previous element is .dropdown-toggle element, focus to it
          if (previousToggle && !thisElement.querySelector('.dropdown-toggle')) {
            previousToggle.focus();
          } else {
            // If previous element is a link, focus to it
            previousLink.focus();
          }
        }

        break;

        // ArrowDown
      case 'ArrowDown':

        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If we're on the sub-menu, move down
        if (thisElement.parentNode.parentNode.nextElementSibling && thisElement.parentNode.parentNode.nextElementSibling.classList.contains('dropdown-toggle')) {
          // Focus to the next link
          thisElement.parentNode.parentNode.nextElementSibling.focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is true, move down
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
          // Focus to the next link
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
        // (if we are not inside sub-menu)
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && !thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
          // Open sub-menu
          thisElement.click();

          // Focus to the next link under sub-menu
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

          // Don't do anything else
          return;
        }

        // If we are in fact in sub menu, move to next link
        if (thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
          // Focus to the next link
          thisElement.parentNode.nextElementSibling.querySelector('a').focus();
        }

        // If this is a correct element, focus to the next link
        if ((thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') && !thisElement.classList.contains('dropdown-toggle')) {
          // If there is no next items, bail
          if (!thisElement.parentNode.nextElementSibling) {
            return;
          }

          // Get the next link
          const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          let nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

          // If this has class .dropdown-item, jump to the next .dropdown-toggle
          if (thisElement.classList.contains('dropdown-item')) {
          // If there is a toggle
            if (thisElement.nextElementSibling) {
            // Get the dropdown-toggle element
              nextToggle = thisElement.nextElementSibling;

              // If next element is .dropdown-toggle element, focus to it
              if (nextToggle) {
                nextToggle.focus();
              }
            }
          }

          // If next element is .dropdown-toggle element, focus to it
          if (nextToggle && !thisElement.querySelector('.dropdown-toggle')) {
            nextToggle.focus();
          } else {
            // If next element is a link, focus to it
            nextLink.focus();
          }
        }

        break;

        // ArrowLeft
      case 'ArrowLeft':

        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If we are on the first link, move to the dropdown-toggle and close menu
        if (thisElement.parentNode.previousElementSibling === null && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the previous link
          thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').focus();

          // Close the dropdown
          thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').click();

          // Don't do anything else
          return;
        }

        // If this is a .dropdown-toggle button and aria-expanded is true, move left
        if (thisElement.parentNode.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the previous link
          thisElement.parentNode.previousElementSibling.querySelector('a').focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is false, close the dropdown
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Remove hover-intent class from this menu-item
          thisMenuItem.classList.remove('hover-intent');

          // Remove toggled-on class from this dropdown
          thisDropdown.classList.remove('toggled-on');

          // Set aria-expanded attribute to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Get the link label of .dropdown link
          const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

          // Move focus back to previous .dropdown-toggle
          dropdownToggleButton.focus();
        }

        // If this is a correct element, focus to the previous link
        if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
          // If this is a .dropdown-toggle button and aria-expanded is false,
          // move to the link directly before it
          if (thisElement.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false') {
            // Focus to the previous link
            thisElement.previousElementSibling.focus();

            // Don't do anything else
            return;
          }

          // If there is no previous items, bail
          if (!thisElement.parentNode.previousElementSibling) {
            return;
          }

          // Get the previous link
          const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

          // If previous element is .dropdown-toggle element, focus to it
          if (previousToggle) {
            previousToggle.focus();
          } else {
            // If previous element is a link, focus to it
            previousLink.focus();
          }
        }

        break;

        // ArrowRight
      case 'ArrowRight':

        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If this is a .dropdown-toggle button and aria-expanded is true, move right
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the next link
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
        }

        // If this has class .dropdown-item, jump to the next .dropdown-toggle
        if (thisElement.nextElementSibling) {
          thisElement.nextElementSibling.focus();

          // Disable other actions if this is a .dropdown-item
          if (thisElement.classList.contains('dropdown-item')) {
            return;
          }
        }

        // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Open sub-menu
          thisElement.click();

          // Do nothing else
          return;
        }

        // If this is a dropdown-toggle button and aria-expanded is true, move right
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the next link
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

          // Don't do anything else
          return;
        }

        // If this is a correct element, focus to the previous link
        if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
          // If there is no next items, bail
          if (!thisElement.parentNode.nextElementSibling) {
            return;
          }

          // Get the next link
          const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          const nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

          // If next element is .dropdown-toggle element, focus to it
          if (nextToggle) {
            nextToggle.focus();
          } else {
            // If next element is a link, focus to it
            nextLink.focus();
          }
        }

        break;

      default:
        break;
      }
    });
  });
}

const navCore = () => {
  // If main-menu is not found, bail
  // if (!document.getElementById('main-menu')) {
  //   return;
  // }

  // Set vars.
  // const html = document.getElementsByTagName('html')[0];
  // const body = document.getElementsByTagName('body')[0];
  // const container = document.getElementById('nav');
  // const menu = container.getElementsByTagName('ul')[0];
};

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
  addDropdownToggleLabels(menuItems);
  dropdownMenuKeyboardNavigation(menuItems, focusableElementsforDropdown);

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
  addMultipleEventListener(document.getElementById('nav-toggle'), ['click', 'keydown', 'keypress'], navToggle);

  // Get all dropdown-toggles
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Loop through dropdown-toggles
  dropdownToggles.forEach((dropdownToggle) => {
    // When clicking a dropdown-toggle, add .js-dropdown-active class to the parent .menu-item
    addMultipleEventListener(dropdownToggle, ['click', 'keydown', 'keypress'], calculateDropdownToggleHeight);
  });

  // Calculate mobile nav-toggle position
  calculateBurgerMenuPosition();
};

// Export different navigation functions
export { navCore, navDesktop, navMobile };

// Reinit some things
window.addEventListener('resize', () => {
  // Center vertically the absolute positioned burger
  calculateBurgerMenuPosition();

  // Center vertically the absolute positioned mobile dropdown toggles by setting fixed height
  calculateDropdownToggleHeight();

  // Check for submenu overflow
  checkForSubmenuOverflow(document.querySelectorAll('.menu-item'));
});
