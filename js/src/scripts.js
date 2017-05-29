/**
 * Air theme JavaScript.
 */

// Vanilla JS start

// Set up the responsive and accessible navigation
var customToggle = document.getElementById('nav-toggle');
var customLabel = document.getElementById('nav-toggle-label');
var navigation = responsiveNav(".nav-collapse", {
  animate: false, // We are using animations in CSS
  customToggle: ".nav-toggle",
  navClass: ".nav-collapse",
  menuItems: "menu-items",
  subMenu: "sub-menu",
  enableFocus: true,
  enableDropdown: true,
  openDropdown: screenReaderTexts.expandSubMenu,
  closeDropdown: screenReaderTexts.collapseSubMenu,
  open: function() {
    customLabel.innerHTML = screenReaderTexts.collapseMenu;
  },
  close: function() {
    customLabel.innerHTML = screenReaderTexts.expandMenu;
  },
  resizeMobile: function() {
    customToggle.setAttribute('aria-controls', 'nav');
  },
  resizeDesktop: function() {
    customToggle.removeAttribute('aria-controls');
  },
});


// jQuery start
( function( $ ) {

	// Hide or show the "back to top" link
	$(window).scroll(function() {

    // Back to top
  	var offset = 300; // Browser window scroll (in pixels) after which the "back to top" link is shown
  	var offset_opacity = 1200; // Browser window scroll (in pixels) after which the link opacity is reduced
  	var scroll_top_duration = 700; // Duration of the top scrolling animation (in ms)
    var link_class = '.top';

		if( $(this).scrollTop() > offset ) {
      $( link_class ).addClass('is-visible');
    } else {
      $( link_class ).removeClass('is-visible');
    }

		if( $(this).scrollTop() > offset_opacity ) {
			$( link_class ).addClass('fade-out');
		} else {
      $( link_class ).removeClass('fade-out');
    }

	});

  // Document ready start
  $(function() {

    // Document ready stuff here

    // Set up back to top link
    var moveTo = new MoveTo();
    var target = document.getElementById('target');
    moveTo.move(target);

    // Register a back to top trigger
    var trigger = document.getElementsByClassName('js-trigger')[0];
    moveTo.registerTrigger(trigger);

  });

} )( jQuery );
