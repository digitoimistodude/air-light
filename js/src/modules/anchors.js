/* eslint-disable no-param-reassign, no-undef */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-05-18 17:38:05
 */
import MoveTo from 'moveto';

const initAnchors = () => {
  // General anchors used in links with class "js-trigger"
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

  const triggers = document.getElementsByClassName('js-trigger');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < triggers.length; i++) {
    // If target doesn't exist, bail
    if (!document.getElementById(triggers[i].hash.substring(1))) {
      return;
    }

    // Move to target smoothly
    moveTo.registerTrigger(triggers[i]);

    // Focus to target
    triggers[i].addEventListener('click', (event) => {
      // If the trigger is nav-link, close nav
      if (triggers[i].classList.contains('nav-link')) {
        document.body.classList.remove('js-nav-active');
      }

      event.preventDefault();
      const target = document.getElementById(triggers[i].hash.substring(1));
      target.setAttribute('tabindex', '-1');
      target.focus();
      window.history.pushState('', '', triggers[i].hash);
    });
  }
};

export default initAnchors;
