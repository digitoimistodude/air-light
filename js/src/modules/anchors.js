/* eslint-disable no-param-reassign, no-undef */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-28 14:33:09
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
    moveTo.registerTrigger(triggers[i]);
  }
};

export default initAnchors;
