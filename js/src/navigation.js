/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
  var html, body, container, button, menu, menuWrapper, links, subMenus, i, len, focusableElements, firstFocusableElement, lastFocusableElement;

  container = document.getElementById( 'nav' );
  if ( ! container ) {
    return;
  }

  button = document.getElementById( 'nav-toggle' );
  if ( 'undefined' === typeof button ) {
    return;
  }

  // Set vars.
  html        = document.getElementsByTagName( 'html' )[0];
  body        = document.getElementsByTagName( 'body' )[0];
  menu        = container.getElementsByTagName( 'ul' )[0];
  menuWrapper = document.getElementById( 'main-navigation-wrapper' );

  // Hide menu toggle button if menu is empty and return early.
  if ( 'undefined' === typeof menu ) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute( 'aria-expanded', 'false' );
  if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
    menu.className += ' nav-menu';
  }

  button.onclick = function() {
    if ( -1 !== container.className.indexOf( 'is-active' ) ) {
      closeMenu(); // Close menu.
    } else {
      html.className      += ' disable-scroll';
      body.className      += ' js-nav-active';
      container.className += ' is-active';
      button.className    += ' is-active';
      button.setAttribute( 'aria-expanded', 'true' );
      menu.setAttribute( 'aria-expanded', 'true' );

      // Set focusable elements inside main navigation.
      focusableElements     = container.querySelectorAll( ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'] );
      firstFocusableElement = focusableElements[0];
      lastFocusableElement  = focusableElements[focusableElements.length - 1];

      console.log(focusableElements);

      // Redirect last Tab to first focusable element.
      lastFocusableElement.addEventListener( 'keydown', function ( e ) {
        if ( ( e.keyCode === 9 && ! e.shiftKey ) ) {
          e.preventDefault();
          button.focus(); // Set focus on first element - that's actually close menu button.
        }
      });

      // Redirect first Shift+Tab to toggle button element.
      firstFocusableElement.addEventListener( 'keydown', function ( e ) {
        if ( ( e.keyCode === 9 && e.shiftKey ) ) {
          e.preventDefault();
          button.focus(); // Set focus on last element.
        }
      });

      // Redirect Shift+Tab from the toggle button to last focusable element.
      button.addEventListener( 'keydown', function ( e ) {
        if ( ( e.keyCode === 9 && e.shiftKey ) ) {
          e.preventDefault();
          lastFocusableElement.focus(); // Set focus on last element.
        }
      });
    }
  };

  // Close menu using Esc key.
  document.addEventListener( 'keyup', function( event ) {

    if ( event.keyCode == 27 ) {
      if ( -1 !== container.className.indexOf( 'is-active' ) ) {
        closeMenu(); // Close menu.
      }
    }

  });

  // Close menu clicking menu wrapper area.
  menuWrapper.onclick = function( e ) {
    if ( e.target == menuWrapper && -1 !== container.className.indexOf( 'is-active' ) ) {
      closeMenu(); // Close menu.
    }
  };

  // Close menu function.
  function closeMenu() {
    html.className      = html.className.replace( ' disable-scroll', '' );
    body.className      = body.className.replace( ' js-nav-active', '' );
    container.className = container.className.replace( ' is-active', '' );
    button.className    = button.className.replace( ' is-active', '' );
    button.setAttribute( 'aria-expanded', 'false' );
    menu.setAttribute( 'aria-expanded', 'false' );
    button.focus();
  }

  // Get all the link elements within the menu.
  links    = menu.getElementsByTagName( 'a' );
  subMenus = menu.getElementsByTagName( 'ul' );

  // Each time a menu link is focused or blurred, toggle focus.
  for ( i = 0, len = links.length; i < len; i++ ) {
    links[i].addEventListener( 'focus', toggleFocus, true );
    links[i].addEventListener( 'blur', toggleFocus, true );
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    var self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

      // On li elements toggle the class .focus.
      if ( 'li' === self.tagName.toLowerCase() ) {
        if ( -1 !== self.className.indexOf( 'focus' ) ) {
          self.className = self.className.replace( ' focus', '' );
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */
  ( function( container ) {
    var touchStartFn, i,
      parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

    if ( 'ontouchstart' in window ) {
      touchStartFn = function( e ) {
        var menuItem = this.parentNode, i;

        if ( ! menuItem.classList.contains( 'focus' ) ) {
          e.preventDefault();
          for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
            if ( menuItem === menuItem.parentNode.children[i] ) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove( 'focus' );
          }
          menuItem.classList.add( 'focus' );
        } else {
          menuItem.classList.remove( 'focus' );
        }
      };

      for ( i = 0; i < parentLink.length; ++i ) {
        parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
      }
    }
  }( container ) );

} )();
