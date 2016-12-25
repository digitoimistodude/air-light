/**
 * Air theme JavaScript.
 */

// Set up the responsive and accessible navigation
var customToggle = document.getElementById('nav-toggle');
var customLabel = document.getElementById('nav-toggle-label');
var navigation = responsiveNav(".nav-collapse", {
  animate: true,
  transition: 284,
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

( function( $ ) {

	// Hide or show the "back to top" link
	$(window).scroll(function() {

    // Back to top
  	var offset = 300, // Browser window scroll (in pixels) after which the "back to top" link is shown
  	offset_opacity = 1200, // Browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  	scroll_top_duration = 700 // Duration of the top scrolling animation (in ms)

		if( $(this).scrollTop() > offset ) {
      $('.top').addClass('is-visible');
    } else {
      $('.top').removeClass('is-visible');
    }

		if( $(this).scrollTop() > offset_opacity ) {
			$('.top').addClass('fade-out');
		} else {
      $('.top').removeClass('fade-out');
    }

	});

  $(function() {

    // Smooth scroll to top
    $('.top').on('click', function(event){
      event.preventDefault();
      $('body, html').animate({
        scrollTop: 0,
        }, 700
      );
    });

    // Smooth scroll to ID on any anchor link
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

  });

} )( jQuery );
