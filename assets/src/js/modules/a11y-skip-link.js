const initA11ySkipLink = () => {
  // Go through all the headings of the page and select the first one
  const a11ySkipLinkTarget = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
  const a11ySkipLink = document.querySelectorAll('.skip-link')[0];

  // When clicked, move focus to the target element
  if (a11ySkipLink) {
    a11ySkipLink.addEventListener('click', () => {
      a11ySkipLinkTarget.setAttribute('tabindex', '-1');
      a11ySkipLinkTarget.focus();
      a11ySkipLinkTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
};

export default initA11ySkipLink;
