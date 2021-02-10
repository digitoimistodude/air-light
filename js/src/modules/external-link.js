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

export default function styleExternalLinks() {
  let localDomains = [
    window.location.host,
  ];

  if (typeof window.air_light_externalLinkDomains !== 'undefined') {
    localDomains = localDomains.concat(window.air_light_externalLinkDomains);
  }

  const links = document.querySelectorAll('a');

  const externalLinks = [...links].filter((link) => isLinkExternal(link.href, localDomains));

  externalLinks.forEach((externalLink) => {
    const ariaLabel = externalLink.target === '_blank' ? `${getLocalization('external_link')} ${externalLink.textContent}, ${getLocalization('target_blank')}` : `${getLocalization('external_link')} ${externalLink.textContent}`;
    externalLink.setAttribute('aria-label', ariaLabel);
    externalLink.classList.add('is-external-link');
  });
}
