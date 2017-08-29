/**
 * Air theme JavaScript.
 */

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

    // Init navigation
    jQuery('.menu-items').superfish({
      hoverClass: 'air-hover',
      delay: 0,
      speed: 0,
      speedOut: 0,
      cssArrows: true,
      disableHI: true
    });

    // Responsive navigation toggle
    $('#nav-toggle').click(function () {
      $('.menu-items').toggle();
      $(this).toggleClass('is-active');
    });

    // Slick carousel, add class slider to a container which has the slider items as children
    // $('.slider').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   dots: false,
    //   fade: true
    // });

    // Set up back to top link
    var moveTo = new MoveTo();
    var target = document.getElementById('target');
    moveTo.move(target);

    // Register a back to top trigger
    var trigger = document.getElementsByClassName('js-trigger')[0];
    moveTo.registerTrigger(trigger);

  });

} )( jQuery );
