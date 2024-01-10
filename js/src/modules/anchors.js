/* eslint-disable no-param-reassign, no-undef */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-01-10 18:53:09
 */
import MoveTo from 'moveto';

const initAnchors = () => {
  const easeFunctions = {
    easeInQuad(t, b, c, d) { t /= d; return c * t * t + b; },
    easeOutQuad(t, b, c, d) {
      t /= d; return -c * t * (t - 2) + b;
    },
  };

  const moveTo = new MoveTo(
    { ease: 'easeInQuad' },
    easeFunctions,
  );

  // Get all links that have only the hash as href and is not back to top link
  const triggers = document.querySelectorAll('a[href*="#"]:not([href="#"]):not(#top)');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < triggers.length; i++) {
    // Move to target smoothly
    moveTo.registerTrigger(triggers[i]);
    const target = document.getElementById(triggers[i].hash.substring(1));

    // If the trigger is nav-link, close nav
    if (triggers[i].classList.contains('nav-link')) {
      document.body.classList.remove('js-nav-active');
    }

    triggers[i].addEventListener('click', () => {
      // If the trigger is nav-link, close nav
      if (triggers[i].classList.contains('nav-link')) {
        document.body.classList.remove('js-nav-active');
      }

      // Focus to target
      if (target) {
        // Needs delay for smooth moveTo scroll
        setTimeout(() => {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }, 500);
      }
    });
  }
};

export default initAnchors;
