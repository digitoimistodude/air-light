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
  navClass: "nav-collapse",
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

$(document).ready(function() {

  // Back to top
	var offset = 300, // Browser window scroll (in pixels) after which the "back to top" link is shown
	offset_opacity = 1200, // Browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	scroll_top_duration = 700, // Duration of the top scrolling animation (in ms)
	$back_to_top = $('.top'); // Grab the "back to top" link

	// Hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('fade-out');
		}
	});

	// Smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0,
		 	}, scroll_top_duration
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
