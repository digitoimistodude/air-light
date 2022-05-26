/* eslint-disable no-param-reassign */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-09-01 11:55:37
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-26 13:36:49
 */
/**
 * Style external links
 */

import getLocalization from './localization';

function isLinkExternal(link, localDomains) {
  // Empty links are not external
  if (!link.length) {
    return false;
  }

  const exceptions = [
    '#',
    'tel:',
    'mailto:',
    '/',
  ];

  // Check if the url starts with some of the exceptions
  const isException = exceptions.some((exception) => {
    const compare = new RegExp(`^${exception}`, 'g');
    return compare.test(link);
  });

  if (isException) {
    return false;
  }

  let linkUrl;
  try {
    linkUrl = new URL(link);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Invalid URL: ${link}`);
    return false;
  }
  // Check if host is one of the local domains
  return !localDomains.some((domain) => linkUrl.host === domain);
}

/**
 * Try to get image alt texts from inside a link
 * to use in aria-label, when only elements inside
 * of link are images
 * @param {*} link DOM link element
 * @returns string
 */
export function getChildAltText(link) {
  const children = [...link.children];

  if (children.length === 0) {
    return '';
  }

  const childImgs = children.filter((child) => child.tagName.toLowerCase() === 'img');

  // If there are other elements than img elements, no need to add aria-label
  if (children.length !== childImgs.length) {
    return '';
  }

  // Find alt texts and add to array
  const altTexts = childImgs.filter((child) => child.alt && child.alt !== '').map((child) => child.alt);

  // If there is no alt texts,
  if (!altTexts.length) {
    return '';
  }

  return altTexts.join(', ');
}

export function styleExternalLinks() {
  let localDomains = [
    window.location.host,
  ];

  if (typeof window.air_light_externalLinkDomains !== 'undefined') {
    localDomains = localDomains.concat(window.air_light_externalLinkDomains);
  }

  const links = document.querySelectorAll('a');

  const externalLinks = [...links].filter((link) => isLinkExternal(link.href, localDomains));

  externalLinks.forEach((externalLink) => {
    const textContent = externalLink.textContent.trim().length
      ? externalLink.textContent.trim() : getChildAltText(externalLink);
    const ariaLabel = externalLink.target === '_blank' ? `${textContent}: ${getLocalization('external_link')}, ${getLocalization('target_blank')}` : `${textContent}: ${getLocalization('external_link')}`;
    externalLink.setAttribute('aria-label', ariaLabel);
    externalLink.classList.add('is-external-link');
  });
}

export function initExternalLinkLabels() {
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
}
