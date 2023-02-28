/**
 * @Author: Elias Kautto
 * @Date:   2023-02-24 12:00:15
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-02-28 15:24:56
 */

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
