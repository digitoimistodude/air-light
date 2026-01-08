/* eslint-disable no-param-reassign, no-undef */

import MoveTo from 'moveto';

const initAnchors = () => {
  const easeFunctions = {
    easeInQuad(t, b, c, d) { t /= d; return c * t * t + b; },
    easeOutQuad(t, b, c, d) { t /= d; return -c * t * (t - 2) + b; },
  };

  const moveTo = new MoveTo(
    { ease: 'easeInQuad' },
    easeFunctions,
  );

  let triggers = document.querySelectorAll('a[href*="#"]:not([href="#"]):not(#top)');

  triggers = Array.from(triggers);

  triggers.forEach((trigger) => {
    moveTo.registerTrigger(trigger);
    const targetId = trigger.hash.substring(1);
    const target = document.getElementById(targetId);

    trigger.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior of anchor links

      // If the trigger is nav-link, close nav
      if (trigger.classList.contains('nav-link') || trigger.classList.contains('dropdown-item')) {
        document.body.classList.remove('js-nav-active');

        // Additional navigation cleanup
        const html = document.documentElement;
        const container = document.getElementById('main-navigation-wrapper');
        const menu = container?.querySelector('ul');
        const button = document.getElementById('nav-toggle');

        if (html) html.classList.remove('disable-scroll');
        if (container) container.classList.remove('is-active');
        if (button) {
          button.classList.remove('is-active');
          button.setAttribute('aria-expanded', 'false');
        }
        if (menu) menu.setAttribute('aria-expanded', 'false');
      }

      // Check if the target element exists on the current page
      if (target) {
        // Scroll to the target element
        moveTo.move(target);

        // Update URL history
        window.history.pushState('', '', trigger.hash);

        // Focus on the target element after a delay
        setTimeout(() => {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }, 500);
      } else {
        // Navigate to the target page
        window.location.href = trigger.href;
      }
    });
  });
};

export default initAnchors;
