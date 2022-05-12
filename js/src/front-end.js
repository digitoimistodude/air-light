/* eslint-disable max-len, no-underscore-dangle, no-param-reassign */
/**
 * Air theme JavaScript.
 */

// Import modules
import reframe from 'reframe.js';
// eslint-disable-next-line no-unused-vars
import getLocalization from './modules/localization';
import { styleExternalLinks, getChildAltText } from './modules/external-link';
import initAnchors from './modules/anchors';
import 'what-input';
import './modules/navigation';
// import './modules/sticky-nav';

// Define Javascript is active by changing the body class
document.body.classList.remove('no-js');
document.body.classList.add('js');

// Fit video embeds to container
reframe('.wp-has-aspect-ratio iframe');

// Style external links
styleExternalLinks();

document.addEventListener('DOMContentLoaded', () => {
  initAnchors();
});

// jQuery start
// eslint-disable-next-line func-names
(function ($) {
  // Accessibility: Ensure back to top is right color on right background
  // Note: Needs .has-light-bg or .has-dark-bg class on all blocks
  const stickyOffset = $('.back-to-top').offset();
  const $contentDivs = $('.block, .site-footer');
  $(document).scroll(() => {
    // eslint-disable-next-line no-unused-vars, func-names, consistent-return
    $contentDivs.each(function (k) {
      const _thisOffset = $(this).offset();
      const _actPosition = _thisOffset.top - $(window).scrollTop();
      if (
        _actPosition < stickyOffset.top
        && _actPosition + $(this).height() > 0
      ) {
        $('.back-to-top')
          .removeClass('has-light-bg has-dark-bg')
          .addClass(
            $(this).hasClass('has-light-bg') ? 'has-light-bg' : 'has-dark-bg',
          );
        return false;
      }
    });
  });

  // Detect Visible section on viewport from bottom
  // @link https://codepen.io/BoyWithSilverWings/pen/MJgQqR
  // eslint-disable-next-line func-names
  $.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // Accessibility: Ensure back to top is right color on right background
  $(window).on('resize scroll', () => {
    // eslint-disable-next-line func-names
    $('.block, .site-footer').each(function () {
      if ($(this).isInViewport()) {
        $('.back-to-top')
          .removeClass('has-light-bg has-dark-bg')
          .addClass(
            $(this).hasClass('has-light-bg') ? 'has-light-bg' : 'has-dark-bg',
          );
      }
    });
  });

  // Hide or show the 'back to top' link
  // eslint-disable-next-line func-names
  $(window).scroll(function () {
    // Back to top
    const offset = 300; // Browser window scroll (in pixels) after which the 'back to top' link is shown
    const offsetOpacity = 1200; // Browser window scroll (in pixels) after which the link opacity is reduced
    const linkClass = '.back-to-top';

    if ($(this).scrollTop() > offset) {
      $(linkClass).addClass('is-visible');
    } else {
      $(linkClass).removeClass('is-visible');
    }

    if ($(this).scrollTop() > offsetOpacity) {
      $(linkClass).addClass('fade-out');
    } else {
      $(linkClass).removeClass('fade-out');
    }
  });

  // Document ready start
  $(() => {
    // Your JavaScript here
  });
}(jQuery));

// Add aria-labels to links without text or aria-labels and contain image with alt text
const links = [...document.querySelectorAll('a')];
// eslint-disable-next-line no-unused-vars
const linksWithImgChildren = links.forEach((link) => {
  // If link already has text content or an aria label no need to add aria-label
  if (link.textContent.trim() !== '' || link.ariaLabel) {
    return;
  }

  const ariaLabel = getChildAltText(link);
  if (ariaLabel !== '') {
    link.ariaLabel = ariaLabel;
  }
});
