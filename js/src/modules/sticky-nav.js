// eslint-disable-next-line func-names
(function ($) {
  let didScroll;
  let lastScrollTop = 0;
  const delta = 0;
  const collapsePoint = 157; // In what pixel height from top the navigation will be sticky
  const hidePoint = 700; // In what pixel height from top the navigation will collapse

  $(window).scroll(() => {
    didScroll = true;
    const scroll = $(window).scrollTop();

    if (scroll >= collapsePoint) {
      $('.nav-container, .site-content').addClass('nav-container-sticky');
    } else {
      $('.nav-container, .site-content').removeClass('nav-container-sticky');
    }
  });

  function hasScrolled() {
    const st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > hidePoint) {
      // Scroll Down
      $('.nav-container').removeClass('scrolling-up').addClass('scrolling-down');
    } else {
      // Scroll Up
      // eslint-disable-next-line no-lonely-if
      if (st + $(window).height() < $(document).height()) {
        $('.nav-container').removeClass('scrolling-down').addClass('scrolling-up');
      }
    }

    lastScrollTop = st;
  }

  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
}(jQuery));
