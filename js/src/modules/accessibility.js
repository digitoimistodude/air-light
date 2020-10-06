/**
 * Accessibility functions
 */

import ask from './localization';

export default function externalLinks() {
  // Accessibility add "External link:" aria label for external links
  const currentHost = new RegExp(window.location.host);

  const links = document.querySelectorAll('a');
  links.each((link) => {
    const attr = link.attr('aria-label');
    if (!currentHost.test(link.attr('href')) && !attr) {
      if (link.attr('href') !== '#content') {
        // A link that does not contain the current host
        link.addClass('is-external-link');
        link.attr('aria-label', `${ask('external_link')} ${link.text()}`);
      }
    }

    // If is outside link and has target="_blank"
    if (!currentHost.test(link.attr('href')) && !attr && link.attr('target') === '_blank') {
      link.attr('aria-label', `${ask('external_link')}, ${ask('target_blank')} ${link.text()}`);
    }
  });
}
