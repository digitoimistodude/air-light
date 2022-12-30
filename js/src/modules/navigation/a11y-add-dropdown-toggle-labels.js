/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:23:22
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 00:32:37
 */
// Add proper link labels for screen readers
function a11yAddDropdownToggleLabels(items) {
  items.forEach((li) => {
    // If .dropdown-class does not exist then do nothing
    if (!li.querySelector('.dropdown')) {
      return;
    }

    // Get the dropdown-button
    const dropdownButton = li.querySelector('.dropdown-toggle');

    // Get the link text that is children of this item
    const linkText = li.querySelector('.dropdown').innerText;

    // Add the aria-label to the dropdown button
    // eslint-disable-next-line camelcase, no-undef
    dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
  });
}

export default a11yAddDropdownToggleLabels;
