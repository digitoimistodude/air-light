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
import backToTop from './modules/top';
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
  backToTop();
});

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
