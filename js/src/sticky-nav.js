( function( $ ) {

  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var collapsePoint = 157; // In what pixel height from top the navigation will be sticky
  var hidePoint = 700; // In what pixel height from top the navigation will collapse

  $(window).scroll(function(event) {
      didScroll = true;
      var scroll = $(window).scrollTop();

      if (scroll >= collapsePoint) {
        $('.nav-container, .site-content').addClass('nav-container-sticky');
      } else {
        $('.nav-container, .site-content').removeClass('nav-container-sticky');
      }

  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > hidePoint){
          // Scroll Down
          $('.nav-container').removeClass('scrolling-up').addClass('scrolling-down');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.nav-container').removeClass('scrolling-down').addClass('scrolling-up');
          }
      }

      lastScrollTop = st;
  }

} )( jQuery );
