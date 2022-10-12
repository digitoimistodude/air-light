/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-12 17:32:43
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-12 15:06:50
 */
import MoveTo from 'moveto';

const initA11ySkipLink = () => {
  // Go through all the headings of the page and select the first one
  const a11ySkipLinkTarget = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
  const a11ySkipLink = document.querySelectorAll('.skip-link')[0];

  // Register trigger element
  // eslint-disable-next-line no-unused-vars, no-restricted-globals
  const moveTo = new MoveTo();

  // When clicked, move focus to the target element

  if (a11ySkipLink) {
    a11ySkipLink.addEventListener('click', () => {
      a11ySkipLinkTarget.setAttribute('tabindex', '-1');
      a11ySkipLinkTarget.focus();
      moveTo.move(a11ySkipLinkTarget);
    });
  }
};

export default initA11ySkipLink;
