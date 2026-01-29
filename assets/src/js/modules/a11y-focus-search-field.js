const initA11yFocusSearchField = () => {
  const urlSearch = window.location.search;
  const urlParams = new URLSearchParams(urlSearch);
  if (urlParams.has('s')) {
    const searchField = document.querySelector('main input[name="s"]');
    if (searchField) {
      searchField.focus({ preventScroll: true });
    }
  }
};

export default initA11yFocusSearchField;
