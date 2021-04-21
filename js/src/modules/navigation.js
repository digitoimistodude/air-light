// TODO: Refactor file
/* eslint-disable default-case, eqeqeq, no-restricted-globals, no-undef, no-var, vars-on-top, prefer-const, max-len, prefer-destructuring, no-redeclare, no-plusplus, no-use-before-define, no-unused-vars, block-scoped-var, func-names */
/*
An accessible menu for WordPress

https://github.com/theme-smith/accessible-nav-wp
Kirsten Smith (kirsten@themesmith.co.uk)
Licensed GPL v.2 (http://www.gnu.org/licenses/gpl-2.0.html)

This work derived from:
https://github.com/WordPress/twentysixteen (GPL v.2)
https://github.com/wpaccessibility/a11ythemepatterns/tree/master/menu-keyboard-arrow-nav (GPL v.2)
*/

(function ($) {
  // Responsive nav width
  const responsivenav = 960;

  // Check if enter pressed
  let enterPressed = false;
  $(window)
    .keydown((evt) => {
      if (evt.which === 13) {
        enterPressed = true;
      }
    })
    .keyup((evt) => {
      if (evt.which === 13) {
        enterPressed = false;
      }
    });

  // Hover intent
  $('.menu-item-has-children').hover(
    function () {
      $(this).addClass('hover-intent');
    },
    function () {
      setTimeout(() => {
        $(this).removeClass('hover-intent');
      }, 100);
    },
  );

  const menuContainer = $('.nav-container');
  const menuToggle = menuContainer.find('#nav-toggle');
  const siteHeaderMenu = menuContainer.find('#main-navigation-wrapper');
  const siteNavigation = menuContainer.find('#nav');

  // Toggles the menu button
  (function () {
    if (!menuToggle.length) {
      return;
    }

    // Do not set aria-expanded false on desktop
    if (window.innerWidth < responsivenav) {
      menuToggle.add(siteNavigation).attr('aria-expanded', 'false');
    }

    menuToggle.on('click', function () {
      $(this).add(siteHeaderMenu).toggleClass('toggled-on');

      // Change screen reader expanded state
      $(this).attr(
        'aria-expanded',
        $(this).attr('aria-expanded') === 'false' ? 'true' : 'false',
      );

      // Change screen reader open/close labels
      $('#nav-toggle-label').text(
        // eslint-disable-next-line no-undef
        $('#nav-toggle-label').text() === air_light_screenReaderText.expand_toggle
          ? air_light_screenReaderText.collapse_toggle
          : air_light_screenReaderText.expand_toggle,
      );

      $(this).attr(
        'aria-label',
        $(this).attr('aria-label') === air_light_screenReaderText.expand_toggle
          ? air_light_screenReaderText.collapse_toggle
          : air_light_screenReaderText.expand_toggle,
      );

      // jscs:disable
      $(this)
        .add(siteNavigation)
        .attr(
          'aria-expanded',
          $(this).add(siteNavigation).attr('aria-expanded') === 'false'
            ? 'true'
            : 'false',
        );
      // jscs:enable
    });
  }());

  // Close focused dropdowns when pressing esc
  $('.menu-item a, .dropdown button').on('keyup', function () {
    if ($('.dropdown').find(':focus').length !== 0) {
      // Close menu using Esc key.
      if (event.keyCode === 27) {
        // Close the dropdown menu
        thisDropdown = $(this).parent().parent().parent();

        screenReaderSpan = thisDropdown.find('.screen-reader-text');
        dropdownToggle = thisDropdown.find('.dropdown-toggle');
        thisDropdown.find('.sub-menu').removeClass('toggled-on');
        thisDropdown.find('.dropdown-toggle').removeClass('toggled-on');
        thisDropdown.find('.dropdown').removeClass('toggled-on');
        dropdownToggle.attr('aria-expanded', 'false');
        // jscs:enable
        screenReaderSpan.text(air_light_screenReaderText.expand);
        // Move focus back to previous dropdown select
        thisDropdown.find('.dropdown-toggle:first').focus();
      }
    }

    if (window.innerWidth > responsivenav) {
      // Close previous dropdown if we are on main level
      prevDropdown = $(this).parent().prev();

      screenReaderSpanPrev = prevDropdown.find('.screen-reader-text');
      dropdownTogglePrev = prevDropdown.find('.dropdown-toggle');
      prevDropdown.find('.sub-menu').removeClass('toggled-on');
      prevDropdown.find('.dropdown-toggle').removeClass('toggled-on');
      prevDropdown.find('.dropdown').removeClass('toggled-on');
      dropdownTogglePrev.attr('aria-expanded', 'false');
      screenReaderSpanPrev.text(air_light_screenReaderText.expand);

      // Close next dropdown if we are on main level
      nextDropdown = $(this).parent().next();

      screenReaderSpanNext = nextDropdown.find('.screen-reader-text');
      dropdownToggleNext = nextDropdown.find('.dropdown-toggle');
      nextDropdown.find('.sub-menu').removeClass('toggled-on');
      nextDropdown.find('.dropdown-toggle').removeClass('toggled-on');
      nextDropdown.find('.dropdown').removeClass('toggled-on');
      dropdownToggleNext.attr('aria-expanded', 'false');
      screenReaderSpanNext.text(air_light_screenReaderText.expand);
    }
  });

  // Adds aria attribute
  siteHeaderMenu.find('.menu-item-has-children').attr('aria-haspopup', 'true');

  // Open last dropdown by default on mobile
  // TODO: Rather fix the issue: https://github.com/digitoimistodude/air-light/issues/26
  // $(() => {
  //   if (window.innerWidth < responsivenav) {
  //     const screenReaderSpan = $('.menu-items > .dropdown-toggle').find('.screen-reader-text');
  //     const dropdownMenu = $('.menu-items > .menu-item-has-children:last .sub-menu');
  //     const dropdownItem = $('.menu-items > .menu-item-has-children:last .dropdown');

  //     dropdownItem.addClass('toggled-on');
  //     dropdownMenu.addClass('toggled-on');
  //     dropdownItem.attr('aria-expanded', 'true');
  //     dropdownItem.attr('aria-label', air_light_screenReaderText.collapse);
  //     screenReaderSpan.text(air_light_screenReaderText.collapse);
  //   }
  // });

  // Add default dropdown-toggle label
  $('.dropdown-toggle').each(function () {
    $(this).attr('aria-label', `${air_light_screenReaderText.expand_for} ${$(this).prev().text()}`);
  });

  // Toggles the sub-menu when dropdown toggle button accessed
  siteHeaderMenu.find('.dropdown-toggle').click(function (e) {
    if (enterPressed || window.innerWidth < responsivenav) {
      const dropdownMenu = $(this).nextAll('.sub-menu');

      e.preventDefault();
      $(this).toggleClass('toggled-on');
      dropdownMenu.toggleClass('toggled-on');

      // jscs:disable
      $(this).attr(
        'aria-expanded',
        $(this).attr('aria-expanded') === 'false' ? 'true' : 'false',
      );
      // jscs:enable
      // Change screen reader open/close labels

      $(this).attr(
        'aria-label',
        $(this).attr('aria-label') === `${air_light_screenReaderText.collapse_for} ${$(this).prev().text()}`
          ? `${air_light_screenReaderText.expand_for} ${$(this).prev().text()}`
          : `${air_light_screenReaderText.collapse_for} ${$(this).prev().text()}`,
      );
    }
  });

  // Adds a class to sub-menus for styling
  $('.sub-menu .menu-item-has-children')
    .parent('.sub-menu')
    .addClass('has-sub-menu');

  // Keyboard navigation
  $('.menu-item a, button.dropdown-toggle').on('keydown', function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) == -1) {
      return;
    }

    switch (e.keyCode) {
    case 37: // Left key
      e.preventDefault();
      e.stopPropagation();

      if ($(this).hasClass('dropdown-toggle')) {
        $(this).prev('a').focus();
      } else if (
        $(this).parent().prev().children('button.dropdown-toggle').length
      ) {
        $(this).parent().prev().children('button.dropdown-toggle')
          .focus();
      } else {
        $(this).parent().prev().children('a')
          .focus();
      }

      if ($(this).is('ul ul ul.sub-menu.toggled-on li:first-child a')) {
        $(this)
          .parents('ul.sub-menu.toggled-on li')
          .children('button.dropdown-toggle')
          .focus();
      }

      break;

    case 39: // Right key
      e.preventDefault();
      e.stopPropagation();

      if ($(this).next('button.dropdown-toggle').length) {
        $(this).next('button.dropdown-toggle').focus();
      } else if ($(this).parent().next().find('input').length) {
        $(this).parent().next().find('input')
          .focus();
      } else {
        $(this).parent().next().children('a')
          .focus();
      }

      if ($(this).is('ul.sub-menu .dropdown-toggle.toggled-on')) {
        $(this).parent().find('ul.sub-menu li:first-child a').focus();
      }

      break;

    case 40: // Down key
      e.preventDefault();
      e.stopPropagation();

      if ($(this).next().length) {
        $(this).next().find('li:first-child a').first()
          .focus();
      } else if ($(this).parent().next().find('input').length) {
        $(this).parent().next().find('input')
          .focus();
      } else {
        $(this).parent().next().children('a')
          .focus();
      }

      if (
        $(this).is('ul.sub-menu a')
          && $(this).next('button.dropdown-toggle').length
      ) {
        $(this).parent().next().children('a')
          .focus();
      }

      if (
        $(this).is('ul.sub-menu .dropdown-toggle')
          && $(this).parent().next().children('.dropdown-toggle').length
      ) {
        $(this).parent().next().children('.dropdown-toggle')
          .focus();
      }

      break;

    case 38: // Up key
      e.preventDefault();
      e.stopPropagation();

      if ($(this).parent().prev().length) {
        $(this).parent().prev().children('a')
          .focus();
      } else {
        $(this)
          .parents('ul')
          .first()
          .prev('.dropdown-toggle.toggled-on')
          .focus();
      }

      if (
        $(this).is('ul.sub-menu .dropdown-toggle')
          && $(this).parent().prev().children('.dropdown-toggle').length
      ) {
        $(this).parent().prev().children('.dropdown-toggle')
          .focus();
      }

      break;
    }
  });

  let html;
  let body;
  let container;
  let button;
  let menu;
  let menuWrapper;
  let links;
  let subMenus;
  var i;
  let len;
  let focusableElements;
  var firstFocusableElement;
  var lastFocusableElement;

  container = document.getElementById('nav');
  if (!container) {
    return;
  }

  button = document.getElementById('nav-toggle');
  if (typeof button === 'undefined') {
    return;
  }

  // Set vars.
  html = document.getElementsByTagName('html')[0];
  body = document.getElementsByTagName('body')[0];
  menu = container.getElementsByTagName('ul')[0];
  menuWrapper = document.getElementById('main-navigation-wrapper');

  // Hide menu toggle button if menu is empty and return early.
  if (typeof menu === 'undefined') {
    button.style.display = 'none';
    return;
  }

  // Do not set aria-expanded false on desktop
  if (window.innerWidth < responsivenav) {
    menu.setAttribute('aria-expanded', 'false');
  }

  if (menu.className.indexOf('nav-menu') === -1) {
    menu.className += ' nav-menu';
  }

  // Focus trap for mobile navigation
  if (window.innerWidth < responsivenav) {
    var firstFocusableElement = null;
    var lastFocusableElement = null;

    // Select nav items
    navElements = container.querySelectorAll([
      '.nav-primary a[href]',
      '.nav-primary button',
    ]);

    // Listen for key events on nav elements and the toggle button
    // to trigger focus trap
    for (var i = 0; i < navElements.length; i++) {
      navElements[i].addEventListener('keydown', focusTrap);
    }
  }

  // What happens when clicking menu toggle
  button.onclick = function () {
    if (container.className.indexOf('is-active') !== -1) {
      closeMenu(); // Close menu.
    } else {
      html.className += ' disable-scroll';
      body.className += ' js-nav-active';
      container.className += ' is-active';
      button.className += ' is-active';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');

      // Add focus trap when menu open
      button.addEventListener('keydown', focusTrap, false);
    }
  };

  // Close menu using Esc key.
  document.addEventListener('keyup', (event) => {
    if (event.keyCode == 27) {
      if (container.className.indexOf('is-active') !== -1) {
        closeMenu(); // Close menu.
      }
    }
  });

  // Close menu clicking menu wrapper area.
  menuWrapper.onclick = function (e) {
    if (
      e.target == menuWrapper
      && container.className.indexOf('is-active') !== -1
    ) {
      closeMenu(); // Close menu.
    }
  };

  // Close menu function.
  function closeMenu() {
    button.removeEventListener('keydown', focusTrap, false);
    html.className = html.className.replace(' disable-scroll', '');
    body.className = body.className.replace(' js-nav-active', '');
    container.className = container.className.replace(' is-active', '');
    button.className = button.className.replace(' is-active', '');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-expanded', 'false');

    // Return focus to nav-toggle
    button.focus();
  }

  // Get all the link elements within the menu.
  links = menu.getElementsByTagName('a');
  subMenus = menu.getElementsByTagName('ul');

  // Each time a menu link is focused or blurred, toggle focus.
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    let self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (self.className.indexOf('nav-menu') === -1) {
      // On li elements toggle the class .focus.
      if (self.tagName.toLowerCase() === 'li') {
        if (self.className.indexOf('focus') !== -1) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  function focusTrap(e) {
    // Set focusable elements inside main navigation.
    focusableElements = container.querySelectorAll([
      '.sub-menu.toggled-on > li a[href]',
      'ul[aria-expanded="true"] > li > a[href]',
      'area[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '.sub-menu.toggled-on > li > button:not([disabled]):not(.toggled-on)',
      'ul[aria-expanded="true"] > li > button:not([disabled]):not(.toggled-on)',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^=' - '])',
    ]);
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];

    // Redirect last Tab to first focusable element.
    if (lastFocusableElement === e.target && e.keyCode === 9 && !e.shiftKey) {
      e.preventDefault();
      button.focus(); // Set focus on first element - that's actually close menu button.
    }

    // Redirect first Shift+Tab to toggle button element.
    if (firstFocusableElement === e.target && e.keyCode === 9 && e.shiftKey) {
      e.preventDefault();
      button.focus(); // Set focus on last element.
    }

    // Redirect Shift+Tab from the toggle button to last focusable element.
    if (button === e.target && e.keyCode === 9 && e.shiftKey) {
      e.preventDefault();
      lastFocusableElement.focus(); // Set focus on last element.
    }
  }
}(jQuery));
