/**
 * @Author: Tuomas Marttila
 * @Date:   2023-02-17 10:10:38
 * @Last Modified by:   Tuomas Marttila
 * @Last Modified time: 2023-02-27 10:16:36
 */
/* eslint-disable max-len, no-param-reassign, no-unused-vars */
/**
 * Air theme JavaScript.
 */

// Import modules
import reframe from 'reframe.js';
import { styleExternalLinks, initExternalLinkLabels } from './modules/external-link';
import initAnchors from './modules/anchors';
import backToTop from './modules/top';
import initA11ySkipLink from './modules/a11y-skip-link';
import initA11yFocusSearchField from './modules/a11y-focus-search-field';
import { navDesktop, navMobile } from './modules/navigation';

// Define Javascript is active by changing the body class
document.body.classList.remove('no-js');
document.body.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  initAnchors();
  backToTop();
  styleExternalLinks();
  initExternalLinkLabels();
  initA11ySkipLink();
  initA11yFocusSearchField();

  // Init navigation
  navDesktop();
  navMobile();

  // Fit video embeds to container
  reframe('.wp-has-aspect-ratio iframe');
});
